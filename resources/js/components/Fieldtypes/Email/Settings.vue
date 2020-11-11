<template>
    <div class="row">
        <ui-input-group
            class="col w-full sm:w-1/2"
            name="settings.placeholder"
            label="Placeholder"
            help="Text that will appear inside the input element's content area when empty."
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
        name: 'email-fieldtype-settings',

        mixins: [fieldtype]
    }
</script>
