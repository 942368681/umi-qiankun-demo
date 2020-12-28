import React from 'react';
import { useSelector, Link } from 'umi';
import styles from './index.less';

export default (props: any) => {
	const { subApps } = useSelector((store: any) => ({
		subApps: store.global.subApps
	}));
	return (
		<div>
			<h1 className={styles.title}>Page index</h1>
			<ul>
				{/* {
					subApps.map((item: any) => {
						return (
							<li key={item.name}>
								<Link to={`/${item.name}`}>{item.name}</Link>
							</li>
						)
					})
				} */}
				<li key={'subApp1'}>
					<Link to={`/subApp1`}>{'subApp1'}</Link>
				</li>
				<li key={'subApp2'}>
					<Link to={`/subApp2`}>{'subApp2'}</Link>
				</li>
			</ul>
		</div>
	);
}
