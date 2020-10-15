<template>
    <div class="user-page">
        <portal to="title">
            <page-title icon="users">User Profile - {{ user.name }}</page-title>
        </portal>

        <portal to="actions">
            <div class="buttons">
                <ui-button v-if="$mq != 'sm'" key="go-back-btn" :to="{ name: 'users' }" variant="secondary">Go Back</ui-button>
                <ui-button v-if="canEdit" key="edit-user-btn" :to="{ name: 'users.edit', params: {user: user.id} }" variant="primary">Edit User</ui-button>
            </div>
        </portal>

        <portal to="sidebar-right">
            <sidebar>
                <status-card v-if="user" id="user_panel_status_card" :entry="user" :user="true" tabindex="-1"></status-card>
            </sidebar>
        </portal>

        <section-card id="user_panel_info" title="User Information" description="General information about this user.">
            <dl class="detail-list">
                <dt>Name</dt>
                <dd>{{ user.name }}</dd>
                <dt>Email</dt>
                <dd>{{ user.email }}</dd>
                <dt>Role</dt>
                <dd>{{ user.role ? user.role.name : 'Loading...' }}</dd>
            </dl>
        </section-card>

        <section-card id="user_panel_activity" title="User Activity" description="See what this user has been doing around the site." tabindex="-1">
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
    export default {
        auth() {
            return {
                permission: 'users.view',
            }
        },

        computed: {
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

            canEdit() {
                if (this.$user.id == this.user.id) {
                    return true
                }

                if (this.user.role) {
                    return this.$can('users.update', this.user.role ? this.user.role.level : 0)
                }

                return false
            }
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
                role: user.role.name,
                password: '',
                password_confirmation: '',
            })
        }))
    }
</script>
