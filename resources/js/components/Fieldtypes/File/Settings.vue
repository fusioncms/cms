<template>
    <div class="row">
    	<div class="col w-1/2">
            <ui-toggle
                name="settings.multiple"
                label="Multi-select"
                help="Should this field allow multiple files to be uploaded?"
                :checked="!! settings.multiple"
                v-model="settings.multiple"
                class="mr-5 w-full lg:w-2/5"
                :has-error="errors.has('settings.multiple')"
                :error-message="errors.get('settings.multiple')">
            </ui-toggle>

            <ui-input
                name="accept"
                label="Acceptable file types"
                help="<a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers' target='_blank'>Unique file type specifiers</a>"
                v-model="settings.accept"
                autocomplete="off"
                :has-error="errors.has('settings.accept')"
                :error-message="errors.get('settings.accept')"
                monospaced
            ></ui-input>
		</div>

    	<div class="col w-1/2">
			<ui-input
                name="settings.directory"
                label="Directory"
                help="Directory where files will be uploaded to within the File Manager."
                autocomplete="off"
                placeholder="uploads"
                v-model="settings.directory"
                :has-error="errors.has('settings.directory')"
                :error-message="errors.get('settings.directory')">
            </ui-input>
	    </div>
    </div>
</template>

<script>
	import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'file-fieldtype-settings',
        mixins: [fieldtype],
    }
</script>
