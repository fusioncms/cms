<template>
    <input
        class="field field--input"
        :class="{'font-mono': monospaced, 'field--danger': hasError, 'field--success': hasSuccess}"
        :id="formattedId"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        :value="value"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
        :required="required"
        :aria-required="required" 
        :aria-describedby="message ? formattedId + '_message' : null"
        @input="$emit('input', $event.target.value)"
        v-model="value"/>
</template>

<script>
    export default {
        name: 'p-input',

        methods: {
            focus() {
                this.$el.focus()
            },
            
            blur() {
                this.$el.blur()
            }
        },

        mixins: [
            require('../../mixins/fields').default
        ],

        props: {
            name:  {
                required: true,
                type: String
            },
            id: String,
            placeholder: String,
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
