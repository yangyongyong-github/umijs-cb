import $http from 'api'
export default {
    namespace: 'common',
    state: {

    },
    subscriptions: {
        setup({ dispatch, history }) {
            // 初始化查询用户是否登录,app.start阶段执行
            dispatch({ type: 'queryUserLogin', payload: { history } })
        }
    },
    effects: {
        *queryUserLogin({ payload }, { put, call }) {
            const { history, history: { location: { pathname } } } = payload;
            // 不需要登录
            if (pathname !== '/login' && pathname !== '/forgetPasssWord') {
                // 服务端验证
                if (!sessionStorage.getItem('userProfile') || !sessionStorage.getItem('token') || !sessionStorage.getItem('routeList')) {
                    // 强行跳转到登录界面
                    history.replace('/login')
                } else {
                    // 用户满足条件，进行登录信息的检测
                    const res = yield call($http.queryUserLogin)
                    if (res.code !== 0) {
                        return
                    }
                    const { data: routeList } = yield call($http.getRouteList);
                    sessionStorage.setItem('routeList', JSON.stringify(routeList))
                }
            } else {
                // 无需访问权限-无需拦截
                sessionStorage.clear()
            }
        }
    }
}