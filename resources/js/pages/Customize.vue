<template>
    <div class="preview">
        <div class="preview__controls" :aria-hidden="!showControls" :class="{'w-0 border-0': !showControls}">
            <button @click="toggleControls" ref="show-controls" class="simple-button show-controls-button" :class="{'hidden': showControls, 'inline-block': !showControls}"><fa-icon :icon="['fas', 'caret-square-right']" class="fa-fw"></fa-icon> Show Controls</button>
            <div class="controls" :class="{'hidden': !showControls}">
                <div class="controls__header">
                    <router-link exact :to="{ name: 'dashboard' }" class="flex items-center px-3 py-2 border-r border-gray-300 leading-none">
                        <fa-icon :icon="['fas', 'times']" class="fa-fw"></fa-icon>
                    </router-link>

                    <div class="px-3 py-3">
                        <button type="submit" @click.prevent="submit" class="button button--primary button--small">Save</button>
                    </div>
                </div>

                <div class="controls__content">
                    <p-accordion :multiple="true">
                        <p-accordion-item v-for="(section, handle) in theme.options" :key="section.handle" :title="section.name">
                            <div class="p-3">
                                <p class="text-sm" v-if="section.description">{{ section.description }}</p>

                                <component
                                    v-for="(field, fieldHandle) in section.fields"
                                    v-model="theme.option[handle][fieldHandle]"
                                    :key="fieldHandle"
                                    :is="field.fieldtype + '-fieldtype'"
                                    :field="{
                                        name: field.name,
                                        handle: handle,
                                        help: field.help,
                                        settings: field.settings,
                                    }"
                                    class="mb-8"
                                ></component>
                            </div>
                        </p-accordion-item>
                    </p-accordion>
                </div>

                <div class="controls__footer">
                    <button @click="toggleControls" ref="hide-controls" class="simple-button hide-controls-button"><fa-icon :icon="['fas', 'caret-square-left']" class="fa-fw"></fa-icon> Hide Controls</button>

                    <div class="flex border-l border-gray-300">
                        <button @click="setWindow('desktop')" class="simple-button relative inline-flex items-center px-3 py-2 border-b-4 border-gray-300 hover:border-gray-500" :class="{'hover:border-primary-500 border-primary-500': isDesktop}">
                            <fa-icon :icon="['fas', 'desktop']" class="fa-fw"></fa-icon>
                        </button>

                        <button @click="setWindow('tablet')" class="simple-button relative inline-flex items-center px-3 py-2 border-b-4 border-gray-300 hover:border-gray-500" :class="{'hover:border-primary-500 border-primary-500': isTablet}">
                            <fa-icon :icon="['fas', 'tablet-alt']" class="fa-fw"></fa-icon>
                        </button>

                        <button @click="setWindow('mobile')" class="simple-button relative inline-flex items-center px-3 py-2 border-b-4 border-gray-300 hover:border-gray-500" :class="{'hover:border-primary-500 border-primary-500': isMobile}">
                            <fa-icon :icon="['fas', 'mobile-alt']" class="fa-fw"></fa-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="preview__window">

            <div v-if="preview" class="window" :class="'window--' + window"> -->
                <p-frame
                    :src="preview"
                ></p-frame>
            </div>

            <div v-else class="bg-white py-1 px-3 rounded-lg bg-gray-800 text-white uppercase font-bold text-sm tracking-wide">Loading...</div>
        </div>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Customize'
                }
            }
        },

        data() {
            return {
                theme: {},
                preview: '',
                url: '',
                hasChanges: false,
                window: 'desktop',
                showControls: true,
            }
        },

        computed: {
            hash() {
                return this.encode(JSON.stringify(this.theme.option))
            },

            previewUrl() {
                return this.baseUrl + this.url + '?preview=' + this.hash
            },

            baseUrl() {
                return '/'
            },

            isDesktop() {
                return this.window == 'desktop'
            },

            isTablet() {
                return this.window == 'tablet'
            },

            isMobile() {
                return this.window == 'mobile'
            },
        },

        watch: {
            'theme.option': {
                handler: _.debounce(function() {
                    this.hasChanges = true;
                    this.reload()
                }, 500),

                deep: true
            },

            'url': {
                handler: _.debounce(function() {
                    this.reload()
                }, 500)
            },
        },

        methods: {
            submit() {
                this.theme.option['_method'] = 'PATCH'

                axios.post(`/api/themes/${this.theme.namespace}`, this.theme.option).then(() => {
                    toast('Theme options have been updated', 'success')
                })
                .catch((error) => {
                    toast(error.response.data.message, 'failed')
                })
            },

            encode(string) {
                return encodeURIComponent(string).replace(/[!'()*]/g, escape);
            },

            reload() {
                this.preview = this.previewUrl
            },

            setWindow(device) {
                this.window = device
            },

            toggleControls() {
                this.showControls = !this.showControls

                this.$nextTick(function() {
                    if (this.showControls) {
                        this.$refs['hide-controls'].focus()
                    } else {
                        this.$refs['show-controls'].focus()
                    }
                })
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/theme'),
            ]).then(axios.spread(function (theme) {
                next(function(vm) {
                    vm.theme = theme.data.data
                })
            }))
        },
    }
</script>