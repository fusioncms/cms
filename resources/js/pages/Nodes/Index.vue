<template>
    <form-container>
        <portal to="title">
            <page-title icon="anchor">{{ navigation.name }}</page-title>
        </portal>

        <portal to="actions">
            <div class="buttons">
                <ui-button :to="{ name: 'navigation' }">Go Back</ui-button>
                <ui-button variant="primary" @click.prevent="save" :disabled="saving">Save</ui-button>
            </div>
        </portal>

        <div class="card" v-if="nodes.length == 0">
            <div class="card__body text-center">
                <p>Add your first node to get started.</p>
            </div>
        </div>

        <div class="table__wrapper" v-else>
            <table class="table">
                <thead>
                    <tr>
                        <th class="w-20"></th>
                        <th>Name</th>
                        <th>URL</th>
                        <th>Type</th>
                        <th class="w-20"></th>
                    </tr>
                </thead>

                <ui-sortable-list v-model="nodes" class="sortable-list">
                    <tbody>
                        <ui-sortable-item v-for="node in nodes" :key="node.id">
                            <tr>
                                <td class="w-8">
                                    <ui-sortable-handle class="mr-6 text-gray-400">
                                        <div class="w-6 h-6 flex items-center justify-center">
                                            <fa-icon :icon="['fas', 'grip-vertical']" class="fa-fw"></fa-icon>
                                        </div>
                                    </ui-sortable-handle>
                                </td>

                                <td>
                                    <ui-status :value="node.status" class="mr-2"></ui-status>

                                    <router-link :to="{ name: 'navigation.nodes.edit', params: {navigation: navigation.id, node: node.id} }">{{ node.name }}</router-link>

                                    <fa-icon v-if="node.new_window" class="fa-fw text-gray-500 text-xs" :icon="['fas', 'external-link-alt']"></fa-icon>
                                </td>

                                <td>
                                    <span class="text-sm text-gray-600">
                                        {{ node.url }}
                                    </span>
                                </td>

                                <td><span class="text-xs px-2 py-1 bg-gray-200 text-gray-600 leading-none">custom</span></td>

                                <td class="actions">
                                    <div class="draggable__actions">
                                        <ui-table-actions right :id="'node_' + node.id + '_actions'" :key="'node_' + node.id + '_actions'">
                                            <ui-dropdown-link @click.prevent :to="{ name: 'navigation.nodes.edit', params: {navigation: navigation.id, node: node.id} }">Edit</ui-dropdown-link>
                                            <ui-dropdown-link
                                                v-if="nodes.length > 1"
                                                @click.prevent
                                                v-modal:move-before="node">
                                                Move before...
                                            </ui-dropdown-link>

                                            <ui-dropdown-link
                                                v-if="nodes.length > 1"
                                                @click.prevent
                                                v-modal:move-after="node">
                                                Move after...
                                            </ui-dropdown-link>

                                            <ui-dropdown-link
                                                @click.prevent
                                                v-modal:delete-node="node"
                                                classes="link--danger">
                                                Delete
                                            </ui-dropdown-link>
                                        </ui-table-actions>
                                    </div>
                                </td>
                            </tr>
                        </ui-sortable-item>
                    </tbody>
                </ui-sortable-list>
            </table>
        </div>

        <template v-slot:sidebar>
            <div class="card">
                <div class="card__header">
                    <h3 class="card__title">Custom URL</h3>
                </div>

                <div class="card__body">
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
                </div>
            </div>
        </template>

        <portal to="modals">
            <ui-modal name="delete-node" title="Delete Node" key="delete_node">
                <p>Are you sure you want to permenantly delete this node?</p>

                <template slot="footer" slot-scope="node">
                    <ui-button v-modal:delete-node @click="destroy(node.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-node>Cancel</ui-button>
                </template>
            </ui-modal>

            <ui-modal name="move-before" title="Move before..." key="move_before">
                <template>
                    <p>Which node would you like to move before?</p>

                    <ui-select-group name="before" label="Node" hide-label :options="options" v-model="before"></ui-select-group>
                </template>

                <template slot="footer" slot-scope="node">
                    <ui-button v-modal:move-before @click="moveBefore(node.data.id)" variant="danger" class="ml-3">Move</ui-button>
                    <ui-button v-modal:move-after @click="before = null">Cancel</ui-button>
                </template>
            </ui-modal>

            <ui-modal name="move-after" title="Move after..." key="move_after">
                <template>
                    <p>Which node would you like to move after?</p>

                    <ui-select-group name="after" label="Node" hide-label :options="options" v-model="after"></ui-select-group>
                </template>

                <template slot="footer" slot-scope="node">
                    <ui-button v-modal:move-after @click="moveAfter(node.data.id)" variant="danger" class="ml-3">Move</ui-button>
                    <ui-button v-modal:move-after @click="after = null">Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </form-container>
</template>

<script>
    import Form from '../../services/Form'

    export default {
        head: {
            title() {
                return {
                    inner: this.navigation.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                navigation: {},
                nodes: [],
                saving: false,
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
                return _.map(this.nodes, function(node) {
                    return {
                        'label': node.name,
                        'value': node.id
                    }
                })
            }
        },

        methods: {
            add(type) {
                this.saving = true

                this.form.post('/api/navigation/' + this.navigation.id + '/nodes').then((response) => {
                    this.fetchNodes().then((response) => {
                        this.reset()
                        this.saving = false

                        toast('Navigation node successfully added', 'success')
                    })
                }).catch((response) => {
                    toast(response.message, 'failed')
                })
            },

            save() {
                this.saving = true
                let nodes = {}

                _.each(this.nodes, (node, index) => {
                    nodes[node.id] = {
                        order: index + 1
                    }
                })

                axios.post('/api/navigation/' + this.navigation.id + '/reorder', {nodes: nodes}).then((response) => {
                    this.saving = false
                    toast('Navigation nodes successfully reordered.', 'success')
                })
            },

            fetchNodes() {
                return axios.get('/api/navigation/' + this.navigation.id).then((response) => {
                    this.nodes = response.data.data.nodes
                })
            },

            reset() {
                this.form.name = ''
                this.form.url  = ''
                this.form.new_window = 0
            },

            destroy(id) {
                axios.delete('/api/navigation/' + this.navigation.id + '/nodes/' + id).then((response) => {
                    this.fetchNodes().then(() => {
                        toast('Navigation node successfully deleted.', 'success')
                    })
                })
            },

            moveBefore(move) {
                axios.post('/api/navigation/' + this.navigation.id + '/nodes/move/before', {
                    move: move,
                    before: this.before,
                }).then((response) => {
                    this.fetchNodes().then(() => {
                        this.before = null

                        toast('Navigation node successfully moved.', 'success')
                    })
                })
            },

            moveAfter(move) {
                axios.post('/api/navigation/' + this.navigation.id + '/nodes/move/after', {
                    move: move,
                    after: this.after,
                }).then((response) => {
                    this.fetchNodes().then(() => {
                        this.after = null

                        toast('Navigation node successfully moved.', 'success')
                    })
                })
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.get('/api/navigation/' + to.params.navigation).then((response) => {
                next(function(vm) {
                    vm.navigation = response.data.data
                    vm.nodes = response.data.data.nodes

                    vm.$emit('updateHead')
                })
            })
        },

        beforeRouteUpdate(to, from, next) {
            axios.get('/api/navigation/' + to.params.navigation).then((response) => {
                this.navigation = response.data.data
                this.nodes = response.data.data.nodes

                this.$emit('updateHead')
            })

            next()
        },
    }
</script>