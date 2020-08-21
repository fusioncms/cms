<template>
    <renderless-button :loading="value">
        <button
            v-on="$listeners"
            slot-scope="props"
            :class="classes"
            v-bind="$attrs"
            class="button"
            :disabled="disabled || props.isLoading">
            
            <slot></slot>
            <fa-icon v-if="props.isLoading" icon="circle-notch" class="ml-3 fa-fw fa-spin"></fa-icon>
        </button>
    </renderless-button>
</template>

<script>
    export default {
        name: 'p-button',

        inheritAttrs: false,

        data() {
            return {
                loading: this.value,
            }
        },

        props: {
            classes: {
                required: false,
                default: ''
            },

            value: {
                required: false,
                default: false,
            },

            disabled: {
                type: Boolean,
                required: false,
                default: false
            }
        }
    }
</script>
