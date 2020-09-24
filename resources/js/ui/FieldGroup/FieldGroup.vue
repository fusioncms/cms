<template>
    <div class="form-group" :class="{'form-group--danger': hasError, 'form-group--success': hasSuccess}">
        <slot name="top">
        </slot>

        <ui-label :fieldId="fieldId" :required="required" :hideLabel="hideLabel" v-if="label">{{ label }}</ui-label>
        
        <slot></slot>

        <div :id="fieldId + '_message'" class="form-group__messages" v-if="hasMessage">
            <ui-help-danger v-if="errorMessage" v-html="errorMessage"></ui-help-danger>
            <ui-help-success v-if="successMessage" v-html="successMessage"></ui-help-success>
            <ui-help v-if="help" v-html="help"></ui-help>
        </div>

        <slot name="bottom">
        </slot>
    </div>
</template>

<script>
    export default {
        name: 'ui-field-group',

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