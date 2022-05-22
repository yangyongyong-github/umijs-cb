import { defineConfig } from 'umi';
import { resolve } from 'path';

export default defineConfig({
  // treeShaking: true, // umi2.x
  nodeModulesTransform: {
    type: 'none',
  },
  // 采用自定的路由（pages下的文件即路由）
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  mock: false,
  publicPath: '/',
  dva: { immer: true },
  dynamicImport: {
    loading: '@/components/common/Loading',
  },
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
    },
  },
  alias: {
    // api 接口调用
    api: resolve(__dirname, './src/server/'),
    components: resolve(__dirname, './src/components'),
    styles: resolve(__dirname, './src/styles'),
    // config: resolve(__dirname, './src/utils/config'),
    themes: resolve(__dirname, './src/themes'),
    utils: resolve(__dirname, './src/utils'),
    images: resolve(__dirname, './src/assets/images'),
    common: resolve(__dirname, './src/common'),
    // useCommon: resolve(__dirname, './src/hook/useCommon.jsx'),
  },
});
