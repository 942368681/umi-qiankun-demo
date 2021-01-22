import React, { useEffect } from 'react';
import styles from './index.less';
import { useDispatch, getDvaApp, history } from 'umi'; 
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/zh_CN';

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
        window.GLOBAL_EVENT['getMainAppGlobalState'] = () => {
            return getDvaApp();
        };
        window.GLOBAL_EVENT['goBackToLogin'] = () => {
            history.replace('/login');
        };
        window.GLOBAL_EVENT['navigateToSubPage'] = (page: string) => {
            let routeUrl = ''
            switch (page) {
                case 'a':
                    routeUrl = '';
                    break;
            
                default:
                    routeUrl = '';
                    break;
            }
            if (routeUrl) {
                history.push(routeUrl);
            }
        };
    };
	return (
        <ConfigProvider locale={locale}>
            <div className={styles['main-app-global-provider']}>
                {children}
            </div>
        </ConfigProvider>
	);
};

export default AppProvider;
