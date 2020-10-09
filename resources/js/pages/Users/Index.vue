<template>
    <div class="user-page">
        <portal to="title">
            <page-title icon="users">Users - {{ current ? current.name : '' }}</page-title>
        </portal>

        <portal to="actions">
            <ui-button key="create-user-btn" :to="{name: 'users.create' }" variant="primary" v-if="$can('users.create')">Create User</ui-button>
        </portal>

        <ui-card>
            <ui-card-body>
                <ui-table bulk key="users" class="user-table" id="users" :endpoint="endpoint" sort-by="name" show-page-status show-page-numbers show-page-nav show-page-ends>
                    <template v-slot:toolbarPrepend>
                        <ui-toolbar-group>
                            <ui-dropdown id="user-roles">
                                <span>Roles</span>

                                <template v-slot:menu>
                                    <ui-dropdown-link :to="{ name: 'users' }" exact>All</ui-dropdown-link>

                                    <ui-dropdown-divider></ui-dropdown-divider>

                                    <ui-dropdown-link v-for="role in filteredRoles" :key="role.name" :to="{ name: 'users.role', params: { role: role.name } }" exact>
                                        {{ role.name }}
                                    </ui-dropdown-link>
                                </template>
                            </ui-dropdown>
                        </ui-toolbar-group>
                    </template>

                    <template slot="name" slot-scope="table">
                        <div class="flex items-center">
                            <ui-status :value="table.record.status" class="mr-2"></ui-status>
                            <router-link :to="{ name: 'users.show', params: {user: table.record.id} }" v-if="$can('users.view')">{{ table.record.name }}</router-link>
                            <span v-else>{{ table.record.name }}</span>
                        </div>
                    </template>

                    <template slot="email" slot-scope="table">
                        {{ table.record.email }}
                    </template>

                    <template slot="role" slot-scope="table">
                        <router-link :to="{ name: 'roles.show', params: {role: table.record.role.id} }" v-if="$can('roles.view')">{{ table.record.role.name }}</router-link>
                        <span v-else>{{ table.record.role.name }}</span>
                    </template>

                    <template slot="created_at" slot-scope="table">
                        <ui-date :timestamp="table.record.created_at"></ui-date>
                    </template>

                    <template slot="email_verified_at" slot-scope="table">
                        <ui-badge v-if="table.record.email_verified_at" variant="success">Yes</ui-badge>
                        <ui-badge v-else variant="danger">No</ui-badge>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-table-actions :id="'user_' + table.record.id + '_actions'" :key="'user_' + table.record.id + '_actions'">
                            <ui-dropdown-link :to="{ name: 'users.show', params: {user: table.record.id} }" v-if="$can('users.view')">View</ui-dropdown-link>

                            <ui-dropdown-link @click.prevent :to="{ name: 'users.edit', params: {user: table.record.id} }" v-if="$can('users.update', table.record.role.level)">Edit</ui-dropdown-link>

                            <ui-dropdown-divider v-if="$can('users.update', table.record.role.level)"></ui-dropdown-divider>

                            <ui-dropdown-link
                                v-if="$can('users.update', table.record.role.level)"
                                @click.prevent
                                v-modal:verify-user="table.record">
                                Resend Verification
                            </ui-dropdown-link>

                            <ui-dropdown-link
                                v-if="$can('users.update', table.record.role.level)"
                                @click.prevent
                                v-modal:password-user="table.record">
                                Reset Password
                            </ui-dropdown-link>

                            <ui-dropdown-link
                                v-if="table.record.id != $user.id && $can('users.delete', table.record.role.level)"
                                @click.prevent
                                v-modal:delete-user="table.record"
                                class="danger">
                                Delete
                            </ui-dropdown-link>
                        </ui-table-actions>
                    </template>
                </ui-table>
            </ui-card-body>
        </ui-card>

        <portal to="modals">
            <ui-modal name="verify-user" title="Verification Email">
                <p>Are you sure you want to re-send the verification email to this user?</p>

                <template slot="footer" slot-scope="user">
                    <ui-button v-modal:verify-user @click="emailVerification(user.data.id)" variant="primary" class="ml-3">Confirm</ui-button>
                    <ui-button v-modal:verify-user variant="secondary">Cancel</ui-button>
                </template>
            </ui-modal>

            <ui-modal name="password-user" title="Password Reset">
                <p>Are you sure you want to send this user a password reset notification?</p>

                <template slot="footer" slot-scope="user">
                    <ui-button v-modal:password-user @click="passwordReset(user.data.id)" variant="primary" class="ml-3">Confirm</ui-button>
                    <ui-button v-modal:password-user variant="secondary">Cancel</ui-button>
                </template>
            </ui-modal>

            <ui-modal name="expire-password" title="Expire Password">
                <p>Are you sure you want to force user to reset their password upon next login?</p>

                <template slot="footer" slot-scope="user">
                    <ui-button v-modal:expire-password @click="passwordExpire(user.data.id)" variant="primary" class="ml-3">Confirm</ui-button>
                    <ui-button v-modal:expire-password variant="secondary">Cancel</ui-button>
                </template>
            </ui-modal>

            <ui-modal name="delete-user" title="Delete User">
                <p>Are you sure you want to permenantly delete this user?</p>

                <template slot="footer" slot-scope="user">
                    <ui-button v-modal:delete-user @click="destroy(user.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-user variant="secondary">Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    export default {
        permission: 'users.viewAny',

        head: {
            title() {
                return {
                    inner: 'Users'
                }
            }
        },

        data() {
            return {
                roles: [],
                role: this.$route.params.role || null,
            }
        },

        computed: {
            filteredRoles() {
                return _.filter(this.roles, (role) => role.name !== 'Guest' && role.id !== 1)
            },

            endpoint() {
                if (this.role) {
                    return '/datatable/users/' + this.role
                }

                return '/datatable/users'
            },

            current() {
                let vm = this
                let index = _.findIndex(this.roles, function(item) {
                    return item.name == vm.role
                })

                if (index != -1) {
                    return this.roles[index]
                }

                return {
                    name: 'all',
                    label: 'All'
                }
            }
        },

        watch: {
            '$route' (to, from) {
                this.role = to.params.role || null
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.get('/api/roles').then((response) => {
                next(vm => vm.roles = response.data.data)
            }).catch((err) => {
                next(vm => console.log(error))
            })
        },

        methods: {
            destroy(id) {
                axios.delete(`/api/users/${id}`)
                    .then((response) => {
                        toast('User successfully deleted.', 'success')

                        bus().$emit('refresh-datatable-users')
                    }).catch((response) => {
                        toast(response.response.data.message, 'failed')
                    })
            },

            emailVerification(id) {
                axios.post(`/api/users/${id}/verify`)
                    .then((response) => {
                        toast('Email verification notification has been sent to user.', 'success')
                    }).catch((response) => {
                        toast(response.response.data.message, 'failed')
                    })
            },

            passwordReset(id) {
                axios.post(`/api/users/${id}/reset-password`)
                    .then((response) => {
                        toast('Password reset notification has been sent to user.', 'success')
                    }).catch((response) => {
                        toast(response.response.data.message, 'failed')
                    })
            },

            passwordExpire(id) {
                axios.post(`/api/users/${id}/expire-password`)
                    .then((response) => {
                        toast('User password has been set as expired.', 'success')
                    }).catch((response) => {
                        toast(response.response.data.message, 'failed')
                    })
            }
        }
    }
</script>