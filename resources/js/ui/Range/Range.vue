<template>
    <div class="input-group">
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

        <ui-number
            class="w-1/3 rounded-none"
            :name="`${name}-value`"
            :disabled="disabled"
            :min="min"
            :max="max"
            v-model="model">
        </ui-number>
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
        }
    }
</script>
