<template>
    <div class="field-number input-group">
        <input
            type="range"
            class="field-number__input field p-3"
            :ref="name"
            :class="{'field--danger': hasError, 'field--success': hasSuccess}"
            :id="id"
            :name="name"
            :min="min"
            :max="max"
            :step="step"
            :disabled="disabled"
            :autocomplete="autocomplete"
            :autofocus="autofocus"
            :required="required"
            :aria-required="required"
            :aria-describedby="message ? id + '_message' : null"
            v-model="model">

        <label class="field-number__button button">
            <span>{{ model }}</span>
        </label>

        <button class="field-number__button field-number__button--decrease button button--icon" @click.prevent="decrease">
            <slot name="decrease">
                <fa-icon icon="minus" class="fa-fw"></fa-icon>
                <span class="sr-only">Decrease</span>
            </slot>
        </button>

        <button class="field-number__button field-number__button--increase button button--icon" @click.prevent="increase">
            <slot name="increase">
                <fa-icon icon="plus" class="fa-fw"></fa-icon>
                <span class="sr-only">Increase</span>
            </slot>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'ui-range',

        computed: {
            model: {
                get() {
                    return this.value || 0
                },

                set(value) {
                    this.$emit('input', Number(value))
                }
            }
        },

        props: {
            name:  {
                required: true,
                type: String
            },
            id: String,
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            },
            step: {
                type: Number,
                default: 1
            },
            value: {
                type: Number,
                default: 0,
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
            }
        },

        methods: {
            increase() {
                this.model = Math.min(this.model+this.step, this.max)
            },

            decrease() {
                this.model = Math.max(this.model-this.step, this.min)
            },
        }
    }
</script>
