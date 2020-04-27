import routes from './routes'

// append routes
window.Fusion.booting((router, state) => router.addRoutes(routes))
