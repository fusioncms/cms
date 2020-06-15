export default {
    methods: {
        setting(key) {
            return this.$store.getters['settings/getSetting'](key)
        }
    }
}