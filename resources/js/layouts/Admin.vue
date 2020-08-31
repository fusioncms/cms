<template>
    <div class="layout-admin" :class="{'nav-active' : isNavOpen}">
        <header class="header">
            <div class="header__container relative">
                <div class="header__toggle">
                    <nav-toggle></nav-toggle>
                </div>

                <div class="header__logo">
                    <router-link to="/" class="nav-logo" @click.native="onClick()">
                        <span class="nav-logo__image"></span>
                        <span class="nav-logo__text">
                            Fusion<span class="font-bold">CMS</span>
                        </span>
                    </router-link>
                </div>

                <div class="header__account">
                    <renderless-dropdown id="account-menu-button">
                        <div class="dropdown dropdown--right" slot-scope="props" :class="{'dropdown--open': props.isOpen}" v-click-outside="props.close">
                            <button class="nav-button nav-button--full" @click.prevent="props.toggle()">
                                <mq-layout mq="xl+">
                                    <span>{{ greeting }}, <strong>{{ user.name }}</strong></span>
                                </mq-layout>

                                <mq-layout mq="xl+">
                                    <fa-icon icon="chevron-down" class="hidden lg:inline-block fa-fw ml-2"></fa-icon>
                                </mq-layout>

                                <mq-layout :mq="['sm', 'md', 'lg']">
                                    <span class="sr-only">User Menu</span>
                                    <fa-icon icon="ellipsis-v" class="inline-block lg:hidden fa-fw fa-lg"></fa-icon>
                                </mq-layout>
                            </button>

                            <div class="dropdown__menu">
                                <mq-layout :mq="['sm', 'md', 'lg']">
                                    <p-dropdown-item>
                                        <p class="mb-0">
                                            {{ greeting }}, <strong>{{ user.name }}</strong>
                                        </p>
                                    </p-dropdown-item>
                                </mq-layout>

                                <p-dropdown-divider />

                                <p-dropdown-link href="/" target="_blank" @click.native="onClick()">
                                    <fa-icon icon="eye" class="icon"></fa-icon>
                                    View website
                                </p-dropdown-link>

                                <p-dropdown-divider />

                                <p-dropdown-link :to="'/users/' + user.id + '/edit'" @click.native="onClick()">
                                    <fa-icon icon="user" class="icon"></fa-icon>
                                    Account
                                </p-dropdown-link>

                                <p-dropdown-link href="/logout">
                                    <fa-icon icon="sign-out-alt" class="icon"></fa-icon>
                                    Log out
                                </p-dropdown-link>
                            </div>
                        </div>
                    </renderless-dropdown>
                </div>
            </div>
        </header>

        <nav-menu :active="isNavOpen" :greeting="greeting"></nav-menu>

        <main id="main-content" class="main-content w-full flex-auto">
            <!-- Content -->
            <div class="main-content__container">
                <div class="flex flex-row flex-wrap items-center justify-between mb-6">
                    <div class="main-content__header">
                        <portal-target name="title" slim></portal-target>
                    </div>

                    <div class="main-content__actions">
                        <portal-target name="actions" multiple></portal-target>
                    </div>
                </div>

                <div class="main-content__body">
                    <slot></slot>
                </div>

                <portal-target name="modals" multiple></portal-target>
            </div>
        </main>

        <footer class="page-footer mt-auto">
            <p class="mb-0">Built with <fa-icon :icon="['fas', 'heart']" class="text-primary-500"></fa-icon> & <fa-icon :icon="['fas', 'coffee']" class="text-gray-900"></fa-icon> by the efelle team</p>
            <p class="mb-0"><span v-if="environment == 'local'">Local Dev Environment - </span>{{ version }}</p>
        </footer>

        <p-toast></p-toast>
        <confirm-modal></confirm-modal>
    </div>
</template>

<script>
    import { mapGetters }    from 'vuex'
    import Navigation        from '@/components/Navigation/Navigation'
    import NavigationItem    from '@/components/Navigation/NavigationItem'
    import NavigationToggle  from '@/components/Navigation/NavigationToggle'

    export default {
        name: 'admin-layout',

        data() {
            return {
                isNavOpen: false,
                isMobile: true,
                closeOnResize: false
            }
        },

        components: {
            'nav-menu': Navigation,
            'nav-toggle': NavigationToggle,
        },

        computed: {
            ...mapGetters({
                user: 'auth/getUser',
                navigation: 'navigation/getNavigation',
                version: 'fusion/getVersion',
            }),

            environment() {
                return window.environment
            },

            greeting() {
                let today = new Date
                let currentHour = today.getHours()
                let greeting = 'Good day'

                if (currentHour > 18) {
                    greeting = 'Good evening'
                } else if (currentHour > 12) {
                    greeting = 'Good afternoon'
                } else if (currentHour > 0) {
                    greeting = 'Good morning'
                }

                return greeting
            }
        },

        methods: {
            toggleNav(event) {
                if (this.isNavOpen) {
                    this.closeNav()
                } else {
                    this.openNav()
                }
            },

            closeNav(event) {
                this.isNavOpen = false
            },

            openNav(event) {
                this.isNavOpen = true
            },

            getScreenSize() {
                this.isMobile = _.includes(['sm', 'md', 'lg'], this.$mq)
            },

            onClick() {
                if (this.isMobile) {
                    this.closeNav()
                }
            },

            listenForNavEvents() {
                bus().$on('toggle-nav', () => {
                    this.toggleNav()
                })
                bus().$on('close-nav', () => {
                    this.closeNav()
                })
                bus().$on('open-nav', () => {
                    this.openNav()
                })

                window.addEventListener('resize', () => {
                    this.closeOnResize = !this.isMobile
                    this.getScreenSize()

                    if (this.closeOnResize && this.isMobile) {
                        this.closeNav()
                    }

                    if (!this.closeOnResize && !this.isMobile) {
                        this.openNav()
                    }

                    this.closeOnResize = false
                })
            }
        },

        created() {
            this.listenForNavEvents()
            this.getScreenSize()

            if (!this.isMobile) {
                this.openNav()
            }
        }
    }
</script>