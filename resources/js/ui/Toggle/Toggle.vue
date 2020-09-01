<template>
    <ui-field-group
        :name="name"
        :fieldId="formattedId"
        :required="required"
        :hasError="hasError"
        :errorMessage="errorMessage"
        :hasSuccess="hasSuccess"
        :successMessage="successMessage"
        :help="help">

        <span class="toggle__wrap"
            :class="[computedValue ? 'toggle__wrap--checked' : 'toggle__wrap--unchecked']">
            <input
                class="field__toggle"
                type="checkbox"
                :name="name"
                :id="formattedId"
                :disabled="disabled"
                :required="required"
                :indeterminate.prop="indeterminate"
                :value="nativeValue"
                :true-value="trueValue"
                :false-value="falseValue"
                :aria-describedby="hasMessage ? formattedId + '_message' : null"
                v-model="computedValue"
            >
        </span>
    </ui-field-group>

    <!-- <div class="form__group">
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <span class="toggle__wrap"
            :class="[isChecked ? 'toggle__wrap--checked' : 'toggle__wrap--unchecked']">
            <input
                type="checkbox"
                class="toggle"
                :id="name"
                :name="name"
                :value="value"
                :checked="isChecked"
                :readonly="readonly"
                :disabled="disabled"
                :required="required"
                @click="toggle"
            >
        </span>

        <p
            class="form__help"
            v-if="help"
            v-html="help"
        ></p>
    </div> -->
</template>

<script>
    export default {
        name: 'ui-toggle',

        data() {
            return {
                newValue: this.value,
            }
        },

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

            value: {
                required: false,
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
            },

            nativeValue: {
                required: false,
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
            },

            disabled: {
                type: Boolean,
                default: false,
            },

            required: {
                type: Boolean,
                default: false,
            },

            indeterminate: {
                type: Boolean,
                default: false,
            },

            trueValue: {
                type: [String, Number, Boolean, Function, Object, Array],
                default: true
            },

            falseValue: {
                type: [String, Number, Boolean, Function, Object, Array],
                default: false
            },

            hasError: Boolean,
            hasSuccess: Boolean,
            errorMessage: String,
            successMessage: String,
        },

        computed: {
            computedValue: {
                get() {
                    return this.newValue
                },

                set(value) {
                    this.newValue = value
                    this.$emit('input', value)
                }
            },

            hasMessage() {
                return this.help || this.errorMessage || this.successMessage
            },

            formattedId() {
                return this.id ? this.id : this.name + '_field'
            }
        },

        watch: {
            value(value) {
                this.newValue = value
            }
        }
    }
</script>
