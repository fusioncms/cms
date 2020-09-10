<template>
    <div class="layout-blank">
        <slot></slot>

        <ui-toast></ui-toast>
    </div>
</template>

<script>
    export default {
        name: 'blank-layout'
    }
</script>