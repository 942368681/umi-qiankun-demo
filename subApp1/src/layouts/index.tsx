import React from 'react';
import styles from './index.less';

const BasicLayout: React.FC = (props: any) => {

	return (
		<div className={styles['app-container']}>
			{props.children}
		</div>
	);
};

export default BasicLayout;
