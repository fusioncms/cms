<template>
    <div class="h-full flex-1">
        <slot></slot>

        <p-toast></p-toast>
    </div>
</template>

<script>
    export default {
        name: 'blank-layout'
    }
</script>