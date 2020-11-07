<template>
    <div class="row">
        <div class="col md:w-1/2">
            <ui-toggle
                name="settings.multiple"
                label="Multi-select"
                help="Should this field allow multiple files to be uploaded?"
                :checked="!! settings.multiple"
                v-model="settings.multiple"
                :has-error="errors.has('settings.multiple')"
                :error-message="errors.get('settings.multiple')">
            </ui-toggle>
        </div>

        <div class="col md:w-1/2">
            <ui-input-group
                name="settings.accept"
                label="Acceptable file types"
                help="<a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers' target='_blank'>Unique file type specifiers</a>"
                v-model="settings.accept"
                autocomplete="off"
                :has-error="errors.has('settings.accept')"
                :error-message="errors.get('settings.accept')"
                monospaced>
            </ui-input-group>
        </div>

        <div class="col md:w-1/2">
            <ui-input-group
                name="settings.directory"
                label="Directory"
                help="Directory where files will be uploaded to within the File Manager."
                autocomplete="off"
                placeholder="uploads"
                v-model="settings.directory"
                :has-error="errors.has('settings.directory')"
                :error-message="errors.get('settings.directory')">
            </ui-input-group>
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
