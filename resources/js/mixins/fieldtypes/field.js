export default {
    props: {
        field: {
            type: Object,
            required: true,
        },

        value: {
            required: false,
            default: null
        },

        errors: {
            type: Object,
            required: false,
            default: () => {}
        }
    },

    computed: {
        model: {
            get() {
                return this.value
            },

            set(value) {
                this.$emit('input', value)
            }
        }
    },

    methods: {
        hasError(handle) {
            return this.errors && this.errors.has(handle)
        },

        errorMessage(handle) {
            return this.hasError(handle) ? this.errors.get(handle) : ''
        }
    },
}