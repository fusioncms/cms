<template>
    <fieldset class="form-group" :class="{'form-group--danger': hasError, 'form-group--success': hasSuccess}">
        <ui-legend :label="label" v-if="hasMessage">
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
            inline: {
                required: false,
                type: Boolean,
                default: false,
            }
        }
    }
</script>
