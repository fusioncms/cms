<template>
    <div class="form-container">
        <div class="form-container__content">
            <slot></slot>
        </div>

        <div class="form-container__sidebar">
            <slot name="sidebar"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'form-container'
    }
</script>