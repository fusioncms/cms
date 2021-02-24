<template>
	<div>
		<ui-fieldset
			class="row"
			name="disk-selection"
			label="Disk &amp; directory path configuration"
			help="<small>Directory path will be created if it doesn't exist.</small>"
			:hasError="hasError"
			:errorMessage="errorMessage">

			<div class="input-group items-start" v-for="disk in disks" :key="disk.handle">
				<ui-checkbox
					class="col w-1/4"
					:id="disk.id"
					:name="`${disk.handle}-status`"
				    v-model="model[disk.id].status"
				    @input="toggle(disk.id)">
				    {{ disk.name }}
				</ui-checkbox>

				<ui-input-group
					class="col w-3/4"
				    :name="`${disk.handle}-path`"
					:readonly="!model[disk.id].status"
				    placeholder="Directory Path"
				    v-model="model[disk.id].path">
				</ui-input-group>
			</div>
	    </ui-fieldset>
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
				type: [Boolean,Object],
				required: true,
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

			message() {
				if (this.multiple)
					return "Set disk and directory path"
			},

			model: {
				get() {
					let model = _.isObject(this.value) ? this.value : {}

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

        methods: {
			toggle(id) {
				if (!this.multiple) {
					_.each(this.model, (item, key) => {
						if (key != id) {
							item.status = false
						}
					})
				}
			}
        },

		created() {
			this.$store.dispatch('disks/fetchDisks')
		}
	}
</script>