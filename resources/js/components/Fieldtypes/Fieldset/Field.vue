<template>
    <div>
        <component v-for="field in fieldset.fields"
            :key="field.handle"
            :is="field.type.id + '-fieldtype'"
            :field="field"
            v-model="model[field.handle]">
        </component>
    </div>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'fieldset-fieldtype',

        mixins: [FieldMixin],

        data() {
            return {
                fieldset: {},
            }
        },

        created() {
            axios.get(`/api/fieldsets/${this.field.settings.fieldset}`)
                .then((response) => {
                    this.fieldset = response.data.data
                    
                    let fields = {}

                    _.forEach(this.fieldset.fields, (field) => {
                        fields[field.handle] = this.fieldset[field.handle] || null
                    })

                    this.model = fields
                })
        }
    }
</script>