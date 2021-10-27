<template>
    <div class="link-page">
        <portal to="title">
            <page-title icon="anchor">{{ navigation.name }}</page-title>
        </portal>

        <portal to="actions">
            <div class="buttons">
                <ui-button v-if="$mq != 'sm'" key="go-back-btn" :to="{ name: 'navigation' }" variant="secondary">Go Back</ui-button>
                <ui-button key="create-btn" :to="{ name: 'links.create' }" variant="primary">Create</ui-button>
                <ui-button key="save-btn" variant="primary" @click.prevent="save" v-if="changed" :disabled="saving">Save</ui-button>
            </div>
        </portal>

        <div class="card" v-if="links.length == 0">
            <div class="card__body text-center">
                <p>Add your first link to get started.</p>
            </div>
        </div>

        <ui-card v-else v-show="endpoint">
            <ui-card-body>
                <ui-table
                    id="entries"
                    class="entries-table"
                    sort-by="order"
                    link_name="links.edit"
                    link_param="link"
                    :show_status="true"
                    :reorder_route="'/api/navigation/' + navigation.id + '/links/reorder'"
                    :endpoint="endpoint"
                    :per-page="50"
                    :key="'entries-' + navigation.id"
                >
                    <template slot="name" slot-scope="table">
                        <div class="flex items-center">
                            <ui-status :value="table.record.status" class="mr-2"></ui-status>

                            <router-link :to="{ name: 'links.edit', params: {navigation: navigation.id, link: table.record.id} }">{{ table.record.name }}</router-link>
                        </div>
                    </template>

                    <template slot="url" slot-scope="table">
                        <code>{{ table.record.url }}</code>
                    </template>

                    <template slot="created_at" slot-scope="table">
                        <ui-date :timestamp="table.record.created_at"></ui-date>
                    </template>

                    <template slot="updated_at" slot-scope="table">
                        <ui-date :timestamp="table.record.updated_at"></ui-date>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-actions :id="'entry_' + table.record.id + '_actions'" :key="'entry_' + table.record.id + '_actions'">
                            <ui-dropdown-link :to="{ name: 'links.edit', params: {navigation: navigation.id, link: table.record.id} }">Edit</ui-dropdown-link>

                            <ui-dropdown-divider></ui-dropdown-divider>

                            <ui-dropdown-link
                                @click.prevent
                                v-modal:delete-link="table.record"
                                class="danger">
                                Delete
                            </ui-dropdown-link>
                        </ui-actions>
                    </template>
                </ui-table>
            </ui-card-body>
        </ui-card>

        <portal to="modals">
            <ui-modal name="delete-link" title="Delete Link" key="delete_link">
                <p>Are you sure you want to permenantly delete this link?</p>

                <template slot="footer" slot-scope="link">
                    <ui-button v-modal:delete-link @click="destroy(link.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-link>Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    import { VueNestable, VueNestableHandle } from 'vue-nestable'
    import Form from '../../services/Form'

    export default {
        auth() {
            return {
                permission: 'links.viewAny',
            }
        },

        components: {
            VueNestable,
            VueNestableHandle
        },

        head: {
            title() {
                return {
                    inner: this.navigation.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                loaded: false,
                navigation: {},
                links: [],
                saving: false,
                changed: false,
                form: new Form({
                    name: '',
                    url: '',
                    new_window: 0,
                }),
            }
        },

        computed: {
            options() {
                return this.links.map(link => ({ 'label': link.name, 'value': link.id }));
            },

            endpoint() {
                return this.navigation.id ? '/datatable/navigations/' + this.navigation.id : null;
            },
        },

        methods: {
            save() {
                this.saving = true

                axios.post('/api/navigation/' + this.navigation.id + '/links/reorder', {links: this.links}).then((response) => {
                    this.saving = false
                    this.changed = false
                    toast('Links successfully saved.', 'success')
                })
            },

            changing() {
                if (!this.loaded) {
                    this.loaded = true
                } else {
                    this.changed = true
                }
            },

            fetchLinks() {
                return axios.get('/api/navigation/' + this.navigation.id).then((response) => {
                    this.links = response.data.data.links
                })
            },

            destroy(id) {
                axios.delete('/api/navigation/' + this.navigation.id + '/links/' + id).then((response) => {
                    this.fetchLinks().then(() => {
                        toast('Link successfully deleted.', 'success')

                        bus().$emit('refresh-datatable-entries')
                    })
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.get('/api/navigation/' + to.params.navigation).then((response) => {
                next(function(vm) {
                    vm.navigation = response.data.data
                    vm.links = response.data.data.links

                    vm.$emit('updateHead')
                })
            })
        },

        beforeRouteUpdate(to, from, next) {
            axios.get('/api/navigation/' + to.params.navigation).then((response) => {
                this.navigation = response.data.data
                this.links = response.data.data.links

                this.$emit('updateHead')
            })

            next()
        },
    }
</script>