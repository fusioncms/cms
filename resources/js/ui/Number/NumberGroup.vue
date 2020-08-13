<template>
    <p-field-group
        :name="name"
        :fieldId="formattedId"
        :label="label"
        :hideLabel="hideLabel"
        :required="required"
        :hasError="hasError"
        :errorMessage="errorMessage"
        :hasSuccess="hasSuccess"
        :successMessage="successMessage"
        :help="help">
        <p-number
            :id="formattedId"
            :name="name"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :value="value"
            :autocomplete="autocomplete"
            :autofocus="autofocus"
            :required="required"
            :step="step"
            :min="min"
            :max="max"
            :decimals="decimals"
            :hasError="hasError"
            :hasSuccess="hasSuccess"
            :message="hasMessage">
        </p-number>
    </p-field-group>
</template>

<script>
    export default {
        name: 'p-number-group',

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
            label: String,
            hideLabel: {
                type: Boolean,
                required: false,
                default: false
            },
            help: String,
            value: {
                type: [String, Number],
                default: null,
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
            step: {
                type: Number,
                default: 1
            },
            decimals: {
                type: Number,
                default: 0
            },
            min: {
                type: [String, Number],
                default: -Infinity
            },
            max: {
                type: [String, Number],
                default: Infinity
            }
        }
    }
</script>
