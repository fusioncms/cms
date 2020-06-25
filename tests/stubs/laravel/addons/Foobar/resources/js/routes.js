export default [
    {
        path: '/foobar',
        component: require('./pages/Dashboard').default,
        name: 'foobar',
        meta: {
            requiresAuth: true,
            layout: 'admin'
        }
    },
    {
        path: '/foobar/install',
        component: require('./pages/Install/Index').default,
        name: 'foobar.install',
        meta: {
            requiresAuth: true,
            layout: 'admin'
        }
    }
]