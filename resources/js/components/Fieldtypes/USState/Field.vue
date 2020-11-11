<template>
    <ui-select-group
        :name="field.handle"
        :label="field.name"
        :help="field.help"
        :options="options"
        placeholder="Select a US state..."
        :filterable="!! field.settings.filterable"
        :multiple="!! field.settings.multiple"
        :hasError="hasError(field.handle)"
        :errorMessage="errorMessage(field.handle)"
        v-model="model">
    </ui-select-group>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'us-state-fieldtype',

        mixins: [FieldMixin],

        computed: {
            options() {
                return Object.values(this.field.type.data)
            }
        }
    }
</script>

