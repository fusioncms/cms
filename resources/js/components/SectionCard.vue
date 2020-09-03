<template>
    <p-card>
        <p-card-body>
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">{{ title }}</h3>

                    <p class="mt-1 text-sm leading-5 text-gray-500">
                        {{ description }}
                    </p>
                </div>

                <div class="mt-5 md:mt-0 md:col-span-2">
                    <slot></slot>
                </div>
            </div>
        </p-card-body>
    </p-card>
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