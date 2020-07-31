<template>
    <fieldset class="form-group" :class="{'form-group--danger': hasError, 'form-group--success': hasSuccess}">
        <p-legend :text="label" v-if="hasMessage">
            <p-help-danger :text="errorMessage" v-if="errorMessage"></p-help-danger>
            <p-help-success :text="successMessage" v-if="successMessage"></p-help-success>
            <p-help :text="help" v-if="help"></p-help>
        </p-legend>

        <slot></slot>
    </fieldset>
</template>

<script>
    export default {
        name: 'p-radio-group',

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
