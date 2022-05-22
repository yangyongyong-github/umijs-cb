
import ajax from '../http.js'; // 获取一个http实例

// 用户登录接口api
export const userLogin = (params) => ajax.post('/login', params);

// 获取手机验证码
export const getSmCode = (params) => ajax.post('/getCode', params);

/**
 * 检测验证码输入的是否正确
 * apply : 手机号+雁阵码 => 登录 / 重置密码
 */
export const checkedCode = parsms => ajax.get('/checkSmCode', params);

// 重置密码
export const resetpassword = params => ajax.post('/resetPassword', params)


//- 检测用户是否登录
export const queryUserLogin = () => ajax.get('/queryLoginStatus');

//- 获取路由表
export const getRouteList = () => ajax.get('//getRouteList');