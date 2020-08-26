export default {
    namespaced: true,

    state: {
        version: null,
        hasUpdate: false
    },

    getters: {
        getVersion: (state) => {
            return state.version
        },

        hasUpdate: (state) => {
            return state.hasUpdate
        },
    },

    mutations: {
        setVersion: (state, version) => {
            state.version = version
        },

        setHasUpdate: (state, hasUpdate) => {
            state.hasUpdate = hasUpdate
        },
    },

    actions: {
        checkForUpdates: ({ state, commit }) => {
            axios.get('/api/updates')
                .then((response) => {
                    const items   = response.data.data.items
                    const current = _.find(items, (item) => item.title == `v${state.version}`)
                    const latest  = _.head(items)

                    commit('setHasUpdate', current.id < latest.id)
                })
                .catch(error => {})
        }
    }
}