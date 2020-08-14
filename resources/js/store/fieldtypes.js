export default {
    namespaced: true,

    state: {
        fieldtypes: {},
        excluded: [],
    },

    getters: {
        get(state) {
            return _.reject(state.fieldtypes, (type, name) =>
                state.excluded.includes(name))
        }
    },

    mutations: {
        set: (state, fieldtypes) => {
            state.fieldtypes = fieldtypes
        },

        setExcluded: (state, excluded) => {
            state.excluded = excluded
        }
    },

    actions: {
        fetch: ({ state, commit}) => {
            if (_.isEmpty(state.fieldtypes))
                axios.get('/api/fieldtypes')
                    .then(response => commit('set', response.data.data))
                    .catch(error   => console.log(error))
        }
    }
}