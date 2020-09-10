<template>
    <div class="help help--success" :id="id">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ui-help-success',

        props: {
            text: String,
            id: {
                required: false,
                type: String
            },
        }
    }
</script>