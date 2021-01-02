import React, { useEffect } from 'react';
import styles from './index.less';
import { useDispatch, getDvaApp, history } from 'umi'; 

interface IProps {
    subApps: Array<any>
}

const AppProvider: React.FunctionComponent<IProps> = ({children, subApps}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'mainAppGlobal/setSubApps',
            apps: subApps
        });
        initEventBus();
    }, []);
    const initEventBus = () => {
        window.EVENT_BUS['getMainAppGlobalState'] = () => {
            return Promise.resolve(getDvaApp());
        };
        window.EVENT_BUS['goBackToLogin'] = () => {
            history.replace('/login');
        };
    };
	return (
		<div className={styles['global-provider']}>
			{children}
		</div>
	);
};

export default AppProvider;
