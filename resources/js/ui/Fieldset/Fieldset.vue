<template>
    <fieldset class="form-group" :class="{'form-group--danger': hasError, 'form-group--success': hasSuccess}">
        <ui-legend :label="label" v-if="hasMessage || label">
            <ui-help-danger v-if="errorMessage" v-html="errorMessage"></ui-help-danger>
            <ui-help-success v-if="successMessage" v-html="successMessage"></ui-help-success>
            <ui-help v-if="help" v-html="help"></ui-help>
        </ui-legend>

        <slot></slot>
    </fieldset>
</template>

<script>
    export default {
        name: 'ui-fieldset',

        mixins: [
            require('../../mixins/fields').default
        ],

        props: {
            label: String,
            help: String,
            hasError: {
                type: Boolean,
                default: false,
            },
            errorMessage: {
                type: String,
                default: '',
            },
            hasSuccess: {
                type: Boolean,
                default: false,
            },
            successMessage: {
                type: String,
                default: ''
            },
            inline: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
