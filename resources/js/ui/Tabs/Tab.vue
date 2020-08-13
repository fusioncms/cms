<template>
    <div v-show="isActive">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'p-tab',

        data() {
            return {
                isActive: false,
            }
        },

        props: {
            name: {
                type: String,
                required: true,
            },

            subtitle: {
                type: String,
                default: '',
            },

            remove: {
                type: Function,
                default: false,
            },

            active: {
                type: Boolean,
                required: false,
                default: false,
            },
        },

        computed: {
            hash() {
                return '#' + this.name.toLowerCase().replace(/ /g, '-')
            },
        },

        methods: {
            activate() {
                this.isActive = true
            },

            deactivate() {
                this.isActive = false
            },
        },

        mounted() {
            this.isActive = this.active
        }
    }
</script>
