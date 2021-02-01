<template>
    <div class="scripts-page">
        <portal to="title">
            <page-title icon="code">Scripts</page-title>
        </portal>

        <portal to="actions">
            <div class="buttons">
                <ui-button :to="{ name: 'scripts.create' }">Create</ui-button>
            </div>
        </portal>

        <div class="row">
            <div class="col w-full">
                <ui-card>
                    <ui-card-body>
                        <ui-table key="scripts" class="scripts-table" id="scripts" :endpoint="endpoint" sort-by="name" :per-page="50">

                            <template slot="actions" slot-scope="table">
                                <ui-table-actions :id="'script_' + table.record.id + '_actions'" :key="'script_' + table.record.id + '_actions'">
                                    <ui-dropdown-link :to="{ name: 'scripts.edit', params: {script: table.record.id} }" v-if="$can('scripts.update')">Edit</ui-dropdown-link>

                                    <ui-dropdown-divider></ui-dropdown-divider>

                                    <ui-dropdown-link
                                        v-if="$can('scripts.delete')"
                                        @click.prevent
                                        v-modal:delete-script="table.record"
                                        class="danger">
                                        Delete
                                    </ui-dropdown-link>
                                </ui-table-actions>
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
        </div>
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
                scripts: [],
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