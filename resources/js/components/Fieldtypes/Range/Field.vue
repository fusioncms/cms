<template>
    <ui-range-group
        :name="field.handle"
        :label="field.name"
        :help="field.help"
        :value="value"
        :steps="field.settings.steps"
        :decimals="field.settings.decimals"
        :min="Number(field.settings.min)"
        :max="Number(field.settings.max)"
        :has-error="hasError"
        :error-message="errorMessage"
        @input="$emit('input', $event)">
    </ui-range-group>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'range-fieldtype',

        mixins: [FieldMixin],
    }
</script>