<template>
    <div>
        <ui-textarea-group
            :name="field.handle"
            :label="field.name"
            :help="field.help"
            :placeholder="field.settings.placeholder"
            :value="value"
            @input="$emit('input', $event)"
        ></ui-textarea-group>
    </div>
</template>

<script>
    export default {
        name: 'textarea-fieldtype',

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: '',
            },
        },
    }
</script>

