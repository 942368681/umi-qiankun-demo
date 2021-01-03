import React from 'react';
import styles from './index.less';
import { MicroApp } from 'umi';

const SubAppProvider: React.FC = (props: any) => {
	const subAppName = props.history.location.query.appName;
	console.log(88888888, props)
	return (
		<div className={styles['sub-app-container']}>
			<h2>{`子应用：${subAppName}`}</h2>
			<div className={styles['sub-app-wrapper']}>
				{/* {props.children} */}
				<MicroApp name="subApp1"/>
			</div>
		</div>
	);
};

export default SubAppProvider;
