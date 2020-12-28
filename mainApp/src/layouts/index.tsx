import React from 'react';
import styles from './index.less';

const BasicLayout: React.FC = (props: any) => {

	return (
		<div className={styles.appContainer}>
			{props.children}
		</div>
	);
};

export default BasicLayout;
