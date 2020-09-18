import Vue from 'vue'
import { mapGetters } from 'vuex'

function AuthPlugin(Vue) {
    function initialize() {
        let permission = this.$options.permission

        if (!permission) return

        if (!this.$can(permission)) {
            this.$router.replace({ path: '/403' })
        }
    }

    Vue.mixin({
        computed: {
            ...mapGetters({
                $user: 'auth/getUser',
            })
        },

        methods: {
            $can(permission) {
                return this.$user.permitted.indexOf(permission) !== -1
            }
        },

        mounted: function() {
            initialize.call(this)
        }
    })
}

Vue.use(AuthPlugin)