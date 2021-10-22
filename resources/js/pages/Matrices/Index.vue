<template>
    <div class="matrix-page">
        <portal to="title">
            <page-title icon="layer-group">Matrix</page-title>
        </portal>

        <portal to="actions">
            <ui-button key="create-matrix-btn" :to="{ name: 'matrices.create' }" variant="primary" v-if="$can('matrices.create')">Create Matrix</ui-button>
        </portal>

        <ui-card>
            <ui-card-body>
                <ui-table slot-scope="table"
                          key="matrices"
                          class="matrix-table"
                          id="matrices"
                          sort-by="order"
                          primary-key="handle"
                          show-page-status show-page-numbers
                          show-page-nav show-page-ends
                          link_name="matrices.edit"
                          link_param="matrix"
                          reorder_route="/api/matrices/reorder"
                          :show_status="true"
                          :table="table"
                          :endpoint="endpoint"
                >
                    <template slot="name" slot-scope="table">
                        <div class="flex items-center">
                            <ui-status :value="table.record.status" class="mr-2"></ui-status>

                            <router-link v-if="$can('matrices.update')" :to="{ name: 'matrices.edit', params: {matrix: table.record.id} }">{{ table.record.name }}</router-link>
                            <span v-else>{{ table.record.name }}</span>
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
                        <ui-actions :id="'matrix_' + table.record.id + '_actions'" :key="'matrix_' + table.record.id + '_actions'">
                            <ui-dropdown-link :to="{ name: 'matrices.edit', params: {matrix: table.record.id} }" v-if="$can('matrices.update')">Edit</ui-dropdown-link>

                            <ui-dropdown-divider></ui-dropdown-divider>

                            <ui-dropdown-link
                                v-if="$can('matrices.delete')"
                                @click.prevent
                                v-modal:delete-matrix="table.record"
                                class="danger">
                                Delete
                            </ui-dropdown-link>
                        </ui-actions>
                    </template>
                </ui-table>
            </ui-card-body>
        </ui-card>

        <portal to="modals">
            <ui-modal name="delete-matrix" title="Delete Matrix" key="delete_matrix">
                <p>Are you sure you want to permenantly delete this matrix?</p>

                <template slot="footer" slot-scope="matrix">
                    <ui-button v-modal:delete-matrix @click="destroy(matrix.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-matrix variant="secondary">Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    import store from '../../store'

    export default {
        auth() {
            return {
                permission: 'matrices.viewAny',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Matrix'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/matrices',
            }
        },

        methods: {
            destroy(id) {
                axios.delete('/api/matrices/' + id).then((response) => {
                    store.dispatch('navigation/fetchAdminNavigation')

                    toast('Matrix successfully deleted.', 'success')

                    bus().$emit('refresh-datatable-matrices')
                })
            }
        }
    }
</script>
