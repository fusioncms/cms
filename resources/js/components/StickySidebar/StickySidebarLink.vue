<template>
    <a ref="link" class="sticky-sidebar__link scrollactive-item" @click="focusItem">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: 'sticky-sidebar-link',

        methods: {
            focusItem() {
                let link = this.$refs.link

                if (link.hash) {
                    let panel = document.querySelector(link.hash)
                    let focusable = panel.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
                    panel.focus()
                }
            }
        }
    }
</script>