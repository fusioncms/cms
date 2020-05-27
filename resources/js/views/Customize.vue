<template>
    <div class="preview">
        <div class="preview__controls" :class="{'w-0': !showControls}">
            <button @click="toggleControls" class="simple-button show-button p-3" :class="{'hidden': showControls, 'inline-block': !showControls}"><fa-icon :icon="['fas', 'caret-square-right']" class="fa-fw"></fa-icon> Show Controls</button>
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
                    <component
                        v-for="(setting, handle) in theme.settings"
                        v-model="theme.value[handle]"
                        :key="handle"
                        :is="setting.fieldtype + '-fieldtype'"
                        :field="{
                            name: setting.name,
                            handle: handle,
                            help: setting.help,
                            settings: {},
                        }"
                        class="mb-8"
                    ></component>
                </div>

                <div class="controls__footer">
                    <button @click="toggleControls" class="simple-button p-3"><fa-icon :icon="['fas', 'caret-square-left']" class="fa-fw"></fa-icon> Hide Controls</button>

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
            <div class="window" :class="'window--' + window">
                <p-frame
                    v-if="preview"
                    :src="preview"
                ></p-frame>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Theme Settings'
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
                return this.encode(JSON.stringify(this.theme.value))
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
            'theme.value': {
                handler: _.debounce(function(value) {
                    this.hasChanges = true;
                    this.reload()
                }, 500),

                deep: true
            },

            'url': {
                handler: _.debounce(function(value) {
                    this.reload()
                }, 500)
            },
        },

        methods: {
            submit() {
                this.theme.value['_method'] = 'PATCH'

                axios.post(`/api/themes/${this.theme.namespace}`, this.theme.value).then(() => {
                    toast('Theme settings have been updated', 'success')
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