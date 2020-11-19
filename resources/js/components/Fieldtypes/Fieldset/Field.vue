<template>
    <ui-fieldset
        :label="field.name"
        :help="field.help">
        
        <component v-for="field in fieldset.fields"
            :key="field.handle"
            :is="field.type.id + '-fieldtype'"
            :field="field"
            :errors="fieldErrors"
            v-model="model[field.handle]">
        </component>
    </ui-fieldset>
</template>

<script>
    import Errors     from '@/services/Errors'
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'fieldset-fieldtype',

        mixins: [FieldMixin],

        data() {
            return {
                fieldset: {},
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
                .then(response => this.fieldset = response.data.data)
        }
    }
</script>