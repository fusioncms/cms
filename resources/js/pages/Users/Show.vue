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
                <dd>{{ user.roles ? user.roles[0].label : 'Loading...' }}</dd>
                <dt>Status</dt>
                <dd class="flex"><ui-status :value="user.status" class="mr-2"></ui-status> {{ user.status ? 'Enabled' : 'Disabled' }}</dd>
            </dl>
        </section-card>

        <section-card title="Account Activity" description="Information on user account activity and stats.">
            <dl class="detail-list">
                <dt>Registered</dt>
                <dd><ui-datetime :timestamp="user.created_at"></ui-datetime></dd>

                <dt>Verified</dt>
                <dd>
                    <ui-datetime :timestamp="user.email_verified_at" v-if="verified"></ui-datetime>
                    <span v-else>No</span>
                </dd>

                <dt>Last Updated</dt>
                <dd><ui-datetime :timestamp="user.updated_at"></ui-datetime></dd>

                <dt>Last Login</dt>
                <dd>
                    <ui-datetime :timestamp="user.logged_in_at" v-if="user.logged_in_at"></ui-datetime>
                    <span v-else>Never</span>
                </dd>

                <dt>Invalid Login Attempts</dt>
                <dd>{{ user.invalid_logins }}</dd>

                <dt v-if="user.invalidly_logged_in_at">Last Invalid Login</dt>
                <dd v-if="user.invalidly_logged_in_at"><ui-datetime :timestamp="user.invalidly_logged_in_at"></ui-datetime></dd>

                <dt v-if="user.password_changed_at">Password Changed</dt>
                <dd v-if="user.password_changed_at"><ui-datetime :timestamp="user.password_changed_at"></ui-datetime></dd>
            </dl>
        </section-card>

        <section-card title="User Activity Feed" description="See what this user has been doing around the site.">
            <ui-table :key="'activities-' + user.id" class="activities-table" id="activities" :endpoint="endpoint" sort-by="created_at" sort-in="desc" :per-page="10" v-if="user.id">
                <template slot="description" slot-scope="table">
                    <div class="flex items-center">
                        <div class="mr-4 w-3">
                            <fa-icon v-if="table.record.properties.icon" :icon="['fas', table.record.properties.icon]" class="fa-fw"></fa-icon>
                            <fa-icon v-else class="fa-xs fa-fw" :icon="['fas', 'circle']"></fa-icon>
                        </div>

                        {{ table.record.description }}

                        <router-link :to="'/' + table.record.properties.link" v-if="table.record.properties.link" class="ml-2">
                            <fa-icon class="fa-fw fa-sm" :icon="['fas', 'link']"></fa-icon>
                            <span class="sr-only">Link to related property</span>
                        </router-link>
                    </div>
                </template>

                <template slot="created_at" slot-scope="table">
                    <ui-datetime :timestamp="table.record.created_at"></ui-datetime>
                </template>
            </ui-table>
        </section-card>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                currentUser: 'auth/getUser'
            }),

            endpoint() {
                if (this.user.id) {
                    return '/datatable/users/' + this.user.id + '/activities'
                }
            },

            verified() {
                if (this.user.email_verified_at && this.user.email_verified_at != '0000-00-00 00:00:00') {
                    return true
                }

                return false
            },
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
