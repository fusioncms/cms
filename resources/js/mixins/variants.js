export default {
    data() {
        return {
            variants: {
                primary: 'primary',
                secondary: 'secondary',
                info: 'info',
                success: 'success',
                warning: 'warning',
                danger: 'danger' 
            }
        }
    },

    methods: {
        getVariant() {
            return _.has(this.variants, this.variant) ? _.get(this.variants, this.variant) : null
        }
    }
}