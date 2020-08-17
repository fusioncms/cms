<template>
    <div class="tag">
        {{ value }}

        <button @click.stop="click">
            <fa-icon icon="times"></fa-icon>
            <span class="sr-only">{{ label }}</span>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'p-tag',

        props: {
            value: {
                type: String,
                required: true
            },
            label: {
                type: String,
                default: 'Remove'
            }
        },

        methods: {
            click() {
                this.$emit('click')
            }
        }
    }
</script>
