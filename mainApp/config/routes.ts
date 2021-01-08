export default [
    {
        path: '/login',
        component: '@/pages/login/index',
        exact: true
    },
    {
        path: '/',
        component: '@/layouts/index',
        routes: [
            {
                path: '/',
                component: '@/pages/index',
                exact: true
            },
            {
                path: '/subApp',
                component: '@/layouts/SubAppProvider',
                routes: [
                    {
                        path: '/subApp/subApp1',
                        microApp: 'subApp1',
                        exact: true,
                        microAppProps: {
                            autoSetLoading: true,
                            className: 'micro-container',
                            wrapperClassName: 'micro-wrapper',
                        }
                    },
                    {
                        path: '/subApp/subApp2',
                        microApp: 'subApp2',
                        exact: true,
                        microAppProps: {
                            autoSetLoading: true,
                            className: 'micro-container',
                            wrapperClassName: 'micro-wrapper',
                        }
                    },
                ],
            }
        ]
    },
];