<template>
    <h1 class="page-title">
        <div v-if="icon" class="page-title__icon">
            <fa-icon :icon="['fas', icon]" class="fa-fw"></fa-icon>
        </div>

        <span class="page-title__text">
            <slot></slot>
        </span>
    </h1>
</template>

<script>
    export default {
        name: 'page-title',

        props: ['icon'],
    }
</script>
