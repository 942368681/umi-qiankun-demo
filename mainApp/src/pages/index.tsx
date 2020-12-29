import React from 'react';
import { useSelector, Link, useStore, getDvaApp, MicroApp } from 'umi';
import styles from './index.less';

export default (props: any) => {
	// console.log(4444444, getDvaApp())
	// const { subApps } = useSelector((store: any) => ({
    //     subApps: store.global.subApps,
    // }));
	return (
		<div>
			<h1 className={styles.title}>Page index</h1>
			<ul>
				{
					window.SUB_APPS && window.SUB_APPS.map((item: any) => {
						return (
							<li key={item.name}>
								<Link to={`/${item.name}`}>{item.name}</Link>
								{/* <MicroApp name={item.name} mainAppProps={getDvaApp()}>{item.name}</MicroApp> */}
							</li>
						)
					})
				}
			</ul>
		</div>
	);
}
