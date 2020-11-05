<template>
    <div class="field-check field-check--radio" :class="{'field-check--inline': inline}">
        <input
            class="field-check__input field-check__input--radio"
            type="radio"
            :name="name"
            :id="id"
            :disabled="disabled"
            :required="required"
            :indeterminate.prop="indeterminate"
            :value="nativeValue"
            :true-value="trueValue"
            :false-value="falseValue"
            @click.stop
            v-model="model">
        <label :for="id" class="field-check__label">
            <slot></slot>
        </label>
    </div>
</template>


<script>
    export default {
        name: 'ui-radio',

        props: {
            name: {
                required: true,
                type: String,
            },
            id: {
                required: false
            },
            value: {
                required: false,
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
            },
            nativeValue: {
                type: [String, Number, Boolean, Function, Object, Array, Symbol]
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
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
                default: true
            },
            falseValue: {
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
                default: false
            },
            inline: {
                required: false,
                type: Boolean,
                default: false,
            }
        },

        computed: {
            model: {
                get() {
                    return this.value || ''
                },

                set(value) {
                    this.$emit('input', value)
                }
            }
        }
    }
</script>
