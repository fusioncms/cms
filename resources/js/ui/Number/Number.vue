<template>
    <p-field-group
        :name="name"
        :fieldId="formattedId"
        :label="label"
        :required="required"
        :hasError="hasError"
        :errorMessage="errorMessage"
        :hasSuccess="hasSuccess"
        :successMessage="successMessage"
        :help="help">
        <div class="field-number">
            <button class="field-number__button button button--icon" @click.prevent="decrease" :disabled="disabled">
                <slot name="decrease">
                    <fa-icon icon="minus" class="fa-fw"></fa-icon>
                    <span class="sr-only">Decrease</span>
                </slot>
            </button>
            <input
            class="field-number__input field"
            :class="{'font-mono': monospaced, 'field--danger': hasError, 'field--success': hasSuccess}"
            :id="formattedId"
            :name="name"
            type="number"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :autocomplete="autocomplete"
            :autofocus="autofocus"
            :required="required"
            :steps="steps"
            :min="min"
            :max="max"
            :aria-required="required" 
            :aria-describedby="hasMessage ? formattedId + '_message' : null"
            v-model="inputValue"
            @blur="emitValue($event.target.value)">
            <button class="field-number__button button button--icon" @click.prevent="increase" :disabled="disabled">
                <slot name="increase">
                    <fa-icon icon="plus" class="fa-fw"></fa-icon>
                    <span class="sr-only">Increase</span>
                </slot>
            </button>
        </div>
    </p-field-group>
</template>

<script>
    export default {
        name: 'p-number',

        props: {
            name:  {
                required: true,
                type: String
            },
            id: String,
            placeholder: String,
            label: String,
            help: String,
            value: {
                type: [String, Number],
                default: null,
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
            },
            steps: {
                required: false,
                type: [Number, String],
                default: 1
            },
            decimals: {
                required: false,
                type: [String, Number],
                default: 0
            },
            min: {
                required: false,
                type: [String, Number],
                default: ''
            },
            max: {
                required: false,
                type: [String, Number],
                default: ''
            }
        },

        data() {
            return {
                inputValue: null
            }
        },

        computed: {
            hasMessage() {
                return this.help || this.errorMessage || this.successMessage
            },

            formattedId() {
                return this.id ? this.id : this.name + '_field'
            }
        },

        methods: {
            emitValue(newValue) {
                if(newValue) {
                    if(this.min && newValue < this.min) {
                        newValue = this.min
                    }
                    if(this.max && newValue > this.max) {
                        newValue = this.max
                    }
                    newValue = this.formatNumber(newValue, this.decimals)
                } 
                this.inputValue = newValue
                this.$emit('input', newValue)
            },

            formatNumber(num, decimals) {
                let regex = new RegExp('^-?\\d+(?:\.\\d{0,' + (decimals || -1) + '})?')
                return Number(num.toString().match(regex)[0]).toFixed(decimals)
            },

            increase() {
                this.emitValue((Number(this.inputValue) + Number(this.steps)).toFixed(this.decimals))
            },

            decrease() {
                this.emitValue((Number(this.inputValue) - Number(this.steps)).toFixed(this.decimals))
            }
        },

        mounted() {
            this.inputValue = this.value
        }
    }
</script>
