<template>
    <div class="form-group" :class="{'form-group--danger': hasError, 'form-group--success': hasSuccess}">
        <p-label :text="label" :field_name="name" :required="required" v-if="label"></p-label>
        <slot></slot>

        <div :id="name + '_message'" class="form-group__messages" v-if="hasMessage">
            <p-help-danger v-if="errorMessage">{{ errorMessage }}</p-help-danger>
            <p-help-success v-if="successMessage">{{ successMessage }}</p-help-success>
            <p-help v-if="help">{{ help }}</p-help>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-field-group',

        props: {
            name: String,
            label: String,
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
        },

        computed: {
            hasMessage() {
                return this.help || this.errorMessage || this.successMessage
            }
        }
    }
</script>