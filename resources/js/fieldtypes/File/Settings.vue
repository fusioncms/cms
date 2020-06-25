<template>
    <div class="row">
    	<div class="col w-1/2">
            <p-number
                name="settings.limit"
                label="Limit"
                help="Limit the number of file uploads; leave blank if no limit is desired."
                placeholder=""
                v-model="settings.limit"
                :has-error="errors.has('settings.limit')"
                :error-message="errors.get('settings.limit')">
            </p-number>
		</div>

    	<div class="col w-1/2">
			<p-input
                name="settings.directory"
                label="Directory"
                help="Directory where files will be uploaded to within the File Manager."
                autocomplete="off"
                placeholder="uploads"
                v-model="settings.directory"
                :has-error="errors.has('settings.directory')"
                :error-message="errors.get('settings.directory')">
            </p-input>
	    </div>
    </div>
</template>

<script>
	import fieldtype from '../../mixins/fieldtype'

    export default {
        name: 'file-fieldtype-settings',
        mixins: [fieldtype],
    }
</script>

