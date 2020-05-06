export default {
	namespaced: true,

	state: {
		loading: true,
		forms: [],
		selected: [],
		search: '',
		currentPage: 1,
        totalPages: 1,
	},

	getters: {
        getLoading:     (state) => state.loading,
        getForms:       (state) => state.forms,
        getSelected:    (state) => state.selected,
        getSearch:      (state) => state.search,
        getCurrentPage: (state) => state.currentPage,
        getTotalPages:  (state) => state.currentPage,
    },

    mutations: {
    	setLoading(state, value) {
    		state.loading = value
    	},

    	setForms(state, value) {
    		state.forms = value
    	},
    	
    	addForm(state, value) {
    		state.forms.push(value)
    	},

    	setSelected(state, value) {
    		state.forms = value
    	},

    	toggleSelection(state, value) {
            state.selected = _.xor(state.selected, [value])
        },

        clearSelection(state) {
        	state.selected = []
        },

    	setSearch(state, value) {
    		state.search = value
    	},

    	setCurrentPage(state, value) {
    		state.currentPage = value
    	},

    	setTotalPages(state, value) {
    		state.totalPages = value
    	},
    },

    actions: {
    	setLoading(context, value) {
    		context.commit('setLoading', value)
    	},

    	setForms(context, value) {
    		context.commit('setForms', value)
    	},

    	addForm(context, value) {
    		context.commit('addForm', value)
    	},

    	setCurrentPage(context, value) {
            context.commit('setCurrentPage', value)
        },

        setTotalPages(context, value) {
            context.commit('setTotalPages', value)
        },

        toggleSelection(context, value) {
            context.commit('toggleSelection', value)
        },

        clearSelection(context) {
            context.commit('clearSelection')
        },

        setSearch(context, query) {
            context.commit('setSearch', query)
        },

        fetchForms: _.throttle(function({ state, commit }) {
        	commit('setLoading', true)

            let endpoint = '/datatable/forms'
        	let params   = {
                sort:    'name',
                page:    state.currentPage,
                perPage: state.perPage,
                filter: {},
            }

            if (state.search !== '') {
                params['filter[search]'] = state.search
            }

        	axios.all([
        		axios.get(endpoint, { params: params }),
        	]).then(axios.spread((forms) => {
        		commit('setForms', forms.data.records.data)
                commit('setTotalPages', forms.data.records.data.last_page)
        		commit('setLoading', false)
        	}))
        }, 500)
    }
}