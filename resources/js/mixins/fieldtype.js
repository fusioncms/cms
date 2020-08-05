export default {
    props: {
        value: {
            type: Object,
            required: true
        },
    },

    computed: {
        settings: {
            get() {
                return this.value.settings || {}
            },
            set(value) {
                this.$set(this.value.settings, value)
            }
        },

        errors() {
            return this.value.errors || {}
        }
    }
}