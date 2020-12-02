<template>
	<div class="row">
		<ui-select-group
			v-for="(structure, handle) in structures"
			:key="handle"
			class="col"
	        :name="handle"
	        :label="structure.name"
	        help="Select valid Fieldtypes for this Structure."
	        :options="options"
	        :filterable="true"
	        :multiple="true"
	        :value="structure.excluded.join(',')"
	        @input="update(handle, $event)">
	    </ui-select-group>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'structures-fieldtypes',

		computed: {
			options() {
				return _.map(this.fieldtypes, (type) => {
					return {
						label: type.name,
						value: type.handle,
					}
				})
			},

			...mapGetters({
				fieldtypes: 'fieldtypes/getFieldtypes',
				structures: 'fieldtypes/getStructures',
			})
		},

		methods: {
			...mapActions({
				setStructure: 'fieldtypes/setStructure'
			}),

			update(handle, excluded) {
				let structure = this.structures[handle]

				if (_.isEmpty(excluded)) {
					structure.excluded = []
				} else {
					structure.excluded = excluded.split(',')
					structure.excluded.sort()
				}

				this.setStructure({ handle, structure })
			},

			// submit() {
			// 	axios.post('/api/structures')
			// }
		},

		created() {
            this.$store.dispatch('fieldtypes/fetch')
        },
	}
</script>