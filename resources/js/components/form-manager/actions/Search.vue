<template>
	<div class="field__control">
		<input type="search" name="search" placeholder="Search..." v-model="search" class="field__input">
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'form-manager-search-action',

		computed: {
			search: {
                get() {
                    return this.$store.state.formmanager.search
                },

                set(value) {
                	this.setSearch(value)
                }
            }
		},

		watch: {
			search(value) {
                this.fetchForms()
            },
		},

		methods: {
			...mapActions({
				fetchForms: 'formmanager/fetchForms',
				setSearch:  'formmanager/setSearch'
			})
		}
	}
</script>