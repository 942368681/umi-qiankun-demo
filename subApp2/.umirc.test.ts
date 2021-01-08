import { defineConfig } from 'umi';
import routes from './config/routes';
import theme from './config/theme';

export default defineConfig({
	routes,
	theme,
	hash: true,
	nodeModulesTransform: {
		type: 'none',
	},
	define: {
		'process.env.UMI_ENV': 'test',
		'process.env.versionTag': new Date().toLocaleString(),
	},
	dva: {
		immer: true,
		hmr: true,
	},
	qiankun: {
		slave: {}
	}
});