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
                <ui-table key="roles" class="roles-table" id="roles" :endpoint="endpoint" sort-by="label" show-page-status show-page-numbers show-page-nav show-page-ends>
                    <template slot="label" slot-scope="table">
                        <router-link :to="{ name: 'roles.show', params: {role: table.record.id} }" v-if="$can('roles.view')">{{ table.record.label }}</router-link>
                        <span v-else>{{ table.record.label }}</span>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-table-actions :id="'role_' + table.record.id + '_actions'" :key="'role_' + table.record.id + '_actions'">
                            <ui-dropdown-link :to="{ name: 'roles.show', params: {role: table.record.id} }" v-if="$can('roles.view')">View</ui-dropdown-link>

                            <ui-dropdown-link v-if="! isOwner(table.record.id) && $can('roles.update')" @click.prevent :to="{ name: 'roles.edit', params: {role: table.record.id} }">Edit</ui-dropdown-link>

                            <ui-dropdown-divider v-if="isRemovable(table.record.name) && $can('roles.delete')"></ui-dropdown-divider>

                            <ui-dropdown-link
                                v-if="isRemovable(table.record.name) && $can('roles.delete')"
                                @click.prevent v-modal:delete-role="table.record"
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
                <p>Are you sure you want to permenantly delete this role?</p>

                <template slot="footer" slot-scope="role">
                    <ui-button v-modal:delete-role @click="destroy(role.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-role variant="secondary">Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    import _ from 'lodash'

    export default {
        permission: 'roles.viewAny',

        head: {
            title() {
                return {
                    inner: 'Roles'
                }
            }
        },

        mixins: [
            require('../../mixins/roles').default
        ],

        data() {
            return {
                endpoint: '/datatable/roles',
            }
        },

        methods: {
            destroy(id) {
                axios.delete('/api/roles/' + id).then((response) => {
                    toast('Role successfully deleted.', 'success')

                    bus().$emit('refresh-datatable-roles')
                })
            },

            isOwner(id) {
                return id && id === 4
            }
        }
    }
</script>
