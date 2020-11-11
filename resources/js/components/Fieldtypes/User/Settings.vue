<template>
    <div class="row">
        <ui-number-group
            class="col w-full sm:w-1/2"
            name="settings.limit"
            label="Limit"
            help="Limit the number of users selected; leave blank if no limit is desired."
            min="1"
            :has-error="errors.has('settings.limit')"
            :error-message="errors.get('settings.limit')"
            v-model="settings.limit">
        </ui-number-group>
    </div>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'user-fieldtype-settings',

        mixins: [fieldtype],
    }
</script>
