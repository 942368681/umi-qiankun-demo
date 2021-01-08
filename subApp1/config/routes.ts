export default [
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
                path: '/page1',
                component: '@/pages/page1/index',
                exact: true
            },
            {
                path: '/page2',
                component: '@/layouts/page2/index',
                routes: [
                    {
                        path: '/page2/page2comp1',
                        component: '@/pages/page2comp1/index',
                        exact: true
                    },
                    {
                        path: '/page2/page2comp2',
                        component: '@/pages/page2comp2/index',
                        exact: true
                    }
                ]
            }
        ]
    },
];