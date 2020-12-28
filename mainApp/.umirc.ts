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
				// { path: '/login', component: '@/pages/login/index', exact: true },
				{
					path: '/subApp1',
					microApp: 'subApp1',
				},
				{
					path: '/subApp2',
					microApp: 'subApp2',
				}
			]
		}
	],
	dva: {
		immer: true,
		hmr: true,
	},
	qiankun: {
		master: {
			apps: [
				{
					name: 'subApp1',
					entry: '//192.168.200.18:8001'
				},
				{
					name: 'subApp2',
					entry: '//192.168.200.18:8002'
				},
			]
		}
	}
});
