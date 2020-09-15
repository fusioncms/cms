<template>
    <div>
        <portal to="title">
            <page-title icon="download">Updates</page-title>
        </portal>

        <portal to="actions">
            <a href="https://beta.getfusioncms.com/changelog" title="Changelog" target="_blank">{{ current }}</a>
        </portal>

        <div class="card" v-for="(version, i1) in versions" :key="i1">
            <div class="card__header flex items-center justify-between">
                <h3 class="card__title">
                    {{ version.title }}

                    <span class="text-xs block">
                        Released {{ $moment(version.date_published).format('MMM Do, YYYY') }}
                    </span>
                </h3>

                <div class="flex items-center justify-start">
                    <!-- upgrade --
                    <ui-button v-if="version.id > id" @click="upgrade(version.id)" disabled>
                        Upgrade to {{ version.title }}
                    </ui-button>
                    -->

                    <!-- current version -->
                    <ui-button v-if="version._isCurrent" disabled>
                        Current version
                    </ui-button>

                    <!-- attachments -->
                    <a  v-for="(attachment, i2) in version.attachments"
                        :key="`attachment-${i1}-${i2}`"
                        class="button button--icon ml-1"
                        :href="attachment.url"
                        :title="attachment.mime_type">
                        <fa-icon icon="download" class="icon"></fa-icon>
                    </a>

                    <!-- github -->
                    <a  class="button button--icon ml-1"
                        :href="`https://github.com/fusioncms/fusioncms/releases/tag/${version.title}`"
                        title="View on Github"
                        target="_blank">
                        <fa-icon icon="code" class="icon"></fa-icon>
                    </a>
                </div>
            </div>

            <div class="card__body">
                <p>{{ versions.content_text }}</p>

                <div v-for="(changelog, name) in version._changelog" :key="name">
                    <div class="row" v-for="(issues, text) in changelog" :key="text">
                        <div class="col">
                            <span class="badge">{{ name }}</span>
                        </div>

                        <div class="col">
                            {{ text }}

                            <a  v-for="issue in issues"
                                class="mr-1 text-xs"
                                :key="issue"
                                :href="`https://github.com/fusioncms/fusioncms/issues/${issue}`"
                                target="_blank">
                                #{{ issue }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6" v-if="pagination.total > 1">
            <ui-pagination
                @input="changePage($event)"
                :total="pagination.last_page"
                :value="pagination.current_page"
            ></ui-pagination>
        </div>

        <portal to="modals">
            <ui-modal
                key="updater_modal"
                name="updater"
                :title="`Update to ${version.title}`"
                v-model="isConfirming">

                <p>Are you sure you want to update to version {{ version.title }}?</p>

                <template slot="footer">
                    <ui-button @click="confirm" type="button" class="button button--primary">Confirm</ui-button>
                    <ui-button @click="close" type="button" class="mr-3">Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    export default {
        name: 'updates',

        data() {
            return {
                version: false,
                versions: [],
                pagination: []
            }
        },

        computed: {
            current() {
                return `v${this.$store.state.fusion.version}`
            },

            id() {
                return this.findBy('title', this.current).id
            },

            isConfirming() {
                return !! this.version
            }
        },

        methods: {
            findBy(key, value) {
                return _.find(this.versions, (version) => version[key] == value)
            },

            changePage(page) {
                this.refresh(page)
            },

            upgrade(id) {
                this.version = this.findBy('id', id)
            },

            confirm() {
                axios.post('/api/updates', { version: this.version })
                    .then((response) => {
                        console.log(response)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },

            close() {
                this.version = false
            },

            refresh(page) {
                getModels((error, versions, pagination) => {
                    if (error) {
                        toast(error.toString(), 'danger')
                    } else {
                        this.versions   = versions
                        this.pagination = pagination
                    }
                }, page)
            }
        },

        beforeRouteEnter(to, from, next) {
            getModels((error, versions, pagination) => {
                if (error) {
                    next((vm) => toast(error.toString(), 'danger'))
                } else {
                    next((vm) => {
                        vm.versions   = versions
                        vm.pagination = pagination
                    })
                }
            })
        }
    }

    export function getModels(callback, page = 1) {
        axios.all([
            axios.get(`/api/updates?page=${page}`)
        ]).then(axios.spread((response) => {
            callback(null, response.data.data, response.data.meta)
        })).catch((error) => {
            callback(new Error('The requested resource could not be found'))
        })
    }
</script>