<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-5xl">Error 403</h1>
        <h3>Forbidden</h3>
        <p>You don't have permission to access the requested resource.</p>
        <ui-button @click="$router.go(-1)">Go Back</ui-button>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: '403'
                }
            }
        },
    }
</script>