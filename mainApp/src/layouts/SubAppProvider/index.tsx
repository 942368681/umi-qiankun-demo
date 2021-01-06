import React from 'react';
import styles from './index.less';
import { useSelector } from 'umi';

const SubAppProvider: React.FC = (props: any) => {
	const { currentMountedSubApp } = useSelector((store: any) => ({
		currentMountedSubApp: store.mainAppGlobal.currentMountedSubApp
	}));
	return (
		<div className={styles['sub-app-container']}>
			<h2>{`子应用：${currentMountedSubApp}`}</h2>
			<div className={styles['sub-app-wrapper']}>
				{props.children}
			</div>
		</div>
	);
};

export default SubAppProvider;
