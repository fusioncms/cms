<template>
    <legend class="legend" :id="id">
        <span class="label" :class="{'label--required': required}" v-if="label">{{ label }}</span>
        <slot></slot>
    </legend>
</template>

<script>
    export default {
        name: 'p-legend',

        props: {
            label: String,
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