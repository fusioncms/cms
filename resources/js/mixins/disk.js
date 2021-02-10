export default {
    props: {
        value: {
            type: Object,
            required: true,
        },

        errors: {
            type: Object,
            required: false,
            default: () => {}
        }
    },

    data() {
        return {
            init: {}
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

    created() {
        if (_.isEmpty(this.value)) {
            this.model = _.defaultTo(this.default, {})
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