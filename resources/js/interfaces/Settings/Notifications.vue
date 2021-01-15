<template>
	<div>
		<ui-field-group
			name="subscribers"
			:fieldId="field.handle"
			label="field.name">

			<div v-for="(channel, name) in channels" :key="name">
				<div class="input-group justify-between">
					<ui-toggle
						class="col w-1/2"
						name="`enabled-${name}`"
						:label="`Enable ${name}`"
						help="Enable/disable this notification channel."
						v-model="channel.enabled">
					</ui-toggle>

					<ui-button @click="current = name" v-modal:users-modal>
						<fa-icon :icon="['fas', 'tasks']" class="mr-1"></fa-icon>
						<span>Manage Subscribers ({{channel.users.length}})</span>
					</ui-button>
				</div>
			</div>
		</ui-field-group>

		
		<ui-modal name="users-modal" title="Browse users">
            <ui-table endpoint="/datatable/users" id="user-items" sort-by="name" sort-in="desc" :per-page="10">
                <template slot="name" slot-scope="table">
                    <ui-checkbox
                        :id="`subscriber-${table.record.id}`"
                        name="subscriber"
                        :value="isChecked(table.record.id)"
                        @input="toggle(table.record.id)">
                        {{ table.record.name }}
                    </ui-checkbox>
                </template>

                <template slot="role" slot-scope="table">
                    <router-link :to="{ name: 'roles.show', params: {role: table.record.role.id} }" v-if="$can('roles.view')">{{ table.record.role.name }}</router-link>
                    <span v-else>{{ table.record.role.name }}</span>
                </template>

                <template slot="created_at" slot-scope="table">
                    <ui-date :timestamp="table.record.created_at"></ui-date>
                </template>
            </ui-table>
        </ui-modal>
	    
	</div>
</template>

<script>
	import Form from '../../services/Form'

	export default {
		name: 'settings-notifications',

		data() {
			return {
				channels: this.value,
				current: null
			}
		},

		props: ['field','value'],

		methods: {
			isChecked(id) {
				return this.channels[this.current] && this.channels[this.current].users.includes(id)
			},

			toggle(id) {
				if (this.isChecked(id)) {
					this.remove(id)
				} else {
					this.channels[this.current].users.push(id)
				}
			},

			remove(id) {
				const index = this.channels[this.current].users.indexOf(id)

				if (index > -1)
					this.channels[this.current].users.splice(index, 1)
			}
		},
	}
</script>