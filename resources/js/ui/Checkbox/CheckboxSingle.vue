<template>
    <p-field-group
        :name="name"
        :required="required"
        :hasError="hasError"
        :errorMessage="errorMessage"
        :hasSuccess="hasSuccess"
        :successMessage="successMessage"
        :help="help">
        <p-checkbox
            :name="name"
            :id="id"
            :disabled="disabled"
            :required="required">
            <slot></slot>
        </p-checkbox>
    </p-field-group>
</template>

<script>
    export default {
        name: 'p-checkbox-single',

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
            required: {
                type: Boolean,
                default: false,
            },
            disabled: {
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
