import React from 'react';
import styles from './index.less';

const SubAppProvider: React.FC = (props: any) => {
	const subAppName = props.history.location.query.appName;
	return (
		<div className={styles['sub-app-container']}>
			<h2>{`子应用：${subAppName}`}</h2>
			<div className={styles['sub-app-wrapper']}>
				{props.children}
			</div>
		</div>
	);
};

export default SubAppProvider;
