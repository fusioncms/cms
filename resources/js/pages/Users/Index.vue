<template>
    <div>
        <portal to="title">
            <page-title icon="users">Users - {{ current ? current.label : '' }}</page-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'users.create' }" class="button button--primary">Create User</router-link>
        </portal>

        <div class="sidebar-container">
            <mq-layout mq="xl+">
                <div class="sidebar-container__sidebar">
                    <ui-card>
                        <ui-card-body>
                            <h2 class="text-heading--xxs">Roles</h2>

                            <div class="list">
                                <router-link class="list__item list__item--action" :to="{ name: 'users' }" exact>All</router-link>
                            </div>

                            <span class="list__divider"></span>
                            
                            <div class="list">
                                <router-link v-for="role in filteredRoles" class="list__item list__item--action" :key="role.id" :to="{ name: 'users.role', params: { role: role.name } }" exact>
                                    {{ role.label }}
                                </router-link>
                            </div>
                        </ui-card-body>
                    </ui-card>
                </div>
            </mq-layout>

            <div class="sidebar-container__content">
                <ui-table id="users" :endpoint="endpoint" sort-by="name" key="users_table">
                    <template v-slot:toolbarPrepend v-if="$mq === 'sm' || $mq === 'md' || $mq === 'lg'">
                        <ui-toolbar-group>
                            <ui-dropdown id="user-roles">
                                <span>Roles</span>

                                <template v-slot:menu>
                                    <ui-dropdown-link :to="{ name: 'users' }" exact>All</ui-dropdown-link>

                                    <ui-dropdown-divider></ui-dropdown-divider>

                                    <ui-dropdown-link v-for="role in filteredRoles" :key="role.id" :to="{ name: 'users.role', params: { role: role.name } }" exact>
                                        {{ role.label }}
                                    </ui-dropdown-link>
                                </template>
                            </ui-dropdown>
                        </ui-toolbar-group>
                    </template>

                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'users.edit', params: {user: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="email" slot-scope="table">
                        {{ table.record.email }}
                    </template>

                    <template slot="role" slot-scope="table">
                        <span class="badge">{{ table.record.role.name }}</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-table-actions :id="'user_' + table.record.id + '_actions'" :key="'user_' + table.record.id + '_actions'">
                            <ui-dropdown-link @click.prevent :to="{ name: 'users.edit', params: {user: table.record.id} }">Edit</ui-dropdown-link>

                            <ui-dropdown-link
                                v-if="table.record.id != user.id"
                                @click.prevent
                                v-modal:delete-user="table.record"
                                classes="link--danger"
                            >
                                Delete
                            </ui-dropdown-link>
                        </ui-table-actions>
                    </template>
                </ui-table>
            </div>
        </div>

        <portal to="modals">
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
    import { mapGetters } from 'vuex'

    export default {
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
            ...mapGetters({
                user: 'auth/getUser',
            }),

            filteredRoles() {
                return _.filter(this.roles, (role) => role.name !== 'Guest')
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
                axios.delete('/api/users/' + id).then((response) => {
                    toast('User successfully deleted.', 'success')

                    bus().$emit('refresh-datatable-users')
                })
            }
        }
    }
</script>