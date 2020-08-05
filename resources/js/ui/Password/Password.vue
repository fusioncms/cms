<template>
    <p-field-group
        :name="name"
        :fieldId="formattedId"
        :label="label"
        :required="required"
        :hasError="hasError"
        :errorMessage="errorMessage"
        :hasSuccess="hasSuccess"
        :successMessage="successMessage"
        :help="help">
        <input
            class="field field--input"
            :class="{'font-mono': monospaced, 'field--danger': hasError, 'field--success': hasSuccess}"
            :id="formattedId"
            :name="name"
            type="password"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :value="value"
            :autocomplete="autocomplete"
            :autofocus="autofocus"
            :required="required"
            :aria-required="required" 
            :aria-describedby="hasMessage ? formattedId + '_message' : null">
    </p-field-group>
</template>

<script>
    export default {
        name: 'p-password',

        data() {
            return {
                revealed: false,
                type: 'password',
            }
        },

        props: {
            name:  {
                required: true,
                type: String
            },
            id: String,
            placeholder: String,
            label: String,
            help: String,
            value: {
                type: String,
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
            neverShow: {
                required: false,
                type: Boolean,
                default: false,
            },
            showText: {
                required: false,
                type: String,
                default: 'Show Password',
            },
            hideText: {
                required: false,
                type: String,
                default: 'Hide Password',
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
            },

            formattedId() {
                return this.id ? this.id : this.name + '_field'
            }
        },

        methods: {
            toggleVisibility() {
                this.type = this.type === 'password' ? 'text' : 'password'
                this.revealed = ! this.revealed
            }
        }
    }
</script>
