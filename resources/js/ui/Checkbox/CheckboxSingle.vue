<template>
    <ui-field-group
        :name="name"
        :fieldId="formattedId"
        :required="required"
        :hasError="hasError"
        :errorMessage="errorMessage"
        :hasSuccess="hasSuccess"
        :successMessage="successMessage"
        :help="help">
        <ui-checkbox
            :name="name"
            :id="id + '_field'"
            :disabled="disabled"
            :required="required"
            :native-value="value"
            :indeterminate="indeterminate"
            v-model="computedValue">
            <slot></slot>
        </ui-checkbox>
    </ui-field-group>
</template>

<script>
    export default {
        name: 'ui-checkbox-single',

        mixins: [
            require('../../mixins/fields').default
        ],

        props: {
            name: {
                required: true,
                type: String,
            },
            label: String,
            help: String,
            id: {
                required: false
            },
            value: {
                required: false,
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
            },
            required: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            indeterminate: {
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
            }
        }
    }
</script>
