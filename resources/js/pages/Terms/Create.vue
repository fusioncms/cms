<template>
    <div class="term-page">
        <portal to="title">
            <page-title :icon="taxonomy.icon">Create {{ singular }}</page-title>
        </portal>

        <portal to="subtitle">{{ taxonomy.description }}</portal>

        <shared-form
            v-if="form"
            :form="form"
            :loading="loading"
            :taxonomy="taxonomy"
        >
        </shared-form>
    </div>
</template>

<script>
    import pluralize  from 'pluralize'
    import Form       from '@/services/Form'
    import SharedForm from '@/pages/Terms/SharedForm'

    export default {
        auth() {
            return {
                permission: 'terms.create',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Create a ' + _.startCase(this.singular) || 'Loading...'
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

        computed: {
            singular() {
                if (this.taxonomy.name) {
                    return pluralize.singular(this.taxonomy.name)
                }

                return ''
            },
        },

        methods: {
            submit() {
                this.loading = true;
                this.form.post(`/api/taxonomies/${this.taxonomy.id}/terms`).then((response) => {
                    toast('Term saved successfully', 'success')

                    this.$router.push(`/taxonomies/${this.taxonomy.id}`)
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                    this.loading = false;
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getTaxonomy(to.params.taxonomy, (error, taxonomy, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/taxonomies/' + vm.$router.currentRoute.params.taxonomy)

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.taxonomy = taxonomy
                        vm.form = new Form(fields, true)

                        vm.$emit('updateHead')
                    })
                }
            })
        }
    }

    export function getTaxonomy(taxonomy, callback) {
        axios.get(`/api/taxonomies/${taxonomy}`).then((response) => {
            let taxonomy = response.data.data
            let fields = {
                name: '',
                slug: '',
                status: true,
            }

            _.forEach(taxonomy.blueprint.sections, function(section) {
                _.forEach(section.fields, function(field) {
                    fields[field.handle] = field.default
                })
            })

            callback(null, taxonomy, fields)
        }).catch(function(error) {
            callback(new Error('The requested taxonomy could not be found'))
        })
    }
</script>