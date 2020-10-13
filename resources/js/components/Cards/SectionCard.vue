<template>
    <ui-card v-if="grid" class="section-card">
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

    <ui-card v-else class="section-card">
        <ui-card-body>
            <div class="section-card__header">
                <h2 v-if="title" class="mb-0">{{ title }}</h2>

                <p v-if="description" class="section-card__text">
                    {{ description }}
                </p>
            </div>

            <div class="section-card__body">
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