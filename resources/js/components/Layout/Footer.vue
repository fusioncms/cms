<template>
    <footer class="page-footer mt-auto">
        <p class="mb-0">Built with <fa-icon :icon="['fas', 'heart']" class="text-primary-500"></fa-icon> & <fa-icon :icon="['fas', 'coffee']" class="text-gray-900"></fa-icon> by the efelle team</p>
        <p class="mb-0"><span v-if="environment == 'local'">Local Dev Environment - </span>{{ version }}</p>
    </footer>
</template>

<script>
    export default {
        name: 'layout-footer',

        props: {
            environment: {
                type: String,
                default: 'production'
            },
            version: {
                type: String
            }
        },
    }
</script>