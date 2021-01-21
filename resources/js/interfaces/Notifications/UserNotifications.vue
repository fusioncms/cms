<template>
	<ui-tabs v-if="isReady">
		<ui-tab v-for="channel in channels" :key="channel.handle" :name="channel.name" class="row">
			<ui-toggle
				v-for="notification in notifications"
				:key="notifications.handle"
				:name="notification.handle"
				:label="notification.name"
				class="col w-full sm:w-1/2"
				@input="toggle(channel, notification)"
				v-model="subscriptions[channel.id][notification.id]">
			</ui-toggle>
		</ui-tab>
	</ui-tabs>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'

	export default {
		name: 'user-notifications',

		data() {
			return {
				isReady: false
			}
		},

		props: {
            user: {
                type: Object,
                required: true
            }
        },

        computed: {
        	...mapGetters({
        		channels: 'notifications/getChannels',
        		notifications: 'notifications/getNotifications',
        		subscriptions: 'notifications/getSubscriptions',
        	})
        },

        methods: {
        	...mapActions({
        		subscribe: 'notifications/subscribe',
        		unsubscribe: 'notifications/unsubscribe',
        	}),

        	toggle(channel, notification) {
        		let subscription = {
        			user: this.user.id,
        			channel: channel.id,
        			notification: notification.id
        		}

        		if (this.subscriptions[channel.id][notification.id]) {
        			this.subscribe(subscription)
        		} else {
        			this.unsubscribe(subscription)
        		}
        	}
        },

        created() {
        	this.$store.dispatch('notifications/fetch')
        },

        mounted() {
        	axios.get(`/api/users/${this.user.id}/subscriptions`).then((response) => {
				_.each(response.data.data, (subscription) => {
					this.subscriptions[subscription.channel.id][subscription.notification.id] = true
				})

				this.isReady = true
			}).catch((response) => {
				toast(response.response.data.message, 'failed')
			})
        }
	}
</script>