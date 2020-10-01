<template>
    <scrollactive class="sticky-sidebar" :offset="offset" :scrollOffset="60" :alwaysTrack="true" scrollContainerSelector=".layout-admin__wrapper" v-on:itemchanged="itemChanged">
        <slot></slot>
    </scrollactive>
</template>

<script>
    export default {
        name: 'sticky-sidebar',

        data () {
            return {
                offset: 60
            }
        },

        methods: {
            itemChanged(event, currentItem, lastActiveItem) {
                this.$emit('itemchanged', {'event': event, 'currentItem': currentItem, 'lastActiveItem': lastActiveItem})
            },
            
            getOffset() {
                return this.offset = document.querySelector('.layout-admin__wrapper').clientHeight / 2
            }
        },

        mounted() {
            this.getOffset()

            window.addEventListener('resize', () => {
                this.getOffset()
            })
        }
    }
</script>