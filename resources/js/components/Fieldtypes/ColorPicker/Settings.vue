<template>
    <div class="row">
        <ui-select-group
            class="col w-full sm:w-1/2"
            name="settings.transparency"
            label="Transparency"
            help="Should this field allow transparency?"
            autocomplete="off"
            :options="[
                {
                    label: 'Yes',
                    value: 1
                },
                {
                    label: 'No',
                    value: 0
                }
            ]"
            :has-error="errors.has('settings.transparency')"
            :error-message="errors.get('settings.transparency')"
            v-model="settings.transparency">
        </ui-select-group>

        <ui-input-group
            class="col w-full sm:w-1/2"
            name="settings.default"
            label="Default"
            help="Default color value for this field."
            :has-error="errors.has('settings.default')"
            :error-message="errors.get('settings.default')"
            v-model="settings.default">
        </ui-input-group>
    </div>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'color-picker-fieldtype-settings',

        mixins: [fieldtype],
    }
</script>
