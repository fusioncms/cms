import Cookies from 'js-cookie'

export default {
    namespaced: true,

    state: {
        user: null,
        isAuthenticated: false,
        requiresAuth: null
    },

    getters: {
        getUser:         state => state.user,
        isAuthenticated: state => state.isAuthenticated,
        requiresAuth:    state => state.requiresAuth,
    },

    mutations: {
        setUser: (state, user) => {
            state.user = user
        },

        setIsAuthenticated: (state, isAuthenticated) => {
            state.isAuthenticated = isAuthenticated
        },

        setRequiresAuth: (state, requiresAuth) => {
            state.requiresAuth = requiresAuth
        }
    },

    actions: {
        authenticate({ state, rootState, commit }, payload) {
            const session = Cookies.get('XSRF-TOKEN')  // Is session still alive?
            const user    = state.user                 // Has `user` been set?
            const isAuthenticated = !!session && !!user
            
            commit('setIsAuthenticated', isAuthenticated)
            
            // ...for guests only.
            if (state.requiresAuth == true && !state.isAuthenticated) {
                Fusion.router.push(payload.guestNext)
            }

            // ...for admins only.
            if (state.requiresAuth == false && state.isAuthenticated) {
                Fusion.router.push(payload.adminNext)
            }
        }
    }
}