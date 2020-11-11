<template>
    <ui-number-group
        :name="field.handle"
        :label="field.name"
        :help="field.help"
        :value="value"
        :placeholder="field.settings.placeholder"
        :step="field.settings.step"
        :decimals="field.settings.decimals"
        :min="Number(field.settings.min)"
        :max="Number(field.settings.max)"
        :has-error="hasError(field.handle)"
        :error-message="errorMessage(field.handle)"
        @input="$emit('input', Number($event))">
    </ui-number-group>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'number-fieldtype',

        mixins: [FieldMixin],
    }
</script>

