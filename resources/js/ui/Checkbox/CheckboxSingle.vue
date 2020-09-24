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
            :indeterminate="indeterminate"
            :native-value="nativeValue"
            @click.stop
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
            id: {
                required: false
            },
            label: String,
            help: String,
            value: {
                required: false,
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
            },
            nativeValue: {
                required: false,
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            required: {
                type: Boolean,
                default: false,
            },
            indeterminate: {
                type: Boolean,
                default: false,
            },
            trueValue: {
                type: [String, Number, Boolean, Function, Object, Array],
                default: true
            },
            falseValue: {
                type: [String, Number, Boolean, Function, Object, Array],
                default: false
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
