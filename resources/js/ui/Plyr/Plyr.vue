<script>
    import Plyr from 'plyr'

    export default {
        name: 'ui-plyr',

        data() {
            return {
                player: {}
            }
        },

        props: {
            options: {
                type: Object,
                required: false,
                default() {
                    return {}
                }
            }
        },

        computed: {
            config() {
                const config = this.options

                if (!Object.prototype.hasOwnProperty.call(
                    this.options, 'hideYouTubeDOMError'
                )) {
                    config.hideYouTubeDOMError = true
                }

                return config
            }
        },

        mounted() {
            this.player = new Plyr(this.$el, this.config)

            console.log('ui-plyr')
        },

        beforeUnmount() {
            console.log('unmounting plyr...')
            try {
                this.player.destroy()
            } catch (e) {
                if (!(this.config.hideYouTubeDOMError && e.message === 'The YouTube player is not attached to the DOM.')) {
                    console.error(e)
                }
            }
        },

        render() {
            const slots = this.$slots.default

            return typeof slots === 'function' ? slots()[0] : slots
        }
    }
</script>