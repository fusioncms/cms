<template>
    <ui-card>
        <ui-card-body>
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <h2>{{ title }}</h2>

                    <p class="card__subtitle">
                        {{ description }}
                    </p>
                </div>

                <div class="mt-5 md:mt-0 md:col-span-2">
                    <slot></slot>
                </div>
            </div>
        </ui-card-body>
    </ui-card>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: false
            },

            description: {
                type: String,
                required: false
            }
        }
    }
</script>