<template>
    <div class="roles-page">
        <portal to="title">
            <page-title icon="user-shield">Roles</page-title>
        </portal>

        <portal to="actions">
            <ui-button key="create-role-btn" :to="{ name: 'roles.create' }" variant="primary" v-if="$can('roles.create')">Create Role</ui-button>
        </portal>

        <ui-card>
            <ui-card-body>
                <ui-table key="roles" class="roles-table" id="roles" endpoint="/datatable/roles" sort-by="level" show-page-status show-page-numbers show-page-nav show-page-ends>
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'roles.show', params: {role: table.record.id} }" v-if="$can('roles.view')">{{ table.record.name }}</router-link>
                        <span v-else>{{ table.record.name }}</span>
                    </template>

                    <template slot="level" slot-scope="table" class="w-10">
                        <ui-badge>{{ table.record.level }}</ui-badge>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-table-actions :id="'role_' + table.record.id + '_actions'" :key="'role_' + table.record.id + '_actions'">
                            <ui-dropdown-link
                                v-if="$can('roles.view')"
                                :to="{ name: 'roles.show', params: {role: table.record.id} }">
                                View
                            </ui-dropdown-link>

                            <ui-dropdown-link
                                v-if="! isOwner(table.record.id) && $can('roles.update', table.record.level)"
                                @click.prevent
                                :to="{ name: 'roles.edit', params: {role: table.record.id} }">
                                Edit
                            </ui-dropdown-link>

                            <ui-dropdown-divider v-if="isRemovable(table.record.handle) && $can('roles.delete', table.record.level)"></ui-dropdown-divider>

                            <ui-dropdown-link
                                v-if="isRemovable(table.record.handle) && $can('roles.delete', table.record.level)"
                                @click.prevent
                                v-modal:delete-role="table.record"
                                classes="danger">
                                Delete
                            </ui-dropdown-link>
                        </ui-table-actions>
                    </template>
                </ui-table>
            </ui-card-body>
        </ui-card>

        <portal to="modals">
            <ui-modal name="delete-role" title="Delete Role">
                <template slot-scope="role">
                    <p>Please select another role to move users to.</p>

                    <ui-select-group
                        v-if="role.data"
                        id="move-role"
                        name="move_role"
                        label="Transfer to Role"
                        :options="roleOptions(role.data.handle)"
                        autocomplete="off"
                        v-model="transfer">
                    </ui-select-group>
                </template>

                <template slot="footer" slot-scope="role">
                    <ui-button v-modal:delete-role @click="destroy(role.data.id)" variant="danger" class="ml-3" :disabled="transfer.length == 0">Delete</ui-button>
                    <ui-button v-modal:delete-role variant="secondary">Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    import RoleMixin   from '@/mixins/roles'

    export default {
        auth() {
            return {
                permission: 'roles.viewAny',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Roles'
                }
            }
        },

        mixins: [RoleMixin],

        data() {
            return {
                transfer: '',
                roles: [],
            }
        },

        methods: {
            roleOptions(currentRole) {
                const roles = _.reject(this.roles, (role) => currentRole == role.handle)

                return _.map(roles, (role) => {
                    return {
                        label: role.name,
                        value: role.handle
                    }
                })
            },

            destroy(id) {
                axios.delete(`/api/roles/${id}`, { data: { transfer: this.transfer }})
                    .then((response) => {
                        this.transfer = ''

                        toast('Role successfully deleted.', 'success')

                        bus().$emit('refresh-datatable-roles')
                    })
            },

            isOwner(id) {
                return id && id === 1
            }
        },

        created() {
            bus().$on('modal-opened', (name) => {
                if (name == 'delete-role') { this.transfer = '' }
            })
        },

        beforeRouteEnter(to, from, next) {
            axios.get('/api/roles').then((response) => {
                next(vm => vm.roles = response.data.data)
            }).catch((err) => {
                next(vm => {
                    vm.$router.push('/roles')

                    toast(error.toString(), 'danger')
                })
            })
        }
    }
</script>
