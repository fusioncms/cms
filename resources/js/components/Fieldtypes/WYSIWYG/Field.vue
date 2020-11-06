<template>
    <ui-ckeditor-group
        :name="field.handle"
        :label="field.name"
        :help="field.help"
        :placeholder="field.settings.placeholder"
        :value="value"
        :has-error="hasError"
        :error-message="errorMessage"
        @input="$emit('input', $event)">
    </ui-ckeditor-group>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'

	export default {
		name: 'wysiwyg-fieldtype',

        mixins: [FieldMixin],
	}
</script>