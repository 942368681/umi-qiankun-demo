import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
					path: '/',
					component: '@/pages/index',
					exact: true
        },
        {
					path: '/page1',
					component: '@/pages/page1/index',
					exact: true
        },
        {
          path: '/page2',
          component: '@/layouts/page2/index',
          routes: [
            {
              path: '/page2/page2comp1',
              component: '@/pages/page2comp1/index',
              exact: true
            },
            {
              path: '/page2/page2comp2',
              component: '@/pages/page2comp2/index',
              exact: true
            }
          ]
        }
      ]
    },
  ],
  dva: {
    immer: true,
    hmr: true,
  },
  qiankun: {
    slave: {}
  }
});
