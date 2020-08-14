export default {
    namespaced: true,

    state: {
        fieldtypes: {},
        excluded: [],
    },

    getters: {
        get(state) {
            return _.mapValues(state.fieldtypes, (type, name) => {
                type.disabled = state.excluded.includes(name)
                return type
            })
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