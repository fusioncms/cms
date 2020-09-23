<template>
	<ui-field-group
        :name="name"
        :fieldId="formattedId"
        :label="label"
        :hideLabel="hideLabel"
        :required="required"
        :hasError="hasError"
        :errorMessage="errorMessage"
        :hasSuccess="hasSuccess"
        :successMessage="successMessage"
        :help="help">
        <ui-select
            :id="formattedId"
            :name="name"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :multiple="multiple"
            :options="options"
            :filterable="filterable"
            :showControls="showControls"
            :required="required"
            :hasError="hasError"
            :hasSuccess="hasSuccess"
            :message="hasMessage"
            :value="value"
            @input="onInput($event)">
        </ui-select>
	</ui-field-group>
</template>

<script>
    import Popper from 'popper.js'

    export default {
        name: 'ui-select-group',

        mixins: [
            require('../../mixins/fields').default
        ],

        props: {
        	name: {
                required: true,
                type: String
            },
            value: {
                required: false,
                default: null,
            },
            id: String,
            label: {
                required: false,
                type: String,
            },
            hideLabel: {
                type: Boolean,
                required: false,
                default: false
            },
            help: {
                required: false,
                type: String,
            },
            placeholder: {
                required: false,
                type: String,
                default: 'Please select an option...',
            },
            required: {
                type: Boolean,
                default: false,
            },
            readonly: {
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
            },
            options: {
                required: false,
                type: Array,
                default: () => {
                    return []
                },
            },
            filterable: {
                required: false,
                type: Boolean,
                default: false,
            },
            dark: {
                required: false,
                type: Boolean,
                default: false,
            },
            showControls: {
                required: false,
                type: Boolean,
                default: false,
            },
            multiple: {
                required: false,
                type: Boolean,
                default: false
            }
        },

        methods: {
            onInput(e) {
                this.$emit('input', e)
            }
        }
    }
</script>