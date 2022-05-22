import qs from 'qs';
import { message } from 'antd';
import { history } from 'umi';

const fetch = require('dva').fetch;

/**
 * 创建响应状态函数
 */
const checkStatus = (res) => {
    // 请求成功 200 - 300 之间
    if (200 >= res.status < 300) {
        return res;
    }

    message.error(`网络请求错误，${res.status}`);
    throw new Error(res.statusText)
}

/**
 * utils
 * 判断本此请求内容是否成功
 * judgeOkState
 */
const judgeOkState = async (res) => {
    const cloneRes = await res.clone().join();

    // 0 : success
    // 后端返回内容错误（而不是网路请求网路错误）
    if (cloneRes.code !== 0) {
        message.error(`${cloneRes.msg}${cloneRes.code}`)

        // 例如普通用户访问管理员的接口信息
        // happen error, to login page
        history.replace('/login')
        sessionStorage.removeItem('token')
    }
    return res;
}

/**
 * utils
 * 错误处理函数
 * handleError
 */
const handleError = (error) => {
    if (error instanceof TypeError) {
        console.log(`网络请求失败了! ${error}`);
        message.error('网络请求失败了')
    }
    return {
        code: -1,
        data: false
    }
}

/**
 * Http 类
 * utils
 */
class Http {

    /**
     * 封装静态方法——fetch请求
     * 公共处理
     */
    static async staticFetch(url = '', options = {}) {

        url = '/api' + url; // 统一处理请求前缀 '/api'

        // 默认配置
        const defaultOptions = {
            mode: 'cors', // 支持跨域处理，以cors的形式进行跨域
            headers: {
                Authorization: sessionStorage.getItem('token') || null,
            }
        }

        // 处理 POST 和 PUT 请求
        if (options.method == 'POST' || options.method === 'PUT') {
            defaultOptions.headers['Content-type'] = 'application/json;charset=utf-8';
        }

        // 合并options选项
        const newOptions = { ...defaultOptions, ...options }

        return fetch(url, newOptions)
            .then(checkStatus) // 检查和拦截状态
            .then(judgeOkState) // 请求状态码是否成功
            .then((res) => {
                // 获取响应头token
                const token = res.headers.get('Authorization');
                // 获取token，并且存储到sessionStorage里面
                token && sessionStorage.setItem('token', token)
            })
            // fail
            .catch(handleError)
    }



    /**
     * 各种请求类型 
        * post 
        * put 
        * get 
        * del(为了不和delete关键字重名)
     */

    post(url, params = {}, option = {}) {
        const options = Object.assign({ method: 'POST' }, option)
        options.body = JSON.stringify(params);
        return Http.staticFetch(url, options)
    }

    put(url, params = {}, option = {}) {
        const options = Object.assign({ method: 'PUT' }, option)
        options.body = JSON.stringify(params);
        return Http.staticFetch(url, options)
    }

    get(url, option = {}) {
        const options = Object.assign({ method: 'GET' }, option);
        Object.keys(option) && (url += '?' + qs.stringify(option))
        return Http.staticFetch(url, options)
    }

    del(url, option = {}) {
        const options = Object.assign({ method: 'DELETE' }, option);
        Object.keys(option) && (url += '?' + qs.stringify(option));
        return Http.staticFetch(url, options);
    }
}

// post_put = (fnName, methodName) => {
//     return fnName(url, params = {}, option = {}) {
//         const options = Object.assign({ method: methodName }, option)
//         options.body = JSON.stringify(params);
//         return Http.staticFetch(url, options)
//     }
// }

const resFun = new Http();

export default resFun;