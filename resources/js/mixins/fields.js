export default {
    computed: {
        hasMessage() {
            let help = this.help ? this.help.length : 0;
            let error = this.errorMessage ? this.errorMessage.length : 0;
            let success = this.successMessage ? this.successMessage.length : 0;

            return (help > 0 || error > 0 || success > 0)
        },

        formattedId() {
            return this.id ? this.id : this.name + '-field'
        },

        computedValue: {
            get() {
                return this.checked || this.value
            },

            set(value) {
                this.model = value
                this.$emit('input', value)
            }
        }
    },

    methods: {
        handleInput (event) {
            this.$emit('input', event.target.value)
        }
    }
}