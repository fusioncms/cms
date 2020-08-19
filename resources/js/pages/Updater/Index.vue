<template>
    <div>
        <portal to="title">
            <page-title icon="upload">Updater</page-title>
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
                    <!--
                    <p-button v-if="item.id < id" @click="downgrade(item.id)">
                        Downgrade to {{ item.title }}
                    </p-button>
                    -->

                    <!-- upgrade -->
                    <p-button v-if="item.id > id" @click="upgrade(item.id)">
                        Upgrade to {{ item.title }}
                    </p-button>

                    <!-- current version -->
                    <p-button v-if="item.id == id" disabled>
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

                <div v-for="logs, name in item._log">
                    <div class="row" v-for="issues, text in logs"> 
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
            <updater-modal v-model="version"></updater-modal>
        </portal>
    </div>
</template>

<script>
    import UpdaterModal from '@/components/Modals/UpdaterModal'

    export default {
        name: 'updater',

        components: {
            'updater-modal': UpdaterModal
        },
        
        data() {
            return {
                version: false,
                items: [
                /*
                    {
                        "id": 12,
                        "title": "v6.0.0-beta.10",
                        "url": "https://beta.getfusioncms.com/v600-beta10",
                        "content_text": null,
                        "date_published": "2020-07-28T15:53:07-07:00",
                        "attachments": [
                            {
                                "url": "https://github.com/fusioncms/fusioncms/archive/v6.0.0-beta.10.zip",
                                "mime_type": "application/zip"
                            }
                        ],
                        "_log": {
                            "new": {
                                "New control panel theme with dark sidebar": [ 535 ],
                                "Replicator field backend": [ 607, 609 ],
                                "Ability to move fields between sections": [ 604 ]
                            },
                            "changed": {
                                "Improved name field UI/UX": [ 595 ],
                                "Moved \"Show name field\" to customize tab and adjust toggle": [ 613 ]
                            },
                            "fixed": {
                                "Upload field not working in settings interface": [ 615 ],
                                "Adding a new field assigns the field to the last fieldset section": [ 603 ],
                                "storage/app/themes directory not auto-generated": [ 606 ],
                                "Unable to change theme": [ 605 ],
                                "Installation fails when whitespace is present in application name": [ 598 ],
                                "Installation fails when referencing an old .env file": [ 597 ],
                                "Too many attempts error when working in the control panel": [ 594 ]
                            }
                        }
                    },
                    {
                        "id": 11,
                        "title": "v6.0.0-beta.9",
                        "url": "https://beta.getfusioncms.com/v600-beta9",
                        "content_text": null,
                        "date_published": "2020-07-15T12:51:02-07:00",
                        "attachments": [
                            {
                                "url": null,
                                "mime_type": "application/zip"
                            }
                        ]
                    },
                    {
                        "id": 10,
                        "title": "v6.0.0-beta.8",
                        "url": "https://beta.getfusioncms.com/v600-beta8",
                        "content_text": null,
                        "date_published": "2020-07-09T14:36:23-07:00",
                        "attachments": [
                            {
                                "url": "https://github.com/fusioncms/fusioncms/archive/v6.0.0-beta.8.zip",
                                "mime_type": "application/zip"
                            }
                        ]
                    }
                    */
                ]
            }
        },

        computed: {
            current() {
                return `v${this.$store.state.fusion.version}`
            },

            id() {
                return this.findBy('title', this.current).id
            }
        },

        methods: {
            findBy(key, value) {
                return _.find(this.items, (item) => item[key] == value)
            },

            upgrade(id) {
                this.version = this.findBy('id', id)
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.get('https://beta.getfusioncms.com/releases.json')
                .then((feed) => next(vm => vm.items = feed.data.items))
                .catch((error) => {})
        }
    }
</script>