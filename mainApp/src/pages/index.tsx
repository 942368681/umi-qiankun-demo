import React from 'react';
import { useSelector, Link, useStore, getDvaApp, history } from 'umi';
import styles from './index.less';
import { Table } from 'antd';
const columns = [
	{
		title: '姓名',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: '年龄',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: '住址',
		dataIndex: 'address',
		key: 'address',
	},
];

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
								<Link to={`/subApp/${item.name}`}>{item.name}</Link>
							</li>
						)
					})
				}
			</ul>
			<Table dataSource={[]} columns={columns} />
		</div>
	);
}
