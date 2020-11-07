<template>
    <div class="row">
        <div class="col md:w-1/2">
            <ui-select-group
                name="settings.display"
                label="Display"
                help="Choose whether to display options in a horizontal row or vertical column."
                autocomplete="off"
                :options="[
                    {
                        label: 'Column',
                        value: 'column',
                    },
                    {
                        label: 'Row',
                        value: 'row',
                    }
                ]"
                :has-error="errors.has('settings.display')"
                :error-message="errors.get('settings.display')"
                v-model="settings.display">
            </ui-select-group>
        </div>

        <div class="col w-full">
            <option-builder v-model="settings.options"></option-builder>
        </div>
    </div>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'
    import OptionBuilder from '@/components/OptionBuilder'

    export default {
        name: 'radio-fieldtype-settings',

        mixins: [fieldtype],

        components: {
            'option-builder': OptionBuilder,
        }
    }
</script>
