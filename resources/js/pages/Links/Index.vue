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

        <portal to="sidebar-right">
            <sidebar id="links-sidebar">
                <sidebar-section id="add_custom_link" title="Custom URL" description="Add a custom URL to this navigational menu." tabindex="-1">
                    <ui-input-group name="name" label="Name" v-model="form.name"></ui-input-group>

                    <ui-input-group name="url" label="URL" v-model="form.url"></ui-input-group>

                    <ui-select-group
                        name="new_window"
                        label="Open link where"
                        help="Determine where the link should open."
                        :options="[
                            {
                                'label': 'New Window',
                                'value': 1,
                            },
                            {
                                'label': 'Same Window',
                                'value': 0,
                            },
                        ]"
                        v-model="form.new_window">
                    </ui-select-group>

                    <ui-button variant="primary" @click.prevent="add('custom')">Add</ui-button>
                </sidebar-section>
            </sidebar>
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
                                        v-modal:move-before="item">
                                        Move before...
                                    </ui-dropdown-link>

                                    <ui-dropdown-link
                                        @click.prevent
                                        v-modal:move-after="item">
                                        Move after...
                                    </ui-dropdown-link>

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

            <ui-modal name="move-before" title="Move before..." key="move_before">
                <template>
                    <p>Which link would you like to move before?</p>

                    <ui-select-group name="before" label="Link" hide-label :options="options" v-model="before"></ui-select-group>
                </template>

                <template slot="footer" slot-scope="link">
                    <ui-button v-modal:move-before @click="moveBefore(link.data.id)" variant="danger" class="ml-3">Move</ui-button>
                    <ui-button v-modal:move-before @click="before = null">Cancel</ui-button>
                </template>
            </ui-modal>

            <ui-modal name="move-after" title="Move after..." key="move_after">
                <template>
                    <p>Which link would you like to move after?</p>

                    <ui-select-group name="after" label="Link" hide-label :options="options" v-model="after"></ui-select-group>
                </template>

                <template slot="footer" slot-scope="link">
                    <ui-button v-modal:move-after @click="moveAfter(link.data.id)" variant="danger" class="ml-3">Move</ui-button>
                    <ui-button v-modal:move-after @click="after = null">Cancel</ui-button>
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
                before: null,
                after: null,
                form: new Form({
                    name: '',
                    url: '',
                    new_window: 0,
                }),
            }
        },

        computed: {
            options() {
                return _.map(this.links, function(link) {
                    return {
                        'label': link.name,
                        'value': link.id
                    }
                })
            }
        },

        methods: {
            add(type) {
                this.saving = true

                this.form.post('/api/navigation/' + this.navigation.id + '/links').then((response) => {
                    this.fetchLinks().then((response) => {
                        this.reset()
                        this.saving = false
                        this.changed = false

                        toast('Navigation link successfully added', 'success')
                    })
                }).catch((response) => {
                    toast(response.message, 'failed')
                })
            },

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

            reset() {
                this.form.name = ''
                this.form.url  = ''
                this.form.new_window = 0
            },

            destroy(id) {
                axios.delete('/api/navigation/' + this.navigation.id + '/links/' + id).then((response) => {
                    this.fetchLinks().then(() => {
                        toast('Link successfully deleted.', 'success')
                    })
                })
            },

            moveBefore(move) {
                axios.post('/api/navigation/' + this.navigation.id + '/links/before', {
                    move: move,
                    before: parseInt(this.before),
                }).then((response) => {
                    this.after = null
                    this.before = null

                    this.fetchLinks().then(() => {
                        toast('Link successfully moved.', 'success')
                    })
                })
            },

            moveAfter(move) {
                axios.post('/api/navigation/' + this.navigation.id + '/links/after', {
                    move: move,
                    after: parseInt(this.after),
                }).then((response) => {
                    this.after = null
                    this.before = null

                    this.fetchLinks().then(() => {
                        toast('Link successfully moved.', 'success')
                    })
                })
            }
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