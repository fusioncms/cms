<template>
    <div>
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
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'redactor-fieldtype-settings',

        mixins: [fieldtype],
    }
</script>
