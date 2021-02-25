<template>
    <div class="field-check field-check--checkbox" :class="{'field-check--inline': inline}">
        <input
            class="field-check__input"
            type="checkbox"
            :name="name"
            :id="id"
            :disabled="disabled"
            :required="required"
            :checked="checked"
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
        name: 'ui-checkbox',

        mixins: [
            require('../../mixins/fields').default
        ],

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
            checked: {
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
            inline: {
                required: false,
                type: Boolean,
                default: false,
            }
        },

        computed: {
            model: {
                get() {
                    return _.defaultTo(this.value, [])
                },

                set(value) {
                    this.$emit('input', value)
                }
            }
        }
    }
</script>
