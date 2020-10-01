<template>
    <div>
        <ui-input-group
            name="settings.value"
            label="Value"
            help="Value that will be submitted for this field."
            autocomplete="off"
            v-model="settings.value"
            :has-error="errors.has('settings.value')"
            :error-message="errors.get('settings.value')">
        </ui-input-group>
    </div>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'hidden-fieldtype-settings',

        mixins: [fieldtype]
    }
</script>
