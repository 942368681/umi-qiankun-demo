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
				{ path: '/', component: '@/pages/index', exact: true },
				{ path: '/login', component: '@/pages/login/index', exact: true },
			]
		}
	],
	dva: {
		immer: true,
		hmr: true,
	},
	qiankun: {
		master: {}
	}
});
