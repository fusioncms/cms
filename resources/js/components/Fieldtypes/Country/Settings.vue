<template>
    <div class="row">
        <div class="col w-1/2">
            <ui-select-group
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
                :has-error="errors.has('settings.multiple')"
                :error-message="errors.get('settings.multiple')">
            </ui-select-group>
        </div>

        <div class="col w-1/2">
            <ui-toggle
                name="settings.filterable"
                label="Filterable"
                help="Should this field offer a search filter?"
                :checked="!! settings.filterable"
                v-model="settings.filterable"
                :has-error="errors.has('settings.filterable')"
                :error-message="errors.get('settings.filterable')">
            </ui-toggle>
        </div>
    </div>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'country-fieldtype-settings',

        mixins: [fieldtype]
    }
</script>