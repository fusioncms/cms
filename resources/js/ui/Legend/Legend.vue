<template>
    <legend class="legend" :id="id">
        <span class="label" :class="{'label--required': required}" v-html="text"></span>
        <slot></slot>
    </legend>
</template>

<script>
    export default {
        name: 'p-legend',

        props: {
            field_name: String,
            text: String,
            help: String,
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