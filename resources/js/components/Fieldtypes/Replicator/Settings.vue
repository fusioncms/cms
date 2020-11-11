<template>
    <section-builder v-model="settings.sections"></section-builder>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'replicator-fieldtype-settings',

        mixins: [fieldtype],

        mounted() {
            if (! _.has(this.settings, 'sections')) {
                if (this.settings.replicator) {
                    axios.get(`/api/replicators/${this.settings.replicator}`)
                        .then((response) => {
                            this.$set(this.settings, 'sections', response.data.data.sections)
                        })
                } else {
                    this.settings.sections = []
                }
            }
        },

        created() {
            this.$store.commit('fieldtypes/setExcluded', ['replicator'])
        },

        destroyed() {
            this.$store.commit('fieldtypes/setExcluded', [])
        }
    }
</script>
