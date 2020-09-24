<template>
    <input
        class="field field--title"
        :class="{'field--danger': hasError, 'field--success': hasSuccess}"
        :id="formattedId"
        :name="name"
        type="text"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        :value="value"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
        :required="required"
        :aria-required="required" 
        :aria-describedby="message ? formattedId + '_message' : null" 
        @input="$emit('input', $event.target.value)">
</template>

<script>
    export default {
        name: 'ui-title',

        mixins: [
            require('../../mixins/fields').default
        ],

        props: {
            name: {
                required: true,
                type: String
            },
            id: String,
            placeholder: {
                type: String,
                default: 'Name',
            },
            value: {
                type: [String, Number],
                default: '',
            },
            type: {
                type: String,
                default: 'text',
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
            autocomplete: {
                required: false,
                type: String,
                default: '',
            },
            autofocus: {
                required: false,
                type: Boolean,
                default: false,
            }
        }
    }
</script>
