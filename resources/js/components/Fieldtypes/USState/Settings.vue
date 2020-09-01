<template>
    <div class="flex flex-wrap justify-between">
        <ui-select
            name="settings.multiple"
            label="Multi Select"
            help="Should this field allow multiple options to be selected?"
            autocomplete="off"
            v-model="settings.multiple"
            :options="[
                {
                    label: 'No',
                    value: 0,
                },
                {
                    label: 'Yes',
                    value: 1,
                }
            ]"
            class="mr-5 w-full lg:w-2/5"
            :has-error="errors.has('settings.multiple')"
            :error-message="errors.get('settings.multiple')">
        </ui-select>

        <ui-toggle
            name="settings.filterable"
            label="Filterable"
            help="Should this field offer a search filter?"
            :checked="!! settings.filterable"
            v-model="settings.filterable"
            class="mr-5 w-full lg:w-2/5"
            :has-error="errors.has('settings.filterable')"
            :error-message="errors.get('settings.filterable')">
        </ui-toggle>
    </div>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'us-state-fieldtype-settings',

        mixins: [fieldtype]
    }
</script>