<template>
    <transition name="v-fade">
        <div :id="name" 
            class="modal-overlay" 
            role="dialog" 
            tab-index="-1"
            ref="modalContainer" 
            v-show="isActive" :style="{ zIndex: activeZIndex }" 
            @mousedown="clickedOutside"
            @keydown="checkKeyEvent">
            <div class="modal" :class="[variantClass, sizeClass, styles]" :style="{ zIndex: activeZIndex }" ref="stackable">
                <div class="modal__header" v-if="! noHeader">
                    <slot name="header" :data="data">
                        <div class="modal__title">
                            <span v-if="title" v-html="title"></span>
                        </div>

                        <a href="#" class="modal__close" @click.stop.prevent="close" v-if="! noCloseButton">
                            <fa-icon icon="times"></fa-icon>
                            <span class="sr-only">Close</span>
                        </a>
                    </slot>
                </div>

                <div class="modal__body" :class="{ 'modal__body--flush': flush }">
                    <slot :data="data"></slot>
                </div>

                <div class="modal__footer" v-if="! noFooter">
                    <slot name="footer" :data="data">
                        <ui-button @click.stop.prevent="close" variant="secondary">Close</ui-button>
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'ui-modal',

        mixins: [
            require('../../mixins/stackable').default,
            require('../../mixins/variants').default
        ],

        directives: {
            focus: {
                // directive definition
                inserted: function(el) {
                    el.focus();
                },
            },
        },

        data() {
            return {
                data: null,
                initialFocus: null,
                isActive: !!this.value,
                isLoaded: !!this.value,
                stackClass: 'modal--active',
                stackMinZIndex: 200,
                variantClass: null,
                sizeClass: null,
                sizes: {
                    xlarge: 'xlarge',
                    large: 'large',
                    small: 'small',
                    xsmall: 'xsmall' 
                }
            }
        },

        computed: {
            styles() {
                let styles = {}

                styles['modal--active'] = this.isActive

                return styles
            },
        },

        props: {
            name: {
                required: true,
                type: String,
            },
            title: String,
            variant: String,
            size: String,
            value: {
                type: Boolean,
                default: false,
            },
            noCloseButton: {
                type: Boolean,
                default: false,
            },
            noHeader: {
                type: Boolean,
                default: false,
            },
            noFooter: {
                required: false,
                type: Boolean,
                default: false,
            },
            noEscClose: {
                type: Boolean,
                default: false,
            },
            outsideClose: {
                type: Boolean,
                default: false,
            },
            flush: {
                type: Boolean,
                default: false,
            }
        },

        methods: {
            open() {
                this.isActive = true
                this.$bus.$emit('modal-opened', this.name)
                document.body.style.setProperty('overflow', 'hidden')

                setTimeout(() => {
                    this.isLoaded = true
                }, 100)
            },

            close() {
                this.isActive = false
                this.isLoaded = false

                this.$bus.$emit('modal-closed', this.name)

                this.$nextTick(function() {
                    if (! this.hasStack()) {
                        document.body.style.removeProperty('overflow')
                    }
                })
                
                if (this.initialFocus) {
                    this.initialFocus.focus();
                    this.initialFocus = null;
                }
            },

            toggle() {
                if (! this.isActive) {
                    this.open()
                } else {
                    this.close()
                }
            },

            checkKeyEvent(event) {
                const focusableList = this.$refs.modalContainer.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );

                if (focusableList.length < 2 && event.key === 'Tab') {
                    event.preventDefault();
                    return;
                }

                const last = focusableList.length - 1;

                if (event.key === 'Tab' && event.shiftKey === false && event.target === focusableList[last]) {
                    event.preventDefault();
                    focusableList[0].focus();
                } else if (event.key === 'Tab' && event.shiftKey === true && event.target === focusableList[0]) {
                    event.preventDefault();
                    focusableList[last].focus();
                }
            },

            listenForEscape() {
                const escapeHandler = (e) => {
                    if (e.key === 'Escape' && this.isActive && this.isActiveStack()) {
                        this.close()
                    }
                }

                if (! this.noEscClose) {
                    document.addEventListener('keydown', escapeHandler)

                    this.$once('hook:destroyed', () => {
                        document.removeEventListener('keydown', escapeHandler)
                    })
                }
            },

            listenForDirective() {
                this.$bus.$on('toggle-modal-' + this.name, (data) => {
                    this.toggle()
                    this.data = data.value
                    this.initialFocus = data.element
                })
            },

            clickedOutside() {
                if (this.outsideClose && this.isLoaded && this.isActiveStack()) {
                    this.close()
                }
            },

            getSize() {
                return _.has(this.sizes, this.size) ? _.get(this.sizes, this.size) : null
            }
        },

        watch: {
            value(val) {
                this.isActive = !!val
            },

            isActive(val) {
                !!val !== this.value && this.$emit('input', val)

                if (val) {
                    this.open()
                } else {
                    this.close()
                }
            },
        },

        created() {
            this.listenForEscape()
            this.listenForDirective()
            let variant = this.getVariant()
            let size = this.getSize()


            if (variant) {
                this.variantClass = `modal--${variant}`
            }

            if (size) {
                this.sizeClass = `modal--${size}`
            }
        },

        beforeMount () {
            this.isActive && this.open()
        }
    }
</script>