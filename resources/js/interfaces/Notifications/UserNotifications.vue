<template>
	<ui-tabs>
		<ui-tab
            class="col"
            v-for="channel in channels"
            :key="channel.handle"
            :name="channel.name">
			
            <ui-checkbox-group
                class="row"
                v-for="(notifications, name) in groups"
                :key="name"
                :label="name">

                <ui-checkbox
                    class="col w-full sm:w-1/2"
                    v-for="notification in notifications"
                    :id="notification.handle"
                    :key="notifications.handle"
                    :name="notification.handle"
                    :native-value="nativeValue(channel, notification)"
                    v-model="model">
                    {{ notification.name }}
                </ui-checkbox>
            </ui-checkbox-group>
		</ui-tab>
	</ui-tabs>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'user-notifications',

		props: {
            user: {
                type: Object,
                required: false,
                default: () => {}
            },
            
            value: {
                type: Array,
                required: false
            }
        },

        computed: {
        	...mapGetters({
        		channels: 'notifications/getChannels',
        		groups: 'notifications/getNotifications',
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

        methods: {
            nativeValue(channel, notification) {
                return {
                    user_id: this.user && this.user.id ? this.user.id : null,
                    channel_id: channel.id,
                    notification_id: notification.id
                }
            }
        },

        created() {
        	this.$store.dispatch('notifications/fetch')
        },
	}
</script>