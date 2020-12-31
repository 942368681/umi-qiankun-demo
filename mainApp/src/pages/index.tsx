import React from 'react';
import { useSelector, Link, useStore, getDvaApp } from 'umi';
import styles from './index.less';

export default (props: any) => {
	// console.log(4444444, getDvaApp())
	const { subApps, title } = useSelector((store: any) => ({
		subApps: store.mainAppGlobal.subApps,
		title: store.mainAppGlobal.title
	}));
	return (
		<div>
			<h1 className={styles.title}>Page index</h1>
			<h2>{title}</h2>
			<ul>
				{
					subApps.map((item: any) => {
						return (
							<li key={item.name}>
								<Link to={`/${item.name}`}>{item.name}</Link>
							</li>
						)
					})
				}
			</ul>
		</div>
	);
}
