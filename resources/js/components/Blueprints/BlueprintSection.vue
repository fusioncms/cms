<template>
    <ui-card>
        <ui-card-header :title="name"></ui-card-header>
        <ui-card-body>
            <slot></slot>
        </ui-card-body>
    </ui-card>
</template>

<script>
    export default {
        name: 'blueprint-section',

        data() {
            return {
                isActive: this.active,
                isDragging: false,
                isDropzone: false,
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
                type: [Function,Boolean],
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

            reset() {
                this.isActive   = false
                this.isDragging = false
                this.isDropzone = false
            }
        }
    }
</script>
