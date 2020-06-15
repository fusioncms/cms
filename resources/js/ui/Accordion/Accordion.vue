<template>
    <dl class="accordion" role="presentation">
        <slot></slot>
    </dl>
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