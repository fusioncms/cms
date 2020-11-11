<template>
    <div class="row">
        <ui-input-group
            class="col w-full sm:w-1/2"
            name="settings.value"
            label="Value"
            help="Value that will be submitted for this field."
            autocomplete="off"
            :has-error="errors.has('settings.value')"
            :error-message="errors.get('settings.value')"
            v-model="settings.value">
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
