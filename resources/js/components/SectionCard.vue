<template>
    <ui-card class="section-card">
        <ui-card-body class="card-col">
            <div class="section-card__header card-col__header">
                <h2 v-if="title" class="mb-0">{{ title }}</h2>

                <p v-if="description" class="section-card__text">
                    {{ description }}
                </p>
            </div>

            <div class="section-card__body card-col__body">
                <slot></slot>
            </div>
        </ui-card-body>
    </ui-card>
</template>

<script>
    export default {
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