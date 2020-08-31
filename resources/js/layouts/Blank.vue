<template>
    <div class="layout-blank">
        <slot></slot>

        <p-toast></p-toast>
    </div>
</template>

<script>
    export default {
        name: 'blank-layout'
    }
</script>