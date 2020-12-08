<template>
    <div class="term-page">
        <portal to="title">
            <page-title :icon="taxonomy.icon || 'pencil-alt'">{{ taxonomy.name }}</page-title>
        </portal>

        <portal to="actions">
            <router-link v-if="taxonomy.id" :to="{ name: 'terms.create', params: {taxonomy: taxonomy.id} }" class="button">Create {{ singular }}</router-link>
        </portal>

        <ui-card>
            <ui-card-body>
                <ui-table v-if="endpoint" id="entries" :endpoint="endpoint" sort-by="name" :key="taxonomy.handle + '_table'">
                    <template slot="name" slot-scope="table">
                        <div class="flex items-center">
                            <ui-status :value="table.record.status" class="mr-2"></ui-status>

                            <router-link :to="{ name: 'terms.edit', params: {taxonomy: taxonomy.id, id: table.record.id} }">{{ table.record.name }}</router-link>
                        </div>
                    </template>
                    
                    <template slot="slug" slot-scope="table">
                        <code>{{ table.record.slug }}</code>
                    </template>

                    <template slot="status" slot-scope="table">
                        <span class="badge badge--success" v-if="table.record.status === 1">Enabled</span>
                        <span class="badge badge--danger" v-else>Disabled</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-table-actions :id="'term_' + table.record.id + '_actions'" :key="'term_' + table.record.id + '_actions'">
                            <ui-dropdown-link @click.prevent :to="{ name: 'terms.edit', params: {taxonomy: taxonomy.id, id: table.record.id} }">Edit</ui-dropdown-link>

                            <ui-dropdown-link
                                @click.prevent
                                v-modal:delete-term="table.record"
                                class="danger">
                                Delete
                            </ui-dropdown-link>
                        </ui-table-actions>
                    </template>
                </ui-table>
            </ui-card-body>
        </ui-card>

        <portal to="modals">
            <ui-modal name="delete-term" title="Delete Term" key="delete_term">
                <p>Are you sure you want to permenantly delete this term?</p>

                <template slot="footer" slot-scope="term">
                    <ui-button v-modal:delete-term @click="destroy(term.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-term>Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    import pluralize from 'pluralize'

    export default {
        auth() {
            return {
                permission: 'terms.viewAny',
            }
        },

        head: {
            title() {
                return {
                    inner: this.taxonomy.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                taxonomy: {},
            }
        },

        computed: {
            endpoint() {
                if (this.taxonomy.id) {
                    return `/datatable/taxonomies/${this.taxonomy.id}`
                }

                return null
            },

            singular() {
                if (this.taxonomy.name) {
                    return pluralize.singular(this.taxonomy.name)
                }

                return ''
            },
        },

        methods: {
            destroy(id) {
                axios.delete(`/api/taxonomies/${this.taxonomy.id}/terms/${id}`).then((response) => {
                    toast('Entry successfully deleted.', 'success')

                    bus().$emit('refresh-datatable-entries')
                })
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.get(`/api/taxonomies/${to.params.taxonomy}`).then((response) => {
                next(function(vm) {
                    vm.taxonomy = response.data.data

                    vm.$emit('updateHead')
                })
            })
        },

        beforeRouteUpdate(to, from, next) {
            axios.get(`/api/taxonomies/${to.params.taxonomy}`).then((response) => {
                this.taxonomy = response.data.data

                this.$emit('updateHead')
            })

            next()
        }
    }
</script>