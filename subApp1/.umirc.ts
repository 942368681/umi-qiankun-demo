import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  dva: {
    immer: true,
    hmr: true,
  },
  qiankun: {
    slave: {}
  }
});
