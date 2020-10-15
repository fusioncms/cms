<template>
    <ui-card class="section-card">
        <ui-card-body :class="{ 'card-col': grid }">
            <div class="section-card__header" :class="{ 'card-col__header': grid }">
                <h2 v-if="title" class="mb-0">{{ title }}</h2>

                <p v-if="description" class="section-card__text">
                    {{ description }}
                </p>
            </div>

            <div class="section-card__body" :class="{ 'card-col__body': grid }">
                <slot></slot>
            </div>
        </ui-card-body>
    </ui-card>
</template>

<script>
    export default {
        name: 'section-card',
        props: {
            title: {
                type: String
            },

            description: {
                type: String
            },

            grid: {
                type: Boolean,
                default: true
            }
        }
    }
</script>