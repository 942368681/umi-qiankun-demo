import React from 'react';
import { useSelector, Link, useStore, getDvaApp } from 'umi';
import styles from './index.less';

export default (props: any) => {
	const { subApps, title } = useSelector((store: any) => ({
		subApps: store.mainAppGlobal.subApps,
		title: store.mainAppGlobal.title
	}));
	return (
		<div>
			<h1 className={styles.title}>{title}</h1>
			<ul>
				{
					subApps.map((item: any) => {
						return (
							<li key={item.name}>
								<Link to={`/subApp/${item.name}?appName=${item.name}`}>{item.name}</Link>
							</li>
						)
					})
				}
			</ul>
		</div>
	);
}
