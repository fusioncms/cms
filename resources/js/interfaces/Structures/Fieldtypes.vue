<template>
    <div>
        <portal name="actions" to="actions">
            <div class="buttons">
                <ui-button :to="{ name: 'settings' }" variant="secondary">Go Back</ui-button>
                <ui-button type="submit" @click.prevent="submit" variant="primary">Update</ui-button>
            </div>
        </portal>

        <div class="row">
            <ui-select-group
                v-for="(structure, handle) in structures"
                :key="handle"
                class="col"
                :name="handle"
                :label="structure.name"
                help="Select which Fieldtypes to <strong>exclude</strong> from this Structure."
                :options="options"
                :filterable="true"
                :multiple="true"
                :value="structure.excluded.join(',')"
                @input="update(handle, $event)">
            </ui-select-group>
        </div>
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
				updateStructure: 'fieldtypes/updateStructure'
			}),

			update(handle, excluded) {
				let structure = this.structures[handle]

                excluded = _.trim(excluded, ',')

				if (excluded == '') {
					structure.excluded = []
				} else {
					structure.excluded = excluded.split(',')
					structure.excluded.sort()
				}

				this.updateStructure({ handle, structure })
			},

			submit() {
				axios.post('/api/structures', this.structures)
                    .then((response) => {
                        toast('Settings saved successfully', 'success')
                    }).catch((response) => {
                        toast(response.response.data.message, 'failed')
                    })
			}
		},

		created() {
            this.$store.dispatch('fieldtypes/fetch')
        },
	}
</script>