<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-5xl">Error 404</h1>
        <h3>Page Not Found</h3>
        <ui-button :to="{ name: 'dashboard' }">Back to Dashboard</ui-button>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: '404'
                }
            }
        },
    }
</script>