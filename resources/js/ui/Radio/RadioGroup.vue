<template>
    <ui-fieldset
        :label="label"
        :help="help"
        :hasError="hasError"
        :errorMessage="errorMessage"
        :hasSuccess="hasSuccess">
        <slot></slot>
    </ui-fieldset>
</template>

<script>
    export default {
        name: 'ui-radio-group',

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