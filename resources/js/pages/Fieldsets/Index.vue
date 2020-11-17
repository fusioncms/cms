<template>
    <div class="fieldset-page">
        <portal to="title">
            <page-title icon="layer-group">Fieldset</page-title>
        </portal>

        <portal to="actions">
            <ui-button
                key="create-fieldset-btn"
                :to="{ name: 'fieldsets.create' }"
                variant="primary"
                v-if="$can('fieldsets.create')">
                Create Fieldset
            </ui-button>
        </portal>

        <ui-card>
            <ui-card-body>
                <ui-table
                    key="fieldsets"
                    class="fieldset-table"
                    id="fieldsets"
                    :endpoint="endpoint"
                    sort-by="name"
                    primary-key="handle"
                    show-page-status
                    show-page-numbers
                    show-page-nav
                    show-page-ends>

                    <template slot="name" slot-scope="table">
                        <div class="flex items-center">
                            <ui-status :value="table.record.status" class="mr-2"></ui-status>

                            <router-link v-if="$can('fieldsets.update')" :to="{ name: 'fieldsets.edit', params: {fieldset: table.record.id} }">{{ table.record.name }}</router-link>
                            <span v-else>{{ table.record.name }}</span>
                        </div>
                    </template>

                    <template slot="handle" slot-scope="table">
                        {{ table.record.handle }}
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-table-actions :id="'fieldset_' + table.record.id + '_actions'" :key="'fieldset_' + table.record.id + '_actions'">
                            <ui-dropdown-link :to="{ name: 'fieldsets.edit', params: {fieldset: table.record.id} }" v-if="$can('fieldsets.update')">Edit</ui-dropdown-link>

                            <ui-dropdown-divider></ui-dropdown-divider>

                            <ui-dropdown-link
                                v-if="$can('fieldsets.delete')"
                                @click.prevent
                                v-modal:delete-fieldset="table.record"
                                class="danger">
                                Delete
                            </ui-dropdown-link>
                        </ui-table-actions>
                    </template>
                </ui-table>
            </ui-card-body>
        </ui-card>

        <portal to="modals">
            <ui-modal name="delete-fieldset" title="Delete Fieldset" key="delete_fieldset">
                <p>Are you sure you want to permenantly delete this fieldset?</p>

                <template slot="footer" slot-scope="fieldset">
                    <ui-button v-modal:delete-fieldset @click="destroy(fieldset.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-fieldset variant="secondary">Cancel</ui-button>
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
                permission: 'fieldsets.viewAny',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Fieldset'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/fieldsets',
            }
        },

        methods: {
            destroy(id) {
                axios.delete('/api/fieldsets/' + id).then((response) => {
                    store.dispatch('navigation/fetchAdminNavigation')

                    toast('Fieldset successfully deleted.', 'success')

                    bus().$emit('refresh-datatable-fieldsets')
                })
            }
        }
    }
</script>
