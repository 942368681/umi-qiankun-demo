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
        window.EVENT_BUS['getMainAppGlobalState'] = () => {
            return getDvaApp();
        };
        window.EVENT_BUS['goBackToLogin'] = () => {
            history.replace('/login');
        };
        window.EVENT_BUS['navigateToSubPage'] = (page: string) => {
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
