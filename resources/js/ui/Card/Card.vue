<template>
    <div class="card" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ui-card',

        props: {
            classes: {
                required: false,
                default: ''
            },
        },
    }
</script>
