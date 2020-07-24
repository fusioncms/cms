<template>
    <h1 class="app-title">
        <div v-if="icon" class="app-title__icon">
            <fa-icon :icon="['fas', icon]" class="fa-fw"></fa-icon>
        </div>

        <span class="app-title__text">
            <slot></slot>
        </span>
    </h1>
</template>

<script>
    export default {
        props: ['icon'],
    }
</script>
