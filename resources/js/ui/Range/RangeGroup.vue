<template>
    <ui-field-group
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
        <ui-range
            :id="formattedId"
            :name="name"
            :min="min"
            :max="max"
            :step="step"
            :disabled="disabled"
            :value="value"
            :autocomplete="autocomplete"
            :autofocus="autofocus"
            :required="required"
            :hasError="hasError"
            :hasSuccess="hasSuccess"
            :message="hasMessage"
            v-model="computedValue">
        </ui-range>
    </ui-field-group>
</template>

<script>
    export default {
        name: 'ui-range-group',

        mixins: [
            require('../../mixins/fields').default
        ],

        props: {
            name:  {
                required: true,
                type: String
            },
            id: String,
            min: Number,
            max: Number,
            step: Number,
            label: String,
            help: String,
            disabled: Boolean,
            value: Number,
            autocomplete: String,
            hideLabel: {
                type: Boolean,
                required: false,
                default: false
            },
            required: {
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
            autofocus: {
                required: false,
                type: Boolean,
                default: false,
            }
        }
    }
</script>