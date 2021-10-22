<template>
    <div class="navigation-page">
        <portal to="title">
            <page-title icon="anchor">Navigation</page-title>
        </portal>

        <portal to="actions">
            <ui-button key="create-navigation-btn" :to="{ name: 'navigation.create' }" variant="primary" v-if="$can('navigation.create')">Create Navigation</ui-button>
        </portal>

        <ui-card>
            <ui-card-body>
                <ui-table
                    id="navigation"
                    sort-by="order"
                    primary-key="handle"
                    key="navigation_table"
                    link_name="navigation.edit"
                    link_param="navigation"
                    reorder_route="/api/navigation/reorder"
                    :show_status="false"
                    :endpoint="endpoint"
                >
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'links', params: {navigation: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="handle" slot-scope="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template slot="description" slot-scope="table">
                        <p>{{ table.record.description }}</p>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-actions :id="'navigation_' + table.record.id + '_actions'" :key="'navigation_' + table.record.id + '_actions'">
                            <ui-dropdown-link :to="{ name: 'links', params: {navigation: table.record.id} }">Links</ui-dropdown-link>
                            <ui-dropdown-link :to="{ name: 'navigation.edit', params: {navigation: table.record.id} }">Edit</ui-dropdown-link>

                            <ui-dropdown-link
                                @click.prevent
                                v-modal:delete-navigation="table.record"
                                classes="link--danger">
                                Delete
                            </ui-dropdown-link>
                        </ui-actions>
                    </template>
                </ui-table>
            </ui-card-body>
        </ui-card>

        <portal to="modals">
            <ui-modal name="delete-navigation" title="Delete Navigation" key="delete_navigation">
                <p>Are you sure you want to permenantly delete this navigation?</p>

                <template slot="footer" slot-scope="navigation">
                    <ui-button v-modal:delete-navigation @click="destroy(navigation.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-navigation>Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    export default {
        auth() {
            return {
                permission: 'navigation.viewAny',
            }
        },

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