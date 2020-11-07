<template>
    <div class="row">
        <div class="col md:w-1/2">
            <ui-select-group
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
        </div>

        <div class="col md:w-1/2">
            <ui-input-group
                name="settings.default"
                label="Default"
                help="Default color value for this field."
                :has-error="errors.has('settings.default')"
                :error-message="errors.get('settings.default')"
                v-model="settings.default">
            </ui-input-group>
        </div>
    </div>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'color-picker-fieldtype-settings',

        mixins: [fieldtype],
    }
</script>
