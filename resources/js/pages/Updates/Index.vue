<template>
    <div>
        <portal to="title">
            <page-title icon="download">Updates</page-title>
        </portal>

        <portal to="actions">
            <a href="https://beta.getfusioncms.com/changelog" title="Changelog" target="_blank">{{ current }}</a>
        </portal>

        <div class="card" v-for="(item, i1) in items">
            <div class="card__header flex items-center justify-between">
                <h3 class="card__title">
                    {{ item.title }}

                    <span class="text-xs block">
                        Released {{ $moment(item.date_published).format('MMM Do, YYYY') }}
                    </span>
                </h3>

                <div class="flex items-center justify-start">
                    <!-- upgrade --
                    <p-button v-if="item.id > id" @click="upgrade(item.id)" disabled>
                        Upgrade to {{ item.title }}
                    </p-button>
                    -->

                    <!-- current version -->
                    <p-button v-if="item._isCurrent" disabled>
                        Current version
                    </p-button>

                    <!-- attachments -->
                    <a  v-for="(attachment, i2) in item.attachments"
                        :key="`attachment-${i1}-${i2}`"
                        class="button button--icon ml-1"
                        :href="attachment.url"
                        :title="attachment.mime_type">
                        <fa-icon icon="download" class="icon"></fa-icon>
                    </a>

                    <!-- github -->
                    <a  class="button button--icon ml-1"
                        :href="`https://github.com/fusioncms/fusioncms/releases/tag/${item.title}`"
                        title="View on Github"
                        target="_blank">
                        <fa-icon icon="code" class="icon"></fa-icon>
                    </a>
                </div>
            </div>

            <div class="card__body">
                <p>{{ items.content_text }}</p>

                <div v-for="changelog, name in item._changelog">
                    <div class="row" v-for="issues, text in changelog"> 
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

        <portal to="modals">
            <p-modal
                key="updater_modal"
                name="updater"
                :title="`Update to ${version.title}`"
                v-model="isConfirming">

                <p>Are you sure you want to update to version {{ version.title }}?</p>
                
                <template slot="footer">
                    <p-button @click="confirm" type="button" class="button button--primary">Confirm</p-button>
                    <p-button @click="close" type="button" class="mr-3">Cancel</p-button>
                </template>
            </p-modal>
        </portal>
    </div>
</template>

<script>
    export default {
        name: 'updates',
        
        data() {
            return {
                version: false,
                items: []
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
                return _.find(this.items, (item) => item[key] == value)
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
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.get('/api/updates')
                .then((response) =>
                    next((vm) => vm.items = response.data.data))
        }
    }
</script>