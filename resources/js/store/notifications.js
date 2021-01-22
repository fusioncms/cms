export default {
    namespaced: true,

    state: {
        channels: [],
        notifications: [],
    },

    getters: {
        getChannels: state => state.channels,
        getNotifications: state => state.notifications,
    },

    mutations: {
        setChannels: (state, channels) => {
            state.channels = channels
        },

        setNotifications: (state, notifications) => {
            state.notifications = notifications
        },
    },

    actions: {
        fetch: ({ commit }) => {
            axios.all([
                axios.get('/api/channels'),
                axios.get('/api/notifications')
            ]).then(axios.spread((channels, notifications) => {
                commit('setChannels', channels.data.data)
                commit('setNotifications', notifications.data.data)
            }))
        }
    }
}