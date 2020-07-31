<template>
    <label class="label" :class="{'label--required': required}" :for="field_name" :id="id">
        <span class="label__text" v-html="text"></span>
    </label>
</template>

<script>
    export default {
        name: 'p-label',

        props: {
            field_name: String,
            text: String,
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