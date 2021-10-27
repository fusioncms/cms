<template>
    <div class="script-page">
        <portal to="title">
            <page-title icon="code">Scripts</page-title>
        </portal>

        <portal to="actions">
            <ui-button variant="primary" :to="{ name: 'scripts.create' }">Create</ui-button>
        </portal>

        <ui-card>
            <ui-card-body>
                <ui-table
                    key="scripts"
                    id="scripts"
                    sort-by="order"
                    link_name="scripts.edit"
                    link_param="script"
                    reorder_route="/api/scripts/reorder"
                    :show_status="false"
                    :endpoint="endpoint"
                    :per-page="50"
                >
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'scripts.edit', params: {script: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-actions :id="'script_' + table.record.id + '_actions'" :key="'script_' + table.record.id + '_actions'">
                            <ui-dropdown-link :to="{ name: 'scripts.edit', params: {script: table.record.id} }">Edit</ui-dropdown-link>

                            <ui-dropdown-divider></ui-dropdown-divider>

                            <ui-dropdown-link
                                v-if="$can('scripts.delete')"
                                @click.prevent
                                v-modal:delete-script="table.record"
                                class="danger">
                                Delete
                            </ui-dropdown-link>
                        </ui-actions>
                    </template>
                </ui-table>
            </ui-card-body>
        </ui-card>

        <portal to="modals">
            <ui-modal name="delete-script" title="Delete Script" key="delete_script">
                <p>Are you sure you want to permenantly delete this script?</p>

                <template slot="footer" slot-scope="script">
                    <ui-button v-modal:delete-script @click="destroy(script.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-script variant="secondary">Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    export default {
        auth() {
            return {
                permission: 'scripts.viewAny',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Scripts'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/scripts',
            }
        },

        methods: {
            destroy(id) {
                axios.delete('/api/scripts/' + id).then((response) => {
                    toast('Script successfully deleted.', 'success')

                    bus().$emit('refresh-datatable-scripts')
                })
            },
        },
    }
</script>