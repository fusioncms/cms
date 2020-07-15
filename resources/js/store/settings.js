export default {
    namespaced: true,

    state: {
        groups: {},
        settings: {},
    },

    getters: {
        getGroup: (state) => (key) => {
            return state.groups[key]
        },

        getGroups: (state) => {
            return state.groups
        },

        getGroupSections: (state) => {
            return _.groupBy(state.groups, 'group')
        },

        getSetting: (state) => (key) => {
            return state.settings[key]
        },

        getSettings: (state) => {
            return state.settings
        },
    },

    mutations: {
        setGroups (state, payload) {
            state.groups = _.keyBy(payload, 'handle')
        },

        setSettings (state, payload) {
            let items    = _.map(payload, 'settings')
            let settings = {}

            _.forEach(items, (item) => _.merge(settings, item))

            state.settings = settings
        },
    },

    actions: {
        fetchSettings (context) {
            axios.get('/api/settings')
                .then(response => {
                    context.commit('setGroups', response.data.data)
                    context.commit('setSettings', response.data.data)
                })
                .catch(error => {
                    console.error('There was an error fetching the system settings...')
                    console.error(error.message)
                })
        },
    },
}