<template>
    <p-select
        name="fieldset"
        label="Fieldset"
        help="What fieldset would you like to attach?"
        :options="options"
        :has-error="hasError"
        :error-message="errorMessage"
        v-model="model">
    </p-select>
</template>

<script>
    export default {
        name: 'p-fieldset',

        data() {
            return {
                fieldsets: null,
                options: [{ label: 'None', value: null }]
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

        watch: {
            fieldsets(items) {
                let filtered = _.filter(items, (item) => item.hidden)

                _.each(filtered, (item) => {
                    this.options.push({ label: item.name, value: item.id })
                })
            },
        },

        props: {
            hasError: {
                required: false,
                type: Boolean,
                default: false,
            },
            errorMessage: {
                required: false,
                type: String,
                default: '',
            },
            value: {
                required: false,
                default: null,
            },
        },

        mounted() {
            axios.get('/api/fieldsets')
                .then((response) => this.fieldsets = response.data.data)
                .catch((error) => console.log(error))
        }
    }
</script>
