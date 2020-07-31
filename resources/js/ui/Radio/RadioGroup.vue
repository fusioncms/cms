<template>
    <p-fieldset
        :label="label"
        :help="help"
        :hasError="hasError"
        :errorMessage="errorMessage"
        :hasSuccess="hasSuccess">
        <slot></slot>
    </p-fieldset>
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
            }
        }
    }
</script>