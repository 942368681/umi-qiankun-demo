import React, { useEffect } from 'react';
import styles from './index.less';
import { useDispatch } from 'umi'; 

interface IProps {
    subApps: Array<any>
}

const AppProvider: React.FunctionComponent<IProps> = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'global/registerSubApps',
            apps: props.subApps
        });
    }, []);
	return (
		<div className={styles['app-provider']}>
			{props.children}
		</div>
	);
};

export default AppProvider;
