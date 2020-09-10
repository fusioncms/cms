<template>
    <div class="row">
        <ui-number-group
            class="col w-full sm:w-1/2"
            name="settings.decimals"
            label="Decimal Places"
            help="The number of decimal places this number will accept."
            autocomplete="off"
            v-model="settings.decimals"
            min="0"
            max="6"
            :hide-buttons="true"
            :has-error="errors.has('settings.decimals')"
            :error-message="errors.get('settings.decimals')">
        </ui-number-group>

        <ui-number-group
            class="col w-full sm:w-1/2"
            name="settings.steps"
            label="Step Size"
            help="Step or increment size of the number"
            autocomplete="off"
            v-model="settings.steps"
            min="0"
            :hide-buttons="true"
            :steps="settings.decimals | pad"
            :decimals="settings.decimals"
            :has-error="errors.has('settings.steps')"
            :error-message="errors.get('settings.steps')">
        </ui-number-group>

        <ui-number-group
            class="col w-full sm:w-1/2"
            name="settings.min"
            label="Min Value"
            help="Minimum allowed value"
            autocomplete="off"
            v-model="settings.min"
            :hide-buttons="true"
            :decimals="settings.decimals"
            :steps="settings.steps"
            :has-error="errors.has('settings.min')"
            :error-message="errors.get('settings.min')">
        </ui-number-group>

        <ui-number-group
            class="col w-full sm:w-1/2"
            name="settings.max"
            label="Max Value"
            help="Maximum allowed value"
            autocomplete="off"
            v-model="settings.max"
            :hide-buttons="true"
            :decimals="settings.decimals"
            :steps="settings.steps"
            :has-error="errors.has('settings.max')"
            :error-message="errors.get('settings.max')">
        </ui-number-group>
    </div>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'number-fieldtype-settings',

        mixins: [fieldtype],

        filters: {
            pad(length) {
                return _.padStart('1', length, '0')
            }
        }
    }
</script>
