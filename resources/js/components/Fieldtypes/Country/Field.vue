<template>
    <ui-select-group
        :name="field.handle"
        :label="field.name"
        :help="field.help"
        :options="options"
        placeholder="Select a country..."
        :filterable="!! field.settings.filterable"
        :multiple="multiple"
        :hasError="hasError(field.handle)"
        :errorMessage="errorMessage(field.handle)"
        v-model="model">
    </ui-select-group>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'country-fieldtype',

        mixins: [FieldMixin],

        computed: {
            options() {
                return Object.values(this.field.type.data)
            },

            multiple() {
                return this.field.settings.multiple == '1'
            }
        }
    }
</script>

