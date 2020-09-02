<template>
    <div>
        <portal to="title">
            <page-title icon="anchor">Navigation</page-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'navigation.create' }" class="button">Create Navigation</router-link>
        </portal>

        <div class="row">
            <div class="content-container">
                <p-table :endpoint="endpoint" id="navigation" sort-by="name" primary-key="handle" key="navigation_table">
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'navigation.nodes', params: {navigation: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="handle" slot-scope="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <p-actions :id="'navigation_' + table.record.id + '_actions'" :key="'navigation_' + table.record.id + '_actions'">
                            <p-dropdown-link :to="{ name: 'navigation.nodes', params: {navigation: table.record.id} }">Manage</p-dropdown-link>
                            <p-dropdown-link :to="{ name: 'navigation.edit', params: {navigation: table.record.id} }">Edit</p-dropdown-link>

                            <p-dropdown-link
                                @click.prevent
                                v-modal:delete-navigation="table.record"
                                classes="link--danger"
                            >
                                Delete
                            </p-dropdown-link>
                        </p-actions>
                    </template>
                </p-table>
            </div>
        </div>

        <portal to="modals">
            <p-modal name="delete-navigation" title="Delete Navigation" key="delete_navigation">
                <p>Are you sure you want to permenantly delete this navigation?</p>

                <template slot="footer" slot-scope="navigation">
                    <p-button v-modal:delete-navigation @click="destroy(navigation.data.id)" theme="danger" class="ml-3">Delete</p-button>
                    <p-button v-modal:delete-navigation>Cancel</p-button>
                </template>
            </p-modal>
        </portal>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Navigations'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/navigation',
            }
        },

        methods: {
            destroy(id) {
                axios.delete('/api/navigation/' + id).then((response) => {
                    toast('Navigation successfully deleted.', 'success')

                    bus().$emit('refresh-datatable-navigation')
                })
            }
        }
    }
</script>