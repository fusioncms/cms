<template>
        <router-link v-if="to" 
            :to="to" 
            class="button"
            :class="[{ 'button--icon': icon, 'button--rounded': rounded, 'disabled': disabled }, variantClass, sizeClass]" 
            v-on="$listeners"
            v-bind="$attrs">
            <slot></slot>
        </router-link>

        <a v-else-if="href"
            :href="href"
            class="button"
            :class="[{ 'button--icon': icon, 'button--rounded': rounded, 'disabled': disabled }, variantClass, sizeClass]"
            v-on="$listeners"
            v-bind="$attrs">
            <slot></slot>
            
            <!-- <fa-icon v-if="props.isLoading" icon="circle-notch" class="ml-3 fa-fw fa-spin"></fa-icon> -->
        </a>

        <button v-else
            class="button"
            :class="[{ 'button--icon': icon, 'button--rounded': rounded, 'disabled': disabled }, variantClass, sizeClass]"
            :disabled="disabled"
            v-on="$listeners"
            v-bind="$attrs">
            <slot></slot>
            
            <!-- <fa-icon v-if="props.isLoading" icon="circle-notch" class="ml-3 fa-fw fa-spin"></fa-icon> -->
        </button>
</template>

<script>
    export default {
        name: 'ui-button',

        mixins: [
            require('../../mixins/variants').default
        ],

        props: {
            variant: String,
            size: String,
            icon: Boolean,
            rounded: Boolean,
            href: String,
            to: {
                type: Array|Object|String,
                default: ''
            },
            disabled: Boolean,
            value: {
                required: false,
                default: false,
            }
        },

        data() {
            return {
                variantClass: null,
                sizeClass: null,
                sizes: {
                    large: 'large',
                    small: 'small' 
                }
            }
        },

        methods: {
            getSize() {
                return _.has(this.sizes, this.size) ? _.get(this.sizes, this.size) : null
            }
        },

        mounted() {
            let variant = this.getVariant()
            let size = this.getSize()

            if (variant) {
                this.variantClass = `button--${variant}`
            }

            if (size) {
                this.sizeClass = `button--${size}`
            }
        }
    }
</script>
