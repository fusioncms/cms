<template>
    <div class="form-group" :class="{'form-group--danger': hasError, 'form-group--success': hasSuccess}">
        <p-label :fieldId="fieldId" :required="required" :hideLabel="hideLabel" v-if="label">{{ label }}</p-label>
        <slot></slot>

        <div :id="fieldId + '_message'" class="form-group__messages" v-if="hasMessage">
            <p-help-danger v-if="errorMessage" v-html="errorMessage"></p-help-danger>
            <p-help-success v-if="successMessage" v-html="successMessage"></p-help-success>
            <p-help v-if="help" v-html="help"></p-help>
        </div>

        <slot name="bottom">
        </slot>
    </div>
</template>

<script>
    export default {
        name: 'p-field-group',

        mixins: [
            require('../../mixins/fields').default
        ],

        props: {
            name: String,
            label: String,
            hideLabel: {
                type: Boolean,
                required: false,
                default: false
            },
            fieldId: {
                required: true,
                type: String
            },
            help: String,
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
            }
        }
    }
</script>