export default {
    namespaced: true,

    state: {
        structure: false,
        structures: {},
        fieldtypes: {},
    },

    getters: {
        getFilteredFieldtypes: (state) => {
            let fieldtypes = {}

            if (state.structure && _.has(state.structures, state.structure)) {
                fieldtypes = _.reject(state.fieldtypes, (fieldtype) => {
                    const structure = state.structures[state.structure]
                    const excluded  = structure.excluded

                    return excluded.includes(fieldtype.handle)
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
        setStructure: (state, structure) => {
            state.structure = _.isEmpty(structure) ? false : structure
        },

        setStructures: (state, structures) => {
            state.structures = _.keyBy(structures, 'handle')
        },

        setFieldtypes: (state, fieldtypes) => {
            state.fieldtypes = _.keyBy(fieldtypes, 'handle')
        },

        updateStructure: (state, payload) => {
            if (_.has(state.structures, payload.handle)) {
                state.structures[payload.handle] = payload.structure
            }
        },
    },

    actions: {
        updateStructure: ({ commit }, payload) => {
            commit('updateStructure', payload)
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