export default {
    namespaced: true,

    state: {
        channels: [],
        notifications: [],
        subscriptions: {},
    },

    getters: {
        getChannels: state => state.channels,
        getNotifications: state => state.notifications,
        getSubscriptions: state => state.subscriptions,
    },

    mutations: {
        setChannels: (state, channels) => {
            state.channels = channels
        },

        setNotifications: (state, notifications) => {
            state.notifications = notifications
        },

        setSubscriptions: (state) => {
            state.subscriptions = {}  // reset

            _.each(state.channels, (channel) => {
                state.subscriptions[channel.id] = {}

                _.each(state.notifications, (notification) => {
                    state.subscriptions[channel.id][notification.id] = false;
                })
            })
        }
    },

    actions: {
        // subscribe: ({ commit }, payload) => {
        //     axios.post(`/api/users/${payload.user}/subscriptions/subscribe`, payload)
        // },

        // unsubscribe: ({ commit }, payload) => {
        //     axios.post(`/api/users/${payload.user}/subscriptions/unsubscribe`, payload)
        // },

        fetch: ({ commit }) => {
            axios.all([
                axios.get('/api/channels'),
                axios.get('/api/notifications')
            ]).then(axios.spread((channels, notifications) => {
                commit('setChannels', channels.data.data)
                commit('setNotifications', notifications.data.data)
                commit('setSubscriptions')
            }))
        }
    }
}