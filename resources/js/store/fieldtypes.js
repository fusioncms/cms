export default {
    namespaced: true,

    state: {
        structures: {},
        fieldtypes: {},
    },

    getters: {
        getFieldtypesByStructure: (state) => (handle) => {
            let fieldtypes = {}

            if (_.has(state.structures, handle)) {
                fieldtypes = _.reject(state.fieldtypes, (fieldtype) => {
                    return state.structures[handle].excluded.includes(fieldtype.handle)
                })
            }

            return _.keyBy(fieldtypes, 'handle')
        },

        getFieldtypes: (state) => {
            return state.fieldtypes
        },

        getStructures: (state) => {
            return state.structures
        }
    },

    mutations: {
        setStructures: (state, structures) => {
            state.structures = _.keyBy(structures, 'handle')
        },

        setStructure: (state, payload) => {
            if (_.has(state.structures, payload.handle)) {
                state.structures[payload.handle] = payload.structure
            }
        },

        setFieldtypes: (state, fieldtypes) => {
            state.fieldtypes = _.keyBy(fieldtypes, 'handle')
        }
    },

    actions: {
        setStructure: ({ commit }, payload) => {
            commit('setStructure', payload)
        },

        fetch: ({ state, commit }) => {
            axios.all([
                axios.get('/api/structures'),
                axios.get('/api/fieldtypes')
            ]).then(axios.spread((structures, fieldtypes) => {
                commit('setStructures', structures.data.data)
                commit('setFieldtypes', fieldtypes.data.data)
            }))
        }
    }
}