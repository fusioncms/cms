<template>
    <div>
        <ui-number-group
            :name="field.handle"
            :label="field.name"
            :help="field.help"
            :placeholder="field.settings.placeholder"
            :value="value"
            :steps="field.settings.steps"
            :decimals="field.settings.decimals"
            :min="Number(field.settings.min)"
            :max="Number(field.settings.max)">
        </ui-number-group>
    </div>
</template>

<script>
    export default {
        name: 'number-fieldtype',

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                type: [String, Number],
                required: false,
                default: null,
            },
        }
    }
</script>

