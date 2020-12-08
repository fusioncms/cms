<template>
    <div>
        <portal to="title">
            <page-title :icon="taxonomy.icon || 'pencil-alt'">Edit {{ singular }}</page-title>
        </portal>

        <portal to="subtitle">{{ taxonomy.description }}</portal>

        <shared-form
            v-if="form"
            :form="form"
            :term="term"
            :taxonomy="taxonomy">
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
                permission: 'terms.update',
            }
        },

        head: {
            title() {
                return {
                    inner: this.term.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                taxonomy: {},
                term: {},
                form: new Form({}),
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
                this.form.patch(`/api/taxonomies/${this.taxonomy.id}/terms/${this.term.id}`).then((response) => {
                    toast('Term saved successfully', 'success')

                    this.$router.push(`/taxonomies/${this.taxonomy.id}`)
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getTerm(to.params.taxonomy, to.params.id, (error, term, taxonomy, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/taxonomies/' + vm.$router.currentRoute.params.taxonomy)

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.taxonomy = taxonomy
                        vm.term = term
                        vm.form = new Form(fields, true)

                        vm.$emit('updateHead')
                    })
                }
            })
        },

        beforeRouteUpdate(to, from, next) {
            getTerm(to.params.taxonomy, to.params.id, (error, term, taxonomy, fields) => {
                if (error) {
                    this.$router.push('/taxonomies/' + this.$router.currentRoute.params.taxonomy)

                    toast(error.toString(), 'danger')
                } else {
                    this.taxonomy = taxonomy
                    this.term = term
                    this.form = new Form(fields, true)

                    this.$emit('updateHead')

                    this.$nextTick(() => {
                        this.form.resetChangeListener()
                    })
                }
            })

            next()
        }
    }

    export function getTerm(taxonomy, id, callback) {
        axios.get(`/api/taxonomies/${taxonomy}/terms/${id}`).then((response) => {
            let taxonomy = response.data.data.taxonomy
            let term = response.data.data
            let fields = {
                name: term.name,
                slug: term.slug,
                status: term.status,
            }

            _.forEach(taxonomy.blueprint.sections, function(section) {
                _.forEach(section.fields, function(field) {
                    fields[field.handle] = term[field.handle]
                })
            })

            callback(null, term, taxonomy, fields)
        }).catch(function(error) {
            callback(new Error('The requested term could not be found'))
        })
    }
</script>