<template>
    <div class="layout-admin" :class="{'nav-active' : isNavOpen}">
        <div class="layout-admin__wrapper">
            <layout-header :greeting="greeting"></layout-header>

            <nav-menu :active="isNavOpen" :greeting="greeting"></nav-menu>

            <main id="main-content" class="main-content">
                <portal-target name="sidebar-left" multiple slim></portal-target>

                <div class="main-content__container">
                    <div class="flex flex-row flex-wrap justify-between mb-6">
                        <div class="main-content__header">
                            <portal-target name="title" slim></portal-target>
                        </div>

                        <div class="main-content__actions">
                            <portal-target name="actions" multiple slim></portal-target>
                        </div>
                    </div>

                    <div class="main-content__body">
                        <slot></slot>
                    </div>
                </div>

                <portal-target name="sidebar-right" multiple slim></portal-target>
            </main>

            <layout-footer :environment="environment" :version="version"></layout-footer>

            <ui-toast></ui-toast>
            <confirm-modal></confirm-modal>
            <portal-target name="modals" multiple></portal-target>
        </div>
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