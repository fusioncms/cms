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
            v-model="model">

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
                type: [String, Number],
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
                type: [String, Number],
                default: 1
            },
            decimals: {
                type: [String, Number],
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

        computed: {
            model: {
                get() {
                    return Number(this.value)
                },

                set(value) {
                    this.$emit('input', Number(value).toFixed(this.decimals))
                }
            },

            decreaseDisabled() {
                return this.model <= this.min
            },
            
            increaseDisabled() {
                return this.model >= this.max
            },
        },

        methods: {
            increase() {
                if (this.disabled || this.increaseDisabled) {
                    return
                }

                this.model = Math.min(this.model + Number(this.step), this.max)
            },

            decrease() {
                if (this.disabled || this.decreaseDisabled) {
                    return
                }

                this.model = Math.max(this.model - Number(this.step), this.min)
            }
        }
    }
</script>
