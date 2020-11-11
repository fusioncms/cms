<template>
    <ui-select-group
        :name="field.handle"
        :label="field.name"
        :help="field.help"
        :options="options"
        :filterable="!! field.settings.filterable"
        :multiple="!! field.settings.multiple"
        :has-error="hasError(field.handle)"
        :error-message="errorMessage(field.handle)"
        v-model="model">
    </ui-select-group>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'select-fieldtype',

        mixins: [FieldMixin],

        computed: {
            options() {
                return this.field.settings.options
            }
        }
    }
</script>

