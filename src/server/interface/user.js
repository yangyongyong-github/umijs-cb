
import ajax from '../http.js'; // 获取一个http实例

// 用户登录接口api
export const userLogin = (params) => ajax.post('/login', params);

// 获取手机验证码
export const getSmCode = (params) => ajax.post('/getCode', params);