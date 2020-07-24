<template>
    <button @click.prevent="onClick" class="nav-button">
        <fa-icon :icon="['fas', 'bars']"></fa-icon>
        <span class="sr-only">Navigation</span>
    </button>
</template>

<script>
    export default {
        name: 'nav-toggle',

        methods: {
            onClick() {
                bus().$emit('toggle-nav')
            }
        }
    }
</script>