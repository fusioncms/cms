export default [
    {
        path: '/beta',
        component: require('./views/Dashboard').default,
        name: 'beta',
        meta: {
            requiresAuth: true,
            layout: 'admin'
        }
    },
    {
        path: '/beta/install',
        component: require('./views/Install/Index').default,
        name: 'beta.install',
        meta: {
            requiresAuth: true,
            layout: 'admin'
        }
    }
]