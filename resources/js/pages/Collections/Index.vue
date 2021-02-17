<template>
    <div class="collection-page">
        <portal to="title">
            <page-title :icon="collection.icon || 'pencil-alt'">{{ collection.name }}</page-title>
        </portal>

        <portal to="actions">
            <ui-button v-if="collection.slug" variant="primary" :to="{ name: 'collection.create', params: {collection: collection.slug} }">Create</ui-button>
        </portal>

        <ui-card v-if="endpoint">
            <ui-card-body>
                <ui-table :key="'entries-' + collection.id" class="entries-table" id="entries" :endpoint="endpoint" sort-by="name" :per-page="50">
                    <template slot="name" slot-scope="table">
                        <div class="flex items-center">
                            <ui-status :value="table.record.status" class="mr-2"></ui-status>

                            <router-link :to="{ name: 'collection.edit', params: {collection: collection.slug, id: table.record.id} }">{{ table.record.name }}</router-link>
                        </div>
                    </template>

                    <template slot="slug" slot-scope="table">
                        <code>{{ table.record.slug }}</code>
                    </template>

                    <template slot="created_at" slot-scope="table">
                        <ui-date :timestamp="table.record.created_at"></ui-date>
                    </template>

                    <template slot="updated_at" slot-scope="table">
                        <ui-date :timestamp="table.record.updated_at"></ui-date>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-actions :id="'entry_' + table.record.id + '_actions'" :key="'entry_' + table.record.id + '_actions'">
                            <ui-dropdown-link>View</ui-dropdown-link>
                            <ui-dropdown-link :to="{ name: 'collection.edit', params: {collection: collection.slug, id: table.record.id} }">Edit</ui-dropdown-link>

                            <ui-dropdown-divider></ui-dropdown-divider>

                            <ui-dropdown-link
                                @click.prevent
                                v-modal:delete-entry="table.record"
                                class="danger">
                                Delete
                            </ui-dropdown-link>
                        </ui-actions>
                    </template>
                </ui-table>
            </ui-card-body>
        </ui-card>

        <portal to="modals">
            <ui-modal name="delete-entry" title="Delete Entry" key="delete_entry">
                <p>Are you sure you want to permenantly delete this entry?</p>

                <template slot="footer" slot-scope="entry">
                    <ui-button v-modal:delete-entry @click="destroy(entry.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-entry variant="secondary">Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    import pluralize from 'pluralize'

    export default {
        head: {
            title() {
                return {
                    inner: this.collection.name
                }
            }
        },

        data() {
            return {
                collection: {},
            }
        },

        computed: {
            endpoint() {
                if (this.collection.id) {
                    return '/datatable/collections/' + this.collection.id
                }

                return null
            },

            singular() {
                if (this.collection.name) {
                    return pluralize.singular(this.collection.name)
                }

                return ''
            },
        },

        methods: {
            destroy(id) {
                axios.delete('/api/collections/' + this.collection.slug + '/' + id).then((response) => {
                    toast('Entry successfully deleted.', 'success')

                    bus().$emit('refresh-datatable-entries')
                })
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.get('/api/matrices/slug/' + to.params.collection).then((response) => {
                next(function(vm) {
                    vm.collection = response.data.data

                    vm.$emit('updateHead')
                })
            }).catch(function(error) {
                next('/')
                toast('The requested collection could not be found', 'warning')
            })
        },

        beforeRouteUpdate(to, from, next) {
            axios.get('/api/matrices/slug/' + to.params.collection).then((response) => {
                this.collection = response.data.data

                this.$emit('updateHead')
            })

            next()
        }
    }
</script>