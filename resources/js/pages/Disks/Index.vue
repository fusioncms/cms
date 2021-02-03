<template>
    <div class="disk-page">
        <portal to="title">
            <page-title icon="hdd">Disks</page-title>
        </portal>

        <portal to="actions">
            <ui-button key="create-disk-btn" :to="{ name: 'disks.create' }" variant="primary" v-if="$can('disks.create')">Create Disk</ui-button>
        </portal>

        <ui-card>
            <ui-card-body>
                <ui-table :endpoint="endpoint" id="disks" sort-by="name" primary-key="handle" key="disks_table">
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'disks.nodes', params: {disk: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="driver" slot-scope="table">
                        <code>{{ table.record.driver }}</code>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-table-actions :id="'disks_' + table.record.id + '_actions'" :key="'disks_' + table.record.id + '_actions'">
                            <ui-dropdown-link :to="{ name: 'disks.edit', params: {disk: table.record.id} }">Edit</ui-dropdown-link>

                            <ui-dropdown-link
                                @click.prevent
                                v-modal:delete-disk="table.record"
                                classes="link--danger">
                                Delete
                            </ui-dropdown-link>
                        </ui-table-actions>
                    </template>
                </ui-table>
            </ui-card-body>
        </ui-card>

        <portal to="modals">
            <ui-modal name="delete-disk" title="Delete Disk" key="delete_disk">
                <p>Are you sure you want to permenantly delete this disk?</p>

                <template slot="footer" slot-scope="disk">
                    <ui-button v-modal:delete-disk @click="destroy(disk.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-disk>Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    export default {
        auth() {
            return {
                permission: 'disks.viewAny',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Disks'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/disks',
            }
        },

        methods: {
            destroy(id) {
                axios.delete(`/api/disks/${id}`).then((response) => {
                    toast('Navigation successfully deleted.', 'success')

                    bus().$emit('refresh-datatable-disks')
                })
            }
        }
    }
</script>