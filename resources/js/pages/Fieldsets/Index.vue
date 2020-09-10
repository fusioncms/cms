<template>
    <div>
        <portal to="title">
            <page-title icon="list">Fieldsets</page-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'fieldsets.create' }" class="button">Create Fieldset</router-link>
        </portal>

        <div class="row">
            <div class="content-container">
                <ui-table :endpoint="endpoint" id="fieldsets" sort-by="name" primary-key="handle" key="fieldsets_table">
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'fieldsets.edit', params: {fieldset: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="handle" slot-scope="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-table-actions :id="'fieldset_' + table.record.id + '_actions'" :key="'fieldset_' + table.record.id + '_actions'">
                            <ui-dropdown-link :to="{ name: 'fieldsets.edit', params: {fieldset: table.record.id} }">Edit</ui-dropdown-link>

                            <ui-dropdown-link
                                @click.prevent
                                v-modal:delete-fieldset="table.record"
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
            <ui-modal name="delete-fieldset" title="Delete Fieldset" key="delete_fieldset">
                <p>Are you sure you want to permenantly delete this fieldset?</p>

                <template slot="footer" slot-scope="fieldset">
                    <ui-button v-modal:delete-fieldset @click="destroy(fieldset.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-fieldset>Cancel</ui-button>
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
                    inner: 'Fieldsets'
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

                    toast('Fieldset successfully deleted.', 'success')

                    bus().$emit('refresh-datatable-fieldsets')
                })
            }
        }
    }
</script>
