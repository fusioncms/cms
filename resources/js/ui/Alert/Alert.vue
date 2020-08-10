<template>
    <div class="alert" :class="variantClass">
        <div class="alert__container container">
            <div class="alert__icon" v-if="icon">
                <fa-icon :icon="icon" class="fa-fw"></fa-icon> 
            </div>

            <div class="alert__text">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-alert',

        mixins: [
            require('../../mixins/variants').default
        ],

        props: {
            variant: String,
            icon: String
        },

        data() {
            return {
                variantClass: null
            }
        },

        mounted() {
            let variant = this.getVariant()

            if (variant) {
                this.variantClass = `alert--${variant}`;
            }
        }
    }
</script>
