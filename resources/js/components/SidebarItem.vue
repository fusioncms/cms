<template>
    <li>
        <span v-if="divider" class="block text-xs tracking-wider font-bold uppercase my-3 pl-6 text-gray-800"><slot></slot></span>

        <router-link
            exact
            v-if="! hasChildren && ! divider"
            :to="to"
            class="sidebar__menu-link"
            @click.native="onClick($event) && mobileToggle()"
        >
            <div class="flex">
                <span class="sidebar__menu-icon" v-if="icon">
                    <fa-icon :icon="['fas', icon]" class="fa-inverse! fa-fw fa-lg"></fa-icon>
                </span>

                <span class="sidebar__menu-text"><slot></slot></span>
            </div>
        </router-link>

        <a href="#" v-if="hasChildren && ! divider" @click.prevent="onClick($event)" class="sidebar__menu-link">
            <div class="flex">
                <span class="sidebar__menu-icon" v-if="icon">
                    <fa-icon :icon="['fas', icon]" class="fa-inverse! fa-fw fa-lg"></fa-icon>
                </span>

                <span class="sidebar__menu-text"><slot></slot></span>
            </div>

            <span class="sidebar__menu-toggle" v-if="hasChildren">

                <plus-icon v-if="! showChildren" size="1.2x"></plus-icon>
                <minus-icon v-else size="1.2x"></minus-icon>
                <!-- <fa-icon v-if="! showChildren" :icon="['fas', 'plus']" class="fa-inverse! fa-fw"></fa-icon> -->
                <!-- <fa-icon v-else :icon="['fas', 'minus']" class="fa-inverse! fa-fw"></fa-icon> -->
            </span>
        </a>

        <ul class="sidebar__menu-link-children" v-if="hasChildren" v-show="showChildren">
            <li v-for="(child, id) in children" :key="id">
                <router-link
                    exact
                    :to="child.to"
                    class="sidebar__menu-link"
                    @click.native="mobileToggle()"
                >
                    <div class="flex items-center">
                        <span class="sidebar__menu-text">{{ child.title }}</span>
                    </div>
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
        name: 'sidebar-item',

        components: {
            'plus-icon': PlusIcon,
            'minus-icon': MinusIcon,
        },

        props: {
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
                isSidebarOpen: true,
            }
        },

        computed: {
            hasChildren() {
                return this.children != false
            }
        },

        methods: {
            onClick(event) {
                this.$emit('click', event)

                this.showChildren = !this.showChildren
            },

            toggle() {
                this.isSidebarOpen = ! this.isSidebarOpen
            },

            mobileToggle() {
                if (_.includes(['sm', 'md'], this.$mq)) {
                    this.toggle()
                    this.$parent.toggle()
                }
            },

            listenForSidebarEvent() {
                Fusion.bus.$on('toggle-sidebar', () => {
                    this.toggle()
                })
            }
        },

        mounted() {
            if (this.$slots['children'] != undefined) {
                this.hasChildren = true
            }
        },

        created() {
            this.listenForSidebarEvent()
        }
    }
</script>