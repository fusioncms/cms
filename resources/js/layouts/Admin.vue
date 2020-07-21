<template>
    <div class="flex flex-auto flex-col" :class="{'nav-active' : isNavOpen}">
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
                            <a href="#" class="text-gray-400 hover:text-gray-900 p-1" @click.prevent="props.toggle()"><fa-icon icon="ellipsis-v" class="fa-fw fa-lg"></fa-icon></a>

                            <div class="dropdown__menu">
                                <p-dropdown-item>
                                    <p>
                                        Hello and {{ greeting }},<br>
                                        <strong>{{ user.name }}</strong>
                                    </p>
                                </p-dropdown-item>

                                <p-dropdown-divider />

                                <p-dropdown-link href="/" target="_blank">
                                    <fa-icon icon="eye" class="icon"></fa-icon>
                                    View website
                                </p-dropdown-link>

                                <p-dropdown-divider />

                                <p-dropdown-link :to="'/users/' + user.id + '/edit'">
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

        <nav-menu :active="isNavOpen"></nav-menu>

        <main id="main-content" class="main-content w-full flex-auto">
            <!-- Local Environment Warning -->
            <div class="local-env" v-if="environment == 'local'">
                <div class="local-env__message">
                    <p>Local Development Environment</p>
                </div>

                <div class="local-env__bar"></div>
            </div>

            <!-- Content -->
            <div class="main-content__container">
                <div class="flex flex-row flex-wrap items-center justify-between mb-3">
                    <div class="main-content__header">
                        <h1>
                            <portal-target name="title" slim></portal-target>
                        </h1>

                        <span class="text-sm ml-3 text-gray-600">
                            <portal-target name="subtitle" slim></portal-target>
                        </span>
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
            <p class="mb-0">{{ version }}</p>
        </footer>

        <p-toast></p-toast>
        <confirm-modal></confirm-modal>
    </div>
</template>

<script>
    import { mapGetters }    from 'vuex'
    import Navigation        from '../components/Navigation'
    import NavigationItem    from '../components/NavigationItem'
    import NavigationToggle  from '../components/NavigationToggle'

    export default {
        name: 'admin-layout',

        data() {
            return {
                isNavOpen: false
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
                let greeting = 'good day'

                if (currentHour > 18) {
                    greeting = 'good evening'
                } else if (currentHour > 12) {
                    greeting = 'good afternoon'
                } else if (currentHour > 0) {
                    greeting = 'good morning'
                }

                return greeting
            }
        },

        methods: {
            toggleNav(event) {
                this.isNavOpen = !this.isNavOpen
            },

            closeNav(event) {
                this.isNavOpen = false
            },

            openNav(event) {
                this.isNavOpen = true
            },

            onClick() {
                if (_.includes(['sm', 'md'], this.$mq)) {
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
            }
        },

        created() {
            this.listenForNavEvents()

            if (_.includes(['lg', 'xl', 'xxl'], this.$mq)) {
                this.openNav()
            }
        }
    }
</script>