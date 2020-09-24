<template>
    <div class="page-title">
        <h1>
            <div v-if="icon" class="page-title__icon">
                <fa-icon :icon="['fas', icon]" class="fa-fw"></fa-icon>
            </div>

            <span class="page-title__title">
                <slot></slot>
            </span>
        </h1>

        <p v-if="subtitle" class="page-title__subtitle">{{ subtitle }}</p>
    </div>
</template>

<script>
    export default {
        name: 'page-title',

        props: [
            'icon',
            'subtitle'
        ],
    }
</script>
