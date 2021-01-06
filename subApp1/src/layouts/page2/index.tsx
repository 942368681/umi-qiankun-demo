import React from 'react';
import styles from './index.less';
import { Link } from 'umi';

const Page2: React.FC = (props: any) => {
	return (
		<div>
			<Link to={`/page2/page2comp1`}>to page2comp1</Link>
			<Link to={`/page2/page2comp2`}>to page2comp2</Link>
			{props.children}
		</div>
	);
};

export default Page2;
