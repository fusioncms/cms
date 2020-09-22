<template>
    <li class="nav-menu__item" v-if="shouldShow">
        <span v-if="divider" class="nav-menu__heading"><slot></slot></span>

        <router-link v-if="! hasChildren && ! divider" exact :to="to" class="nav-menu__link" @click.native="onClick($event)">
            <span v-if="icon" class="link-icon" aria-hidden="true">
                <fa-icon :icon="['fas', icon]" class="fa-fw fa-lg"></fa-icon>
            </span>

            <slot></slot>
        </router-link>

        <a v-if="hasChildren && ! divider" href="#" @click.prevent="accordionToggle($event)" class="nav-menu__link nav-menu__link--parent">
            <span v-if="icon" class="link-icon" aria-hidden="true">
                <fa-icon :icon="['fas', icon]" class="fa-fw fa-lg"></fa-icon>
            </span>

            <slot></slot>

            <span v-if="hasChildren" class="toggle-icon" aria-hidden="true">
                <plus-icon v-if="! showChildren" size="1.2x"></plus-icon>
                <minus-icon v-else size="1.2x"></minus-icon>
            </span>
        </a>

        <ul class="nav-menu nav-menu--nested" v-if="hasChildren" v-show="showChildren">
            <li v-for="(child, id) in filteredChildren" class="nav-menu__item" :key="id">
                <router-link exact :to="child.to" class="nav-menu__link" @click.native="onClick($event)">
                    {{ child.title }}
                </router-link>
            </li>
            <slot name="children"></slot>
        </ul>
    </li>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { PlusIcon, MinusIcon } from 'vue-feather-icons'

    export default {
        name: 'nav-item',

        components: {
            'plus-icon': PlusIcon,
            'minus-icon': MinusIcon,
        },

        props: {
            permission: {
                type: String,
                default: '',
            },

            icon: {
                type: String,
            },

            active: {
                type: Boolean,
                default: false,
            },

            to: {
                type: String,
                default: '#',
            },

            children: {
                type: Object|Boolean,
                default: false,
            },

            divider: {
                type: Boolean,
                default: false,
            }
        },

        data() {
            return {
                showChildren: false,
                isNavOpen: true,
            }
        },

        computed: {
            hasChildren() {
                return this.filteredChildren.length > 0
            },

            shouldShow() {
                if (! this.hasChildren && this.children) {
                    return false
                }

                if (! this.permission) return true

                return this.$can(this.permission)
            },

            filteredChildren() {
                if (this.children != false) {
                    let vm = this
                    let children = _.filter(this.children, function(child) {
                        if (!child.permission) return true

                        return vm.$can(child.permission)
                    })

                    return children
                }

                return []
            },
        },

        methods: {
            accordionToggle(event) {
                this.$emit('click', event)
                this.showChildren = !this.showChildren
            },

            onClick(event) {
                if (_.includes(['sm', 'md'], this.$mq)) {
                    bus().$emit('close-nav')
                }
            }
        },

        mounted() {
            if (this.$slots['children'] != undefined) {
                this.hasChildren = true
            }
        }
    }
</script>