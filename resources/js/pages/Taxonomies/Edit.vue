<template>
    <div>
        <portal to="title">
            <page-title icon="sitemap">Edit Taxonomy</page-title>
        </portal>

        <shared-form
            v-if="form"
            :form="form"
            :taxonomy="taxonomy"
            :submit="submit">
        </shared-form>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import store from '../../store'
    import SharedForm from './SharedForm'

    export default {
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
                form: null
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.patch(`/api/taxonomies/${this.taxonomy.id}`).then((response) => {
                    store.dispatch('navigation/fetchAdminNavigation')

                    toast('Taxonomy successfully updated', 'success')

                    this.$router.push('/taxonomies')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
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
                            sidebar:     vm.taxonomy.sidebar ? '1' : '0',
                            icon:        vm.taxonomy.icon,
                            route:       vm.taxonomy.route,
                            template:    vm.taxonomy.template
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