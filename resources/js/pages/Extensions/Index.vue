<template>
    <div>
        <portal to="title">
            <page-title icon="seedling">Extensions</page-title>
        </portal>

        <div class="row">
            <div class="content-container">
                <ui-table :endpoint="endpoint" id="extensions" sort-by="name" primary-key="handle" key="extensions_table">
                    <template slot="name" slot-scope="table">
                        <div class="flex items-center">
                            <ui-status :value="table.record.status" class="mr-2"></ui-status>

                            <router-link :to="{ name: 'extensions.edit', params: {extension: table.record.id} }">{{ table.record.name }}</router-link>
                        </div>
                    </template>

                    <template slot="handle" slot-scope="table">
                        {{ table.record.handle }}
                    </template>

                    <template slot="type" slot-scope="table">
                        <span class="badge">{{ table.record.type }}</span>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-table-actions :id="'extension_' + table.record.id + '_actions'" :key="'extension_' + table.record.id + '_actions'">
                            <ui-dropdown-link :to="{ name: 'extensions.edit', params: {extension: table.record.id} }">Edit</ui-dropdown-link>

                            <ui-dropdown-link
                                @click.prevent
                                v-modal:delete-extension="table.record"
                                classes="link--danger">
                                Delete
                            </ui-dropdown-link>
                        </ui-table-actions>
                    </template>
                </ui-table>
            </div>
        </div>

        <portal to="modals">
            <ui-modal name="delete-extension" title="Delete Extension" key="delete_extension">
                <p>Are you sure you want to permenantly delete this extension?</p>

                <template slot="footer" slot-scope="extension">
                    <ui-button v-modal:delete-extension @click="destroy(extension.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-extension>Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    import store from '../../store'

    export default {
        head: {
            title() {
                return {
                    inner: 'Extension'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/extensions',
            }
        },

        methods: {
            destroy(id) {
                axios.delete('/api/extensions/' + id).then((response) => {
                    store.dispatch('navigation/fetchAdminNavigation')

                    toast('Extension successfully deleted.', 'success')

                    bus().$emit('refresh-datatable-extensions')
                })
            }
        }
    }
</script>
