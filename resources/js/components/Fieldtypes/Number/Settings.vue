<template>
    <div class="row">
        <ui-number-group
            class="col w-full sm:w-1/2"
            name="settings.step"
            label="Step Size"
            help="Stepping interval"
            autocomplete="off"
            :min="0"
            :decimals="settings.decimals"
            :hide-buttons="false"
            :has-error="errors.has('settings.step')"
            :error-message="errors.get('settings.step')"
            v-model="settings.step">
        </ui-number-group>

        <ui-number-group
            class="col w-full sm:w-1/2"
            name="settings.decimals"
            label="Decimal Places"
            help="The number of decimal places this number will accept."
            autocomplete="off"
            :min="0"
            :max="6"
            :hide-buttons="false"
            :has-error="errors.has('settings.decimals')"
            :error-message="errors.get('settings.decimals')"
            v-model="settings.decimals">
        </ui-number-group>

        <ui-number-group
            class="col w-full sm:w-1/2"
            name="settings.min"
            label="Min Value"
            help="Minimum allowed value"
            autocomplete="off"
            :step="settings.step"
            :decimals="settings.decimals"
            :max="settings.max"
            :hide-buttons="false"
            :has-error="errors.has('settings.min')"
            :error-message="errors.get('settings.min')"
            v-model="settings.min">
        </ui-number-group>

        <ui-number-group
            class="col w-full sm:w-1/2"
            name="settings.max"
            label="Max Value"
            help="Maximum allowed value"
            autocomplete="off"
            :step="settings.step"
            :decimals="settings.decimals"
            :min="settings.min"
            :hide-buttons="false"
            :has-error="errors.has('settings.max')"
            :error-message="errors.get('settings.max')"
            v-model="settings.max">
        </ui-number-group>
    </div>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'number-fieldtype-settings',

        mixins: [fieldtype],
    }
</script>
