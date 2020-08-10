<template>
    <div class="card__header">
        <h2 v-if="title" class="card__title">{{ title }}</h2>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'p-card-header',

        props: {
            title: String
        }
    }
</script>