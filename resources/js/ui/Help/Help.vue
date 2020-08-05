<template>
    <div class="help" :id="id">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'p-help',

        props: {
            text: String,
            id: {
                required: false,
                type: String
            },
        }
    }
</script>