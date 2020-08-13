<template>
    <textarea
        class="field field--textarea"
        :class="{'font-mono': monospaced, 'field--danger': hasError, 'field--success': hasSuccess}"
        :id="formattedId"
        :name="name"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        :value="value"
        :rows="rows"
        :required="required"
        :aria-required="required" 
        :aria-describedby="message ? formattedId + '_message' : null"
        @input="$emit('input', $event.target.value)"></textarea>
</template>

<script>
    export default {
        name: 'p-textarea',

        mixins: [
            require('../../mixins/fields').default
        ],

        props: {
            name: {
                required: true,
                type: String
            },
            id: String,
            placeholder: String,
            label: String,
            help: String,
            value: {
                type: [String, Number],
                default: '',
            },
            required: {
                type: Boolean,
                default: false,
            },
            readonly: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            monospaced: {
                type: Boolean,
                default: false,
            },
            hasError: {
                required: false,
                type: Boolean,
                default: false,
            },
            hasSuccess: {
                required: false,
                type: Boolean,
                default: false,
            },
            message: {
                required: false,
                type: Boolean,
                defaut: false
            },
            rows: {
                required: false,
                type: Number,
                default: 2,
            },
        }
    }
</script>
