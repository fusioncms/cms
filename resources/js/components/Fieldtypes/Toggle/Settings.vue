<template>
    <div class="row">
        <ui-toggle
            class="col w-full sm:w-1/2"
            name="settings.default"
            label="Default"
            help="What would you like the default value to be?"
            :has-error="errors.has('settings.default')"
            :error-message="errors.get('settings.default')"
            v-model="settings.default">
        </ui-toggle>
    </div>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'toggle-fieldtype-settings',

        mixins: [fieldtype],
    }
</script>
