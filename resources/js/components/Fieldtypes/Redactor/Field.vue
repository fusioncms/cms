<template>
    <redactor
        :name="field.handle"
        :label="field.name"
        :help="field.help"
        :placeholder="field.settings.placeholder"
        :value="value"
        @input="$emit('input', $event)"
        :config="{
            plugins: ['table']
        }"
    ></redactor>
</template>

<script>
    import '@/../vendor/redactor/_plugins/table/table.js'

    export default {
        name: 'redactor-fieldtype',

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
