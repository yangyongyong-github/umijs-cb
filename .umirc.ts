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
  // proxy: {
  //   '/api': {
  //     target: 'http://127.0.0.1:5008',
  //     changeOrigin: true,
  //   },
  // },
  alias: {
    // api: resolve(__dirname, './src/services/'),
    components: resolve(__dirname, './src/components'),
    styles: resolve(__dirname, './src/styles'),
    // config: resolve(__dirname, './src/utils/config'),
    themes: resolve(__dirname, './src/themes'),
    utils: resolve(__dirname, './src/utils'),
    // useCommon: resolve(__dirname, './src/hook/useCommon.jsx'),
  },
});
