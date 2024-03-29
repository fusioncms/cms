<template>
    <div class="taxonomies-page">
        <portal to="title">
            <page-title icon="sitemap">Edit Taxonomy</page-title>
        </portal>

        <shared-form
            v-if="form"
            :form="form"
            :loading="loading"
            :taxonomy="taxonomy"
            :submit="submit">
        </shared-form>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import SharedForm from './SharedForm'

    export default {
        auth() {
            return {
                permission: 'taxonomies.update',
            }
        },

        head: {
            title() {
                return {
                    inner: _.has(this.form, 'name') ? this.form.name : 'Loading...'
                }
            }
        },

        data() {
            return {
                taxonomy: {},
                form: null,
                loading: false
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.loading = true;
                this.form.patch(`/api/taxonomies/${this.taxonomy.id}`).then((response) => {
                    axios.post(`/api/blueprints/${response.data.blueprint.id}/sections`, { sections: this.form.sections })
                        .then((response) => {
                            this.$store.dispatch('navigation/fetchAdminNavigation')

                            toast('Taxonomy successfully updated', 'success')

                            this.$router.push('/taxonomies')
                        }).catch((response) => {
                            toast(response.message, 'failed')
                            this.loading = false;
                        })
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                    this.loading = false;
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getTaxonomies(to.params.taxonomy, (error, taxonomy) => {
                if (error) {
                    next((vm) => {
                        toast(error.toString(), 'danger')

                        vm.$router.push('/taxonomies')
                    })
                } else {
                    next((vm) => {
                        vm.taxonomy = taxonomy.data.data

                        vm.form = new Form({
                            name:        vm.taxonomy.name,
                            handle:      vm.taxonomy.handle,
                            description: vm.taxonomy.description,
                            sidebar:     vm.taxonomy.sidebar,
                            icon:        vm.taxonomy.icon,
                            route:       vm.taxonomy.route,
                            template:    vm.taxonomy.template,
                            sections:    vm.taxonomy.blueprint.sections,
                        }, true)

                        vm.$nextTick(() => {
                            vm.$emit('updateHead')
                        })
                    })
                }
            })
        }
    }

    export function getTaxonomies(taxonomy, callback) {
        axios.all([
            axios.get(`/api/taxonomies/${taxonomy}`),
        ]).then(axios.spread((taxonomy) => {
            callback(null, taxonomy)
        })).catch((error) => {
            callback(new Error('The requested taxonomy could not be found'))
        })
    }
</script>