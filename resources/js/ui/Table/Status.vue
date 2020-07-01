<template>
    <span class="text-gray-500" :class="{
        'text-success-500': value === true,
        'text-danger-500': value === false
    }">
        <fa-icon icon="circle" class="icon fa-xs"></fa-icon>
    </span>
</template>

<script>
    export default {
        name: 'p-status',

        props: {
            value: {
                required: false,
            }
        }
    }
</script>