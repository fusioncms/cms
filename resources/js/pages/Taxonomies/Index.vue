<template>
    <div>
        <portal to="title">
            <page-title icon="sitemap">Taxonomy</page-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'taxonomies.create' }" class="button">Create Taxonomy</router-link>
        </portal>

        <div class="row">
            <div class="content-container">
                <ui-table :endpoint="endpoint" id="taxonomies" sort-by="name" primary-key="handle" key="taxonomies_table">
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'taxonomies.edit', params: {taxonomy: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="handle" slot-scope="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>

                    <template slot="status" slot-scope="table">
                        <span class="badge badge--success" v-if="table.record.status === true">Enabled</span>
                        <span class="badge badge--danger" v-else>Disabled</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-table-actions :id="'taxonomy_' + table.record.id + '_actions'" :key="'taxonomy_' + table.record.id + '_actions'">
                            <ui-dropdown-link @click.prevent :to="{ name: 'taxonomies.edit', params: {taxonomy: table.record.id} }">Edit</ui-dropdown-link>

                            <ui-dropdown-link
                                @click.prevent
                                v-modal:delete-taxonomy="table.record"
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
            <ui-modal name="delete-taxonomy" title="Delete Taxonomy" key="delete_taxonomy">
                <p>Are you sure you want to permenantly delete this taxonomy?</p>

                <template slot="footer" slot-scope="taxonomy">
                    <ui-button v-modal:delete-taxonomy @click="destroy(taxonomy.data.id)" theme="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-taxonomy>Cancel</ui-button>
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
                    inner: 'Taxonomy'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/taxonomies',
            }
        },

        methods: {
            destroy(id) {
                axios.delete(`/api/taxonomies/${id}`).then((response) => {
                    store.dispatch('navigation/fetchAdminNavigation')

                    toast('Taxonomy successfully deleted.', 'success')

                    bus().$emit('refresh-datatable-taxonomies')
                })
            }
        }
    }
</script>
