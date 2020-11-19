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

        <ui-flatpickr
            :name="name"
            :id="id"
            v-model="model"
            :with-time="withTime"
        ></ui-flatpickr>

    </ui-field-group>
</template>

<script>
import Flatpickr from './Flatpickr.vue'

export default {
    name: 'ui-flatpickr-group',

    mixins: [
        require('../../mixins/fields').default
    ],

    components: { Flatpickr },

    props: {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        value: {
            required: false,
            default: null,
        },
        withTime: {
            type: Boolean,
            required: false,
            default: false,
        },
        label: {
            type: String,
            required: false,
        },
        hideLabel: {
            type: Boolean,
            required: false,
            default: false
        },
        help: {
            type: String,
            required: false,
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
    },

    computed: {
        model: {
            get() {
                return this.value
            },

            set(value) {
                this.$emit('input', value)
            }
        }
    },
}
</script>