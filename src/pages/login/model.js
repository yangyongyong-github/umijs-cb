import $http from 'api';
import { message } from 'antd';
import { history } from 'umi';

export default {
    namespace: 'userLogin',
    state: {
        userInfo: sessionStorage.getItem('userProfile') ? JSON.parse(sessionStorage.getItem('userProfile')) : null,
    },
    reducers: {
        // 更新用户信息
        updateUserProfile: (state, { payload }) => ({ ...state, ...payload })
    },
    effects: {
        *login({ payload }, { put, call, select }) {
            const { data, msg } = yield call($http.userLogin, payload)
            if (!data) {
                // 没有数据
                message.error(msg);
                return
            }

            // 请求成功之后，进行路由表的获取
            const routeData = yield call($http.getRouteList);

            sessionStorage.setItem('userProfile', JSON.stringify(data))
            sessionStorage.setItem('routeList', JSON.stringify(routeData.data));

            yield put({
                type: 'updateUserProfile',
                payload: { userInfo: data },
            })

            // todo 页面跳转
            history.push(routeData.data[0].route);
        }
    }
}