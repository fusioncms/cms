<template>
    <div class="badge" :class="variantClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ui-badge',

        mixins: [
            require('../../mixins/variants').default
        ],

        props: {
            variant: String
        },

        data() {
            return {
                variantClass: null
            }
        },

        mounted() {
            let variant = this.getVariant()

            if (variant) {
                this.variantClass = `badge--${variant}`
            }
        }
    }
</script>