
/**
 * 合并上下文对象
 *  webpack 的require.context 方法 提取模块内容
 */

const requireApi = require.context('.', true, /.js$/);

const module = {};

requireApi.keys().forEach((key) => { // key为每一个方法

    // 跳过的文件
    if (key === './index.js' || key === './http.js') {
        return;
    }

    Object.assign(module, requireApi(key));
})

export default module;