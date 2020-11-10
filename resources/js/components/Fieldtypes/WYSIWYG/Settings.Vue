<template>
    <div class="row">
        <div class="col md:w-1/2">
            <ui-input-group
                name="settings.placeholder"
                label="Placeholder"
                help="Text that will appear inside the WYSIWYG element's content area when empty."
                autocomplete="off"
                v-model="settings.placeholder"
                :has-error="errors.has('settings.placeholder')"
                :error-message="errors.get('settings.placeholder')">
            </ui-input-group>
        </div>
    </div>
</template>

<script>
	import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'wysiwyg-fieldtype-settings',

        mixins: [fieldtype],
    }
</script>
