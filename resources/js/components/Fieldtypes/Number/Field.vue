<template>
    <ui-number-group
        :name="field.handle"
        :label="field.name"
        :help="field.help"
        :value="value"
        :placeholder="field.settings.placeholder"
        :step="Number(field.settings.options.find(option => option.value === 'step').label)"
        :decimals="field.settings.decimals"
        :min="Number(field.settings.options.find(option => option.value === 'min').label)"
        :max="Number(field.settings.options.find(option => option.value === 'max').label)"
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

