export default {
    namespaced: true,

    state: {
        remove_index: null
    },

    getters: {
        getRemoveIndex: (state) => {
            return state.remove_index
        },
    },

    mutations: {
        setRemoveIndex: (state, remove_index) => {
            state.remove_index = remove_index
        },
    },
}
