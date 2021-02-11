export default {
    namespaced: true,

    state: {
        disks: [],
    },

    getters: {
        getDisks: (state) => {
            return state.disks
        },
    },

    mutations: {
        setDisks: (state, disks) => {
            state.disks = disks
        },
    },

    actions: {
        fetchDisks: (context) => {
            axios.get('/api/disks')
                .then(response => context.commit('setDisks', response.data.data))
                .catch(error => console.log(error))
        },
    },
}