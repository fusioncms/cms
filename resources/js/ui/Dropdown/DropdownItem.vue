<template>
    <div class="dropdown__item" @click="onClick($event)">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ui-dropdown-item',

        methods: {
            onClick(event) {
                this.$emit('click', event)
            }
        }
    }
</script>
