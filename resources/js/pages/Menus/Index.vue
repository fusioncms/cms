<template>
    <div>
        <portal to="title">
            <page-title icon="anchor">Menus</page-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'menus.create' }" class="button">Create Menu</router-link>
        </portal>

        <div class="row">
            <div class="content-container">
                <ui-table :endpoint="endpoint" id="menus" sort-by="name" primary-key="handle" key="menus_table">
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'menu.nodes', params: {menu: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="handle" slot-scope="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-table-actions :id="'menu_' + table.record.id + '_actions'" :key="'menu_' + table.record.id + '_actions'">
                            <ui-dropdown-link :to="{ name: 'menu.nodes', params: {menu: table.record.id} }">Manage</ui-dropdown-link>
                            <ui-dropdown-link :to="{ name: 'menus.edit', params: {menu: table.record.id} }">Edit</ui-dropdown-link>

                            <ui-dropdown-link
                                @click.prevent
                                v-modal:delete-menu="table.record"
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
            <ui-modal name="delete-menu" title="Delete Menu" key="delete_menu">
                <p>Are you sure you want to permenantly delete this menu?</p>

                <template slot="footer" slot-scope="menu">
                    <ui-button v-modal:delete-menu @click="destroy(menu.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-menu>Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Menus'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/menus',
            }
        },

        methods: {
            destroy(id) {
                axios.delete('/api/menus/' + id).then((response) => {
                    toast('Menu successfully deleted.', 'success')

                    bus().$emit('refresh-datatable-menus')
                })
            }
        }
    }
</script>