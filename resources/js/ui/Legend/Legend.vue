<template>
    <legend class="legend" :id="id">
        <span class="label" :class="{'label--required': required, 'sr-only': hideLabel}" v-if="label">{{ label }}</span>
        <slot></slot>
    </legend>
</template>

<script>
    export default {
        name: 'ui-legend',

        props: {
            label: String,
            hideLabel: {
                type: Boolean,
                required: false,
                default: false
            },
            id: {
                required: false,
                type: String
            },
            required: {
                required: false,
                type: Boolean,
                default: false
            }
        }
    }
</script>