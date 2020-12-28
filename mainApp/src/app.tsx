import request from './utils/request';
import {
    message
} from 'antd';
import { useState } from 'react';
import { getDvaApp, useStore } from 'umi';
export const qiankun = request('/api/appList', {}).then((res: any) => {
    console.log('子应用列表：', res)
    console.log(3333333, getDvaApp()/* getDvaApp()._store.getState().global */)
    if (res && res.data && res.data.list && res.data.list.length) {
        // getDvaApp()._store.dispatch({
        //     type: 'global/registerSubApps',
        //     apps: res.data.list
        // });
        window.SUB_APPS = res.data.list;
        return {
            apps: res.data.list.map((item: any) => ({
                ...item,
                props: {
                    appName: item.name
                }
            })),
            sandbox: true,
            prefetch: 'all',
            routes: res.data.list.map((item: any) => ({
                path: `/${item.name}`,
                microApp: item.name,
                microAppProps: {
                    autoSetLoading: true, // 开启微应用的 loading 动画
                    className: 'myContainer', // 微应用容器 class
                    wrapperClassName: 'myWrapper'  // wrapper class，仅开启 loading 动画时生效
                }
            })),
            lifeCycles: {
                beforeLoad: (props: any) => {
                    console.log(1111111, props);
                    props.props.aaa = 12;
                },
                beforeMount: (props: any) => {
                    console.log(2222222, props);
                },
                afterMount: (props: any) => {
                    console.log(3333333, props);
                },
                beforeUnmount: (props: any) => {
                    console.log(4444444, props);
                },
                afterUnmount: (props: any) => {
                    console.log(5555555, props);
                }
            }
        };
    } else {
        message.error('子应用初始化失败');
    }
}).catch((error: any) => {
    console.log(error);
    message.error('子应用初始化失败');
});

// export function render(oldRender: Function) {
//     console.log(3333333, getDvaApp()/* getDvaApp()._store.getState().global */)
//     oldRender()
// }