<template>
    <div class="accordion" role="presentation">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ui-accordion',

        props: {
            multiple: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>