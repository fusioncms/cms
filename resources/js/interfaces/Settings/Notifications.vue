<template>
	<div>
		<ui-field-group
			name="subscribers"
			fieldId="subscribers-field"
			label="Subscribers"
			help="Users subscribing to this notification channel.">

			<ui-toggle
				class="col w-full sm:w-1/2"
				name="enabled"
				label="Enable channel"
				help="Enable/disable this notification channel."
				v-model="model.enabled">
			</ui-toggle>

			<ui-button v-modal:subscribers-modal>
	            <fa-icon :icon="['fas', 'tasks']" class="mr-1"></fa-icon>
	            <span>Manage Subscribers</span>
	        </ui-button>

			<table class="table" v-if="model.subscribers.length > 0">
			<ui-sortable-list v-model="model.subscribers">
			<tbody>
			<ui-sortable-item v-for="subscriber in model.subscribers" :key="subscriber.id">
			<tr>
			<td class="w-8">
			<ui-sortable-handle class="cursor-move inline-block">
			<fa-icon icon="grip-vertical" class="handle fa-fw text-gray-400 mr-3"></fa-icon>
			</ui-sortable-handle>
			</td>
			<td v-text="subscriber.name"></td>
			<td v-text="subscriber.email"></td>
			<td class="w-16">
			<ui-button icon @click.prevent="remove(subscriber.id)">
			<fa-icon icon="times"></fa-icon>
			<span class="sr-only">Destroy</span>
			</ui-button>
			</td>
			</tr>
			</ui-sortable-item>
			</tbody>
			</ui-sortable-list>
			</table>

		</ui-field-group>

	</div>
</template>

<script>
	export default {
		name: 'settings-notifications',

		data() {
			return {
				model: this.settings[this.field.handle]
			}
		},

		props: ['field','settings'],

		methods: {
			// isChecked(id) {
			// 	return !! _.find(this.subscribers, (item) => item.id == id)
			// },

			// toggle(record) {
			// 	if (this.isChecked(record.id)) {
			// 		this.remove(record.id)
			// 	} else {
			// 		this.subscribers.push(record)
			// 	}
			// },

			// remove(id) {
			// 	this.subscribers = _.reject(this.subscribers, (item) => item.id == id)
			// },

			// submit() {
			// 	this.form.post('/api/notifications')
			// 	.then((response) => {
			// 	    toast('Settings saved successfully', 'success')
			// 	}).catch((response) => {
			// 	    toast(response.response.data.message, 'failed')
			// 	})
			// }
		},
	}
</script>