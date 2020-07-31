<template>
    <fieldset class="form-group" :class="{'form-group--danger': hasError, 'form-group--success': hasSuccess}">
        <p-legend :label="label" v-if="hasMessage">
            <p-help-danger v-if="errorMessage">{{ errorMessage }}</p-help-danger>
            <p-help-success v-if="successMessage">{{ successMessage }}</p-help-success>
            <p-help v-if="help">{{ help }}</p-help>
        </p-legend>

        <slot></slot>
    </fieldset>
</template>

<script>
    export default {
        name: 'p-fieldset',

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
        },

        computed: {
            hasMessage() {
                return this.help || this.errorMessage || this.successMessage
            }
        }
    }
</script>
