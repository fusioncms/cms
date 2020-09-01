<template>
    <ui-input
        :name="field.handle"
        :label="field.name"
        :help="field.help"
        :placeholder="field.settings.placeholder"
        :value="value"
        :has-error="hasError"
        :error-message="errorMessage"
        @input="$emit('input', $event)"
    ></ui-input>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'input-fieldtype',

        mixins: [FieldMixin],
    }
</script>
