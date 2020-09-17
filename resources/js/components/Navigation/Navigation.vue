<template>
    <div class="nav" :aria-hidden="active ? 'false' : 'true'">
        <div class="nav__container">
            <nav class="nav-menu">
                <ul class="nav-menu__list">
                    <nav-item v-for="(item, id) in navigation" :key="id" :to="item.to" :icon="item.icon" :children="item.children" :divider="item.divider || false">
                        {{ item.title }}
                    </nav-item>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import NavigationItem from './NavigationItem.vue'

    export default {
        name: 'nav-menu',

        components: {
            'nav-item': NavigationItem
        },

        props: {
            active: {
                required: true,
                type: Boolean
            },
            greeting: {
                required: false,
                type: String
            }
        },

        computed: {
            ...mapGetters({
                navigation: 'navigation/getNavigation',
                settings: 'settings/getSettings',
            }),
        },

        methods: {
            logout() {
                axios.get('/logout').then(() => window.location = '/')
            }
        }
    }
</script>