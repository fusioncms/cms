<template>
    <div class="row">
    	<div class="col w-1/2">
			<ui-number
				name="settings.limit"
				label="Limit"
				help="Limit the number of assets selected; leave blank if no limit is desired."
				placeholder=""
				v-model="settings.limit"
				:has-error="errors.has('settings.limit')"
           		:error-message="errors.get('settings.limit')">
			</ui-number>
		</div>

    	<div class="col w-1/2">

	    </div>
    </div>
</template>

<script>
	import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'form-fieldtype-settings',
        mixins: [fieldtype],
    }
</script>
