<template>
    <div class="user-page">
        <portal to="title">
            <page-title icon="users">User Profile - {{ user.name }}</page-title>
        </portal>

        <portal to="actions">
            <ui-button key="go-back-btn" :to="{ name: 'users' }" variant="secondary">Go Back</ui-button>
            <ui-button key="edit-user-btn" :to="{ name: 'users.edit', params: {user: user.id} }" variant="primary">Edit User</ui-button>
        </portal>

        <section-card title="User Information" description="General information about this user.">
            <dl class="detail-list">
                <dt>Name</dt>
                <dd>{{ user.name }}</dd>
                <dt>Email</dt>
                <dd>{{ user.email }}</dd>
                <dt>Role</dt>
                <dd>{{ user.roles[0].label }}</dd>
                <dt>Status</dt>
                <dd class="flex"><ui-status :value="user.status" class="mr-2"></ui-status> {{ user.status ? 'Enabled' : 'Disabled' }}</dd>
            </dl>
        </section-card>

        <section-card title="Account Activity" description="Information on user account activity and stats.">
            <dl class="detail-list">
                <dt>Registered</dt>
                <dd>{{ $moment(user.created_at).format('Y-MM-DD, hh:mm a') }}</dd>

                <dt>Verified</dt>
                <dd>{{ user.verified ? $moment(user.email_verified_at).format('Y-MM-DD, hh:mm a') : 'No' }}</dd>

                <dt>Last Updated</dt>
                <dd>{{ $moment(user.updated_at).format('Y-MM-DD, hh:mm a') }}</dd>

                <dt>Last Login</dt>
                <dd>{{ user.last_logged_in_at ? $moment(user.last_logged_in_at).format('Y-MM-DD, hh:mm a') : 'Never' }}</dd>

                <dt>Invalid Login Attempts</dt>
                <dd>{{ user.invalid_logins }}</dd>

                <dt v-if="user.invalidly_logged_in_at">Last Invalid Login</dt>
                <dd v-if="user.invalidly_logged_in_at">{{ $moment(user.invalidly_logged_in_at).format('Y-MM-DD, hh:mm a') }}</dd>

                <dt v-if="user.password_changed_at">Password Changed</dt>
                <dd v-if="user.password_changed_at">{{ $moment(user.password_changed_at).format('Y-MM-DD, hh:mm a') }}</dd>
            </dl>
        </section-card>

        <section-card title="User Activity Feed" description="See what this user has been doing around the site.">
            <em>Coming soon...</em>
        </section-card>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                currentUser: 'auth/getUser'
            })
        },

        head: {
            title() {
                return {
                    inner: this.user.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                user: {},
                roles: []
            }
        },

        beforeRouteEnter(to, from, next) {
            getUserAndRoles(to.params.user, (error, user, roles, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/users')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.user = user
                        vm.roles = roles

                        vm.$emit('updateHead')
                    })
                }
            })
        },

        methods: {
            destroy(id) {
                axios.delete('/api/users/' + id).then((response) => {
                    toast('User successfully deleted.', 'success')

                    this.$router.push('/users')
                })
            }
        }
    }

    export function getUserAndRoles(userId, callback) {
        axios.all([
            axios.get('/api/roles'),
            axios.get('/api/users/' + userId),
        ])
        .then(axios.spread((roles, user) => {
            user  = user.data.data
            roles = roles.data.data

            callback(null, user, roles, {
                name: user.name,
                email: user.email,
                status: user.status,
                role: user.roles[0].name,
                password: '',
                password_confirmation: '',
            })
        }))
    }
</script>

