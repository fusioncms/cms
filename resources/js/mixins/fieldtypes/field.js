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
        hasError() {
            return this.errors &&
                   this.errors.has(this.field.handle)
        },

        errorMessage() {
            return this.errors ?
                this.errors.get(this.field.handle) : ''
        }
    }
}