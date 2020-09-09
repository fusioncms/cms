<template>
    <div>
		<ui-number-group
			name="settings.limit"
			label="Limit"
			help="Limit the number of assets selected; leave blank if no limit is desired."
			:min="1"
			:has-error="errors.has('settings.limit')"
			:error-message="errors.get('settings.limit')">
		</ui-number-group>
    </div>
</template>

<script>
	import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'form-fieldtype-settings',
        mixins: [fieldtype],
    }
</script>
