import Vue from 'vue'
import { mapGetters } from 'vuex'

function AuthPlugin(Vue) {
    function initialize() {
        let self = this

        let auth = (typeof self.$options.auth === 'function') ? self.$options.auth.bind(self)() : self.$options.auth

        if (!auth) return

        if (auth.permission && !self.$can(auth.permission)) {
            self.$router.replace({ path: '/403' })
        }

        if (typeof auth.level !== 'undefined' && auth.level === false) return

        if (typeof auth.level !== 'undefined' && !self.$level(auth.level)) {
            self.$router.replace({ path: '/403' })
        }
    }

    Vue.mixin({
        computed: {
            ...mapGetters({
                $user: 'auth/getUser',
            })
        },

        methods: {
            $can(permission, level = false) {
                let meetsPermissionRequirement = this.$user.permitted.indexOf(permission) !== -1
                let meetsLevelRequirement = level !== false ? (this.$user.role.level === 0 ? true : this.$user.role.level < level) : true

                return meetsPermissionRequirement && meetsLevelRequirement
            },

            $level(level) {
                return this.$user.role.level === 0 ? true : this.$user.role.level < level
            }
        },

        mounted: function() {
            initialize.call(this)
        },

        created: function() {
            let self = this

            self.$on('updateAuth', function() {
                initialize.call(this)
            })
        },
    })
}

Vue.use(AuthPlugin)