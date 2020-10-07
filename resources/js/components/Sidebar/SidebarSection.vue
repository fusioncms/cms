<template>
    <ui-card class="section-card">
        <ui-card-header v-if="title" :title="title"></ui-card-header>
        
        <ui-card-body>
            <p v-if="description" class="section-card__text mb-6">
                {{ description }}
            </p>

            <slot></slot>
        </ui-card-body>
    </ui-card>
</template>

<script>
    export default {
        name: 'sidebar-section',

        props: {
            title: {
                type: String
            },
            description: {
                type: String
            }
        }
    }
</script>