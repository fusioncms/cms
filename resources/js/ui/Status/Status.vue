<template>
    <p-tooltip>
        <template>
            <span :class="{ 'text-success-500': value === true, 'text-danger-500': value === false }">
                <fa-icon icon="circle" class="icon fa-xs"></fa-icon>
                <span v-if="value" class="sr-only">Active</span>
                <span v-if="!value" class="sr-only">Disabled</span>
            </span>
        </template>
        <template slot="content">
            <span v-if="value">Active</span>
            <span v-if="!value">Disabled</span>
        </template>
    </p-tooltip>
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