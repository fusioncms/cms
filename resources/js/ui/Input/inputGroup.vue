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
        <ui-input
            :id="formattedId"
            :name="name"
            :type="type"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :autocomplete="autocomplete"
            :autofocus="autofocus"
            :required="required"
            :monospaced="monospaced"
            :hasError="hasError"
            :hasSuccess="hasSuccess"
            :message="hasMessage"
            v-model="model">
        </ui-input>
    </ui-field-group>
</template>

<script>
    export default {
        name: 'ui-input-group',

        mixins: [
            require('../../mixins/fields').default
        ],

        computed: {
            model: {
                get() {
                    return this.value || ''
                },

                set(value) {
                    this.$emit('input', value)
                }
            }
        },

        props: {
            name:  {
                required: true,
                type: String
            },
            id: String,
            placeholder: String,
            label: String,
            hideLabel: {
                type: Boolean,
                required: false,
                default: false
            },
            value: {
                type: [String, Number],
                default: '',
            },
            type: {
                type: String,
                default: 'text',
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
            monospaced: {
                type: Boolean,
                default: false,
            },
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
            autocomplete: {
                required: false,
                type: String,
                default: '',
            },
            autofocus: {
                required: false,
                type: Boolean,
                default: false,
            }
        }
    }
</script>