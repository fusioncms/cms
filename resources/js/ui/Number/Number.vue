<template>
    <div class="field-number input-group">
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
        :step="step"
        :min="min"
        :max="max"
        :aria-required="required"
        :aria-describedby="message ? formattedId + '_message' : null"
        v-model="inputValue"
        @blur="emitValue($event.target.value)"
        @keydown.esc="emitValue($event.target.value)"
        @keydown.enter="emitValue($event.target.value)"
        @keydown.up.prevent="increase"
        @keydown.down.prevent="decrease">

        <button v-if="!hideButtons" class="field-number__button field-number__button--decrease button button--icon" @click.prevent="decrease" :disabled="disabled || decreaseDisabled">
            <slot name="decrease">
                <fa-icon icon="minus" class="fa-fw"></fa-icon>
                <span class="sr-only">Decrease</span>
            </slot>
        </button>

        <button v-if="!hideButtons" class="field-number__button field-number__button--increase button button--icon" @click.prevent="increase" :disabled="disabled || increaseDisabled">
            <slot name="increase">
                <fa-icon icon="plus" class="fa-fw"></fa-icon>
                <span class="sr-only">Increase</span>
            </slot>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'ui-number',

        mixins: [
            require('../../mixins/fields').default
        ],

        props: {
            name:  {
                required: true,
                type: String
            },
            id: String,
            placeholder: String,
            value: {
                type: Number,
                default: 0
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
            hasSuccess: {
                required: false,
                type: Boolean,
                default: false,
            },
            message: {
                required: false,
                type: Boolean,
                defaut: false
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
            step: {
                type: Number,
                default: 1
            },
            decimals: {
                type: Number,
                default: 0
            },
            min: {
                type: [String, Number],
                default: -Infinity
            },
            max: {
                type: [String, Number],
                default: Infinity
            },
            hideButtons: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                inputValue: this.value,
                increaseDisabled: false,
                decreaseDisabled: false
            }
        },

        watch: {
            inputValue(value) {
                this.inputValue = value
            }
        },

        methods: {
            emitValue(newValue) {
                let oldValue = this.inputValue
                newValue = Number(newValue)

                if (oldValue === newValue) {
                    return
                }

                if (newValue <= this.min) {
                    newValue = this.min
                    this.decreaseDisabled = true
                }

                if (newValue >= this.max) {
                    newValue = this.max
                    this.increaseDisabled = true
                }

                this.inputValue = this.formatNumber(newValue, this.decimals)
                this.$emit('input', newValue)
            },

            formatNumber(num, decimals) {
                let regex = new RegExp('^-?\\d+(?:\.\\d{0,' + (decimals || -1) + '})?')

                if (num === null) {
                    num = 0
                }

                return Number(num.toString().match(regex)[0]).toFixed(decimals)
            },

            increase() {
                if (this.disabled || this.increaseDisabled) {
                    return
                }

                if (this.inputValue == null) {
                    this.inputValue == 0
                }

                let newValue = Number(this.inputValue) + Number(1 * this.step)
                this.decreaseDisabled = false

                this.emitValue(newValue)
            },

            decrease() {
                if (this.disabled || this.decreaseDisabled) {
                    return
                }

                if (this.inputValue == null) {
                    this.inputValue == 0
                }

                let newValue = Number(this.inputValue) + Number(-1 * this.step)
                this.increaseDisabled = false

                this.emitValue(newValue)
            }
        },

        mounted() {
            this.inputValue = this.value

            if (this.inputValue <= this.min) {
                this.decreaseDisabled = true
            }

            if (this.inputValue >= this.max) {
                this.increaseDisabled = true
            }
        }
    }
</script>
