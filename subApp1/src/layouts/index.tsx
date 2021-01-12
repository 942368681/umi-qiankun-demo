import React from 'react';
import styles from './index.less';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/zh_CN';

const BasicLayout: React.FC = (props: any) => {

	return (
		<ConfigProvider locale={locale}>
			<div className={styles['app-container']}>
				{props.children}
			</div>
		</ConfigProvider>
	);
};

export default BasicLayout;
