<template>
    <ui-select-group
        :name="field.handle"
        :label="field.name"
        :help="field.help"
        :options="options"
        placeholder="Select a form..."
        :filterable="true"
        :hasError="hasError(field.handle)"
        :errorMessage="errorMessage(field.handle)"
        v-model="model">
    </ui-select-group>
</template>

<script>
        import FieldMixin from '@/mixins/fieldtypes/field'

        export default {
        name: 'form-fieldtype',

        mixins: [FieldMixin],

        data() {
            return {
                options: []
            }
        },

        computed: {
            model: {
                get() {
                    if (_.isEmpty(this.value)) {
                        return null
                    }

                    return _.head(this.value).id
                },

                set(value) {
                    if (_.isEmpty(value)) {
                        this.$emit('input', null)
                    } else {
                        this.$emit('input', [ value ])
                    }
                }
            }
        },

        created() {
            axios.get('/api/forms').then((response) => {
                this.options = _.map(response.data.data, (item) => {
                    return {
                        label: item.name,
                        value: item.id
                    }
                })

                this.options.unshift({
                    label: 'None',
                    value: null
                })
            })
        }
    }
</script>