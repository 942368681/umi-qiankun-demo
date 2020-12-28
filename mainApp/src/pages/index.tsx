import React from 'react';
import { useSelector, Link, useStore, getDvaApp } from 'umi';
import styles from './index.less';

export default (props: any) => {
	console.log(11111111, window.SUB_APPS)
	return (
		<div>
			<h1 className={styles.title}>Page index</h1>
			<ul>
				{
					window.SUB_APPS && window.SUB_APPS.map((item: any) => {
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
