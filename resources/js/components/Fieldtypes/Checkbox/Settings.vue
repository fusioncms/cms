<template>
    <div>
        <div class="row">
            <ui-select-group
                class="col w-full sm:w-1/2"
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
        
        <option-builder v-model="settings.options"></option-builder>
    </div>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'
    import OptionBuilder from '@/components/OptionBuilder'

    export default {
        name: 'checkbox-fieldtype-settings',

        mixins: [fieldtype],

        components: {
            'option-builder': OptionBuilder,
        }
    }
</script>
