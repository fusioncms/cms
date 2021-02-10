<template>
	<div class="row">
		<ui-checkbox-group
            class="col w-full"
            label="Disks"
            help="Select all disks to act as backup storage.">

			<ui-checkbox
                v-for="(disk, index) in disks"
                :key="`${field.handle}.${index}`"
	            :id="`${field.handle}.${index}`"
	            :name="field.handle"
                :native-value="disk.handle"
                v-model="model">
                {{ disk.name }}
            </ui-checkbox>
		</ui-checkbox-group>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'settings-backup-disks',

		props: {
			field: {
	            type: Object,
	            required: true,
	        },

	        value: {
	            required: false,
	            default: null
	        },
		},

		computed: {
			...mapGetters({
				disks: 'disks/getDisks',
			}),

			model: {
				get() {
					return this.value
				},

				set(value) {
					this.$emit('input', value)
				}
			}
		},

		created() {
            this.$store.dispatch('disks/fetchDisks')
        },
	}
</script>