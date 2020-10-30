<template>
    <div class="form__group">
        <label
            class="form__label"
            :for="field.handle"
            v-html="field.name">
        </label>

        <textarea
            :ref="field.handle"
            :name="field.handle"
            cols="30"
            rows="12"
            v-model="value"
            autofocus>
        </textarea>
    </div>
</template>

<script>
    import EasyMDE from 'easymde'
    import marked from 'marked'

    export default {
        name: 'markdown-fieldtype',

        data() {
            return {
                config: {},
                easymde: null,
                valueUpdated: false,
            }
        },

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: '',
            },

            // config: {
            //     required: false,
            //     type: Object,
            //     default() {
            //         return {}
            //     }
            // }
        },

        computed: {
            el() {
                return this.$refs[this.field.handle]
            },
        },

        methods: {
            initialize() {
                const config = Object.assign({
                    element: this.el,
                    initialValue: this.value,
                    previewRender: this.previewRender,
                    renderingConfig: {
                        codeSyntaxHighlighting: true,
                    },
                }, this.config)

                if (config.initialValue) {
                    this.$emit('input', config.initialValue)
                }

                marked.setOptions({
                    sanitize: false
                })

                this.easymde = new EasyMDE(config)

                this.bindEvents()

                this.$nextTick(() => {
                    this.$emit('initialized', this.easymde)
                })
            },

            bindEvents() {
                this.easymde.codemirror.on('change', (instance, change) => {
                    if (change.origin === 'setValue') {
                        return
                    }

                    const value = this.easymde.value()

                    this.handleInput(value)
                })

                this.easymde.codemirror.on('blur', () => {
                    const value = this.easymde.value()

                    this.handleBlur(value)
                })
            },

            handleInput(value) {
                this.valueUpdated = true
                this.$emit('input', value)
            },

            handleBlur(value) {
                this.valueUpdated = true
                this.$emit('blur', value)
            }
        },

        watch: {
            value(value) {
                if (this.valueUpdated) {
                    this.valueUpdated = false
                } else {
                    this.easymde.value(value)
                }
            }
        },

        mounted() {
            this.initialize()
        },

        deactivated() {
            const editor = this.easymde

            if (! editor) return

            const isFullscreen = editor.codemirror.getOpen('fullScreen')

            if (isFullscreen) {
                editor.toggleFullScreen()
            }
        },

        destroyed() {
            this.easymde = null
        }
    }
</script>