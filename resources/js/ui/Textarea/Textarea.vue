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
            :aria-describedby="hasMessage ? formattedId + '_message' : null"
            @input="$emit('input', $event.target.value)"></textarea>
    </p-field-group>
</template>

<script>
    export default {
        name: 'p-textarea',

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
            rows: {
                required: false,
                type: Number,
                default: 2,
            },
        },

        computed: {
            hasMessage() {
                return this.help || this.errorMessage || this.successMessage
            },

            formattedId() {
                return this.id ? this.id : this.name + '_field'
            }
        }
    }
</script>
