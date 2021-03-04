<template>
	<ui-fieldset
		class="border border-gray-300 p-3 rounded"
		name="disk-selection"
		label="Directory path selector"
		help="<small>Directory path will be created if it doesn't exist.</small>">

		<table class="table" v-if="model && model.length > 0">
			<tr v-for="(item, key) in model" :key="item._id">
				<td>
					<ui-select
						:name="`${item._id}-disk`"
						:options="diskOptions"
						v-model="model[key].disk">
					</ui-select>
				</td>
				<td>
					<ui-input
						class="col"
						:name="`${item._id}-path`"
						placeholder="Directory Path"
						v-model="model[key].path">
					</ui-input>
				</td>
				<td class="w-16" v-if="multiple && model.length > 1">
					<ui-button icon @click.prevent="remove(item._id)">
						<fa-icon icon="times"></fa-icon>
						<span class="sr-only">Destroy</span>
					</ui-button>
				</td>
			</tr>
        </table>

		<div v-if="multiple || model && model.length == 0" class="row mt-3">
			<div class="input-group">
				<ui-select
					class="col w-1/2"
					name="new-disk"
					label="Add disk"
					:options="diskOptions"
					v-model="newDisk">
				</ui-select>

				<ui-button icon @click.prevent="add" :disabled="!newDisk">
	                <fa-icon icon="plus"></fa-icon>
	                <span class="sr-only">Add</span>
	            </ui-button>
			</div>
		</div>
	</ui-fieldset>
</template>

<script>
	import uniqid from 'uniqid'
	import { mapGetters } from 'vuex'

	export default {
		name: 'disk-path-selector',

		data() {
			return {
				newDisk: false
			}
		},

		props: {
			multiple: Boolean,
			value: Array
		},

		computed: {
			...mapGetters({
				disks: 'disks/getDisks',
			}),

			diskOptions() {
				return _.map(this.disks, (disk) => {
					return { label: disk.name, value: disk.id }
				})
			},

			model: {
				get() {
					return this.value
				},

				set(value) {
					this.$emit('input', value)
				}
			}
		},

		methods: {
			new(disk = '1', path = '') {
				return { _id: uniqid(), disk, path }
			},

			add() {
                if (this.newDisk) {
                    this.model.push(this.new(this.newDisk))
                    this.newDisk = false
                }
            },

            remove(id) {
                this.model = _.filter(this.model,
                	(item) => item._id !== id)
            },
		},

		created() {
			this.$store.dispatch('disks/fetchDisks')

			if (_.isEmpty(this.value)) {
				this.model = [ this.new( )]
			}
		}
	}
</script>