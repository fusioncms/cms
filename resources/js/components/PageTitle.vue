<template>
    <div class="page-title">
        <h1>
            <div v-if="icon" class="page-title__icon" aria-hidden="true">
                <fa-icon :icon="['fas', icon]" class="fa-fw"></fa-icon>
            </div>

            <span class="page-title__title">
                <slot></slot>
            </span>
        </h1>

        <mq-layout mq="lg+">
            <p v-if="subtitle" class="page-title__subtitle">{{ subtitle }}</p>
        </mq-layout>
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
