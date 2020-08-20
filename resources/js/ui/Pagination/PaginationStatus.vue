<template>
    <div class="pagination-status">
        Page {{ current }} of {{ total }}
    </div>
</template>

<script>
    export default {
        name: 'p-pagination-status',

        props: {
            total: {
                required: true,
                type: Number,
            },
            value: {
                required: true,
                type: Number,
            }
        },

        data() {
            return {
                current: this.value
            }
        },

        watch: {
            value(value) {
                this.current = value
            }
        }
    }
</script>