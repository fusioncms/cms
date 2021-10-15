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

        <div v-else class="mb-4 xl:mb-6">
            <VueNestable v-model="links" :threshold="32" @input="changing()">
                <template slot-scope="{ item }">
                    <div class="flex">
                        <VueNestableHandle :item="item" class="flex items-center justify-center border-r w-8 text-gray-500 bg-gray-50 rounded-l">
                            <fa-icon :icon="['fas', 'grip-vertical']"></fa-icon>
                        </VueNestableHandle>

                        <div class="flex flex-1 items-center justify-between">
                            <div class="p-3 flex items-center" :class="{'font-bold': (item.url == '' || item.url == '#')}">
                                <ui-status :value="item.status" class="mr-2"></ui-status>
                                <router-link :to="{ name: 'links.edit', params: {navigation: navigation.id, link: item.id} }">{{ item.name }}</router-link>
                            </div>
                            <div class="p-2">
                                <ui-actions right :id="'link_' + item.id + '_actions'" :key="'link_' + item.id + '_actions'">
                                    <ui-dropdown-link @click.prevent :to="{ name: 'links.edit', params: {navigation: navigation.id, link: item.id} }">Edit</ui-dropdown-link>
                                    <ui-dropdown-link
                                        @click.prevent
                                        v-modal:delete-link="item"
                                        classes="link--danger">
                                        Delete
                                    </ui-dropdown-link>
                                </ui-actions>
                            </div>
                        </div>
                    </div>
                </template>
            </VueNestable>
        </div>

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
            }
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