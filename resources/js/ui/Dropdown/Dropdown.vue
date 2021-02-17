<template>
    <renderless-dropdown>
        <div class="dropdown"
            slot-scope="props"
            :class="{'dropdown--open': props.isOpen, 'dropdown--right': right, 'dropdown--up': up}"
            v-click-outside="props.close">
            <button :id="id" class="z-0" :class="[{ 'button': !borderless, 'button--icon': icon }, sizeClass]" @click="props.toggle" aria-haspopup="true" :aria-expanded="props.isOpen ? 'true' : 'false'">
                <slot></slot>
                <fa-icon v-if="! noArrow" icon="angle-down" class="dropdown__arrow"></fa-icon>
            </button>

            <div class="dropdown__menu" :aria-labelledby="id">
                <slot name="menu"></slot>
            </div>
        </div>
    </renderless-dropdown>
</template>

<script>
    export default {
        name: 'ui-dropdown',

        props: {
            id: {
                type: String,
                required: true
            },
            borderless: {
                type: Boolean,
                default: false,
                required: false,
            },
            noArrow: {
                type: Boolean,
                default: false,
                required: false,
            },
            icon: {
                type: Boolean,
                default: false,
                required: false,
            },
            right: {
                type: Boolean,
                default: false,
                required: false,
            },
            up: {
                type: Boolean,
                default: false,
                required: false,
            },
            size: String
        },

        data() {
            return {
                sizeClass: null,
                sizes: {
                    large: 'large',
                    small: 'small',
                    xsmall: 'xsmall'
                }
            }
        },

        methods: {
            getSize() {
                return _.has(this.sizes, this.size) ? _.get(this.sizes, this.size) : null
            }
        },

        mounted() {
            let size = this.getSize()

            if (size) {
                this.sizeClass = `button--${size}`
            }
        }
    }
</script>