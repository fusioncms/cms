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
        <p-title
            :id="formattedId"
            :name="name"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :value="value"
            :autocomplete="autocomplete"
            :autofocus="autofocus"
            :required="required"
            :hasError="hasError"
            :hasSuccess="hasSuccess"
            :message="hasMessage"
            v-model="computedValue">
        </p-title>
    </p-field-group>
</template>

<script>
    export default {
        name: 'p-title-group',

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
            label: {
                type: String,
                default: 'Name',
            },
            hideLabel: {
                type: Boolean,
                required: false,
                default: false
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
        }
    }
</script>
