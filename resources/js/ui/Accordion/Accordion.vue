<template>
    <div class="accordion" role="presentation">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'p-accordion',

        props: {
            multiple: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>