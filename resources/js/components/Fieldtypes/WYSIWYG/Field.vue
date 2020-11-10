<template>
    <ui-ckeditor-group
        :name="field.handle"
        :label="field.name"
        :help="field.help"
        :placeholder="field.settings.placeholder"
        :has-error="hasError(field.handle)"
        :error-message="errorMessage(field.handle)"
        v-model="model">
    </ui-ckeditor-group>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'

	export default {
		name: 'wysiwyg-fieldtype',

        mixins: [FieldMixin],
	}
</script>