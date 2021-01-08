import { defineConfig } from 'umi';
import routes from './config/routes';
import theme from './config/theme';

export default defineConfig({
	routes,
	theme,
	nodeModulesTransform: {
		type: 'none',
	},
	define: {
		'process.env.UMI_ENV': 'dev',
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
