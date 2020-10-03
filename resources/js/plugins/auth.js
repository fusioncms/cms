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
            $can(permission, level = false) {
                let meetsPermissionRequirement = this.$user.permitted.indexOf(permission) !== -1
                let meetsLevelRequirement = level !== false ? this.$user.role.level <= level : true

                return meetsPermissionRequirement && meetsLevelRequirement
            },

            $level(level) {
                return this.$user.role.level <= level
            }
        },

        mounted: function() {
            initialize.call(this)
        }
    })
}

Vue.use(AuthPlugin)