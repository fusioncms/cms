export default {
    props: {
        value: {
            type: Object,
            required: true,
        }
    },

    data() {
        return {
            default: {}
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
    }
}