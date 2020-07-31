<template>
    <p-field-group
        :name="name"
        :label="label"
        :required="required"
        :hasError="hasError"
        :errorMessage="errorMessage"
        :hasSuccess="hasSuccess"
        :successMessage="successMessage"
        :help="help">
        <input
            class="field field--title"
            :class="{'field--danger': hasError, 'field--success': hasSuccess}"
            type="text"
            :id="id"
            :name="name"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :value="value"
            :autocomplete="autocomplete"
            :autofocus="autofocus"
            :required="required"
            :aria-required="required" 
            :aria-describedby="hasMessage ? name + '_message' : null" 
            @input="$emit('input', $event.target.value)">
    </p-field-group>
</template>

<script>
    export default {
        name: 'p-title',

        props: {
            name: String,
            id: String,
            placeholder: {
                type: String,
                default: 'Name',
            },
            label: {
                type: String,
                default: 'Name',
            },
            help: String,
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
            errorMessage: {
                required: false,
                type: String,
                default: '',
            },
            hasSuccess: {
                required: false,
                type: Boolean,
                default: false,
            },
            successMessage: {
                required: false,
                type: String,
                default: '',
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
            },
        },

        computed: {
            hasMessage() {
                return this.help || this.errorMessage || this.successMessage
            }
        }
    }
</script>
