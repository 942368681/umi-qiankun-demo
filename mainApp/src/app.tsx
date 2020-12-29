import request from './utils/request';
import {
    message
} from 'antd';
import { useState } from 'react';
import { getDvaApp, useStore } from 'umi';
let SUB_APPS = null;

// export const qiankun = new Promise(resolve => {
//     setTimeout(() => {
//         console.log(3333333, getDvaApp()/* getDvaApp()._store.getState().global */)
//         // resolve({
//         //     // 注册子应用信息
//         //     apps: SUB_APPS,
//         //     jsSandbox: true, // 是否启用 js 沙箱，默认为 false
//         //     prefetch: true, // 是否启用 prefetch 特性，默认为 true
//         //     lifeCycles: {
//         //         beforeLoad: props => {
//         //             // console.log(props);
//         //         },
//         //         beforeMount: props => {
//         //             // console.log(props);
//         //         },
//         //         afterMount: props => {
//         //             // console.log(props);
//         //         },
//         //         beforeUnmount: props => {
//         //             // console.log(props);
//         //         },
//         //         afterUnmount: props => {
//         //             // console.log(props);
//         //         }
//         //     }
//         // });
//     }, 1000);
// });

// export const qiankun = request('/api/appList', {}).then((res: any) => {
//     console.log('子应用列表：', res)
//     console.log(3333333, getDvaApp()/* getDvaApp()._store.getState().global */)
//     setTimeout(() => {
//         console.log(3333333, getDvaApp()/* getDvaApp()._store.getState().global */)
//     }, 0);
//     if (res && res.data && res.data.list && res.data.list.length) {
//         // getDvaApp()._store.dispatch({
//         //     type: 'global/registerSubApps',
//         //     apps: res.data.list
//         // });
//         window.SUB_APPS = res.data.list;
//         return {
//             apps: res.data.list.map((item: any) => ({
//                 ...item,
//                 // props: {
//                 //     appName: item.name
//                 // }
//             })),
//             sandbox: true,
//             prefetch: 'all',
//             routes: res.data.list.map((item: any) => ({
//                 path: `/${item.name}`,
//                 microApp: item.name,
//                 microAppProps: {
//                     autoSetLoading: true, // 开启微应用的 loading 动画
//                     className: 'myContainer', // 微应用容器 class
//                     wrapperClassName: 'myWrapper'  // wrapper class，仅开启 loading 动画时生效
//                 }
//             })),
//             lifeCycles: {
//                 beforeLoad: (props: any) => {
//                     // console.log(1111111, props);
//                 },
//                 beforeMount: (props: any) => {
//                     // console.log(2222222, props);
//                 },
//                 afterMount: (props: any) => {
//                     // console.log(3333333, props);
//                 },
//                 beforeUnmount: (props: any) => {
//                     // console.log(4444444, props);
//                 },
//                 afterUnmount: (props: any) => {
//                     // console.log(5555555, props);
//                 }
//             }
//         };
//     } else {
//         message.error('子应用初始化失败');
//     }
// }).catch((error: any) => {
//     console.log(error);
//     message.error('子应用初始化失败');
// });

export function render(oldRender: Function) {
    request('/api/appList', {
        method: 'GET'
    }).then(res => {
        const {
            data: {
                list
            }
        } = res;

        // SUB_APPS = list.map(item => ({
        //     ...item,
        //     base: `/${item.name}`,
        //     history: 'browser',
        //     mountElementId: 'root-slave',
        //     props: {
        //         app: item.name,
        //         mainAppStore: window.g_app._store,
        //         router
        //     }
        // }));
        console.log(3333333, getDvaApp()/* getDvaApp()._store.getState().global */)
        setTimeout(() => {
            console.log(3333333, getDvaApp()/* getDvaApp()._store.getState().global */)
            SUB_APPS = list.map((item: any) => ({
                ...item,
                props: {
                    mainAppStore: getDvaApp()._store.getState().global
                }
            }));
        }, 0);
        oldRender();
    });
}

