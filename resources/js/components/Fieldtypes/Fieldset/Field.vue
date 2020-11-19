<template>
    <div>
        <component v-for="field in fields"
            :key="field.handle"
            :is="field.type.id + '-fieldtype'"
            :field="field"
            :errors="fieldErrors"
            v-model="model[field.handle]">
        </component>
    </div>
</template>

<script>
    import Errors     from '@/services/Errors'
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'fieldset-fieldtype',

        mixins: [FieldMixin],

        data() {
            return {
                fields: {},
            }
        },

        computed: {
            fieldErrors() {
                let errors = {}

                for (const [key, value] of Object.entries(this.errors.errors)) {
                    errors[key.replace(`${this.field.handle}.`, '')] = value
                }

                return new Errors(errors)
            }
        },

        watch: {
            model: {
                deep: true,
                handler(value) {
                    this.$emit('input', value)
                }
            }
        },

        created() {
            axios.get(`/api/fieldsets/${this.field.settings.fieldset}`)
                .then(response => this.fields = response.data.data.fields)
        }
    }
</script>