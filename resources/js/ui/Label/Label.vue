<template>
    <label :id="id" class="label" :class="{'label--required': required}" :for="fieldId">
        <slot></slot>
    </label>
</template>

<script>
    export default {
        name: 'p-label',

        props: {
            label: String,
            fieldId: {
                required: true,
                type: String
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