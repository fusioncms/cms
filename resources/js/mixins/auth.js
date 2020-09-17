import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            $user: 'auth/getUser',
        })
    },

    methods: {
        $can(permission) {
            return this.$user.permitted.indexOf(permission) !== -1
        }
    }
}