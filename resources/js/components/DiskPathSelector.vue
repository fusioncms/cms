<template>
	<div>
		<ui-field-group
			class="row"
			name="disk-selection"
			fieldId="disk-selection"
			label="Select which disks & directory files will be uploaded to"
			:hasError="hasError"
			:errorMessage="errorMessage">

			<div class="input-group items-start" v-for="disk in disks" :key="disk.handle">
				<ui-checkbox
					v-if="multiple"
					class="col w-1/4"
					:id="disk.id"
					:name="`${disk.handle}-status`"
				    v-model="model[disk.id].status">
				    {{ disk.name }}
				</ui-checkbox>
				<ui-checkbox
					v-else
					class="col w-1/4"
					:id="disk.id"
					name="disk-status"
				    v-model="model[disk.id].status">
				    {{ disk.name }}
				</ui-checkbox>

				<ui-input-group
					class="col w-3/4"
				    :name="`${disk.handle}-path`"
					:readonly="!model[disk.id].status"
				    placeholder="Directory Path"
				    help="<small>Directory will be created if it doesn't exist.</small>"
				    v-model="model[disk.id].path">
				</ui-input-group>
			</div>
	    </ui-field-group>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'disk-path-selector',

		props: {
			multiple: {
				type: Boolean,
				required: false,
				default: false
			},

			value: {
				type: Object,
				required: false,
				default: () => {}
			},

			hasError: {
                required: false,
                type: Boolean,
                default: false,
            },

            errorMessage: {
                required: false,
                type: String,
                default: '',
            },
		},

		computed: {
			...mapGetters({
				disks: 'disks/getDisks',
			}),

			model: {
				get() {
					let model = _.defaultTo(this.value, {})

					_.each(this.disks, (disk) => {
						model[disk.id] = {
							status: _.has(model, [disk.id, 'status']) ? model[disk.id].status : false,
							path: _.has(model, [disk.id, 'path']) ? model[disk.id].path : '',
						}
					})

					return model
				},

				set(value) { /* see 'watch' */ }
			}
		},

		watch: {
            model: {
                deep: true,
                handler(value) {
                    this.$emit('input', value)
                }
            }
        },

		created() {
			this.$store.dispatch('disks/fetchDisks')
		}
	}
</script>