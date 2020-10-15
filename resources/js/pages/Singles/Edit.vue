<template>
    <div class="single-page">
        <portal to="title">
            <page-title :icon="single.icon || 'pencil-alt'" :subtitle="single.description">Edit {{ single.reference_singular }}</page-title>
        </portal>

        <shared-form
            v-if="form"
            :form="form"
            :entry="entry"
            :single="single">
        </shared-form>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import SharedForm from './SharedForm'
    import _ from 'lodash'

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
                single: {},
                entry: {},
                form: null,
            }
        },

        components: {
            'shared-form': SharedForm
        },

        computed: {
            sections() {
                let body = []
                let sidebar = []

                body = _.filter(this.single.blueprint.sections, function(section) {
                    return section.placement == 'body'
                })

                sidebar = _.filter(this.single.blueprint.sections, function(section) {
                    return section.placement == 'sidebar'
                })

                return {
                    body: body,
                    sidebar: sidebar
                }
            },
        },

        methods: {
            submit() {
                this.form.patch('/api/singles/' + this.single.id)
                    .then((response) => {
                        toast('Single saved successfully', 'success')

                        this.$router.go()
                    })
                    .catch((response) => {
                        toast(response.message, 'failed')
                    })
            },
        },

        beforeRouteEnter(to, from, next) {
            getSingle(to.params.single, (error, entry, matrix, fields) => {
                next((vm) => {
                    vm.single = matrix
                    vm.entry = entry
                    vm.form   = new Form(fields, true)

                    vm.$emit('updateHead')
                })
            })
        },

        beforeRouteUpdate(to,from,next) {
            getSingle(to.params.single, (error, entry, matrix, fields) => {
                this.single = matrix
                this.entry = entry
                this.form   = new Form(fields, true)

                this.$emit('updateHead')
            })

            next()
        }
    }

    export function getSingle(slug, callback) {
        axios.get('/api/singles/' + slug).then((response) => {
            let entry = {}
            let matrix = {}

            if (_.has(response, 'data.data.single')) {
                matrix = response.data.data.matrix
                entry   = response.data.data.single
            } else {
                matrix = response.data.data
                entry   = {
                    name: matrix.name,
                    slug: matrix.slug,
                    status: 1
                }
            }

            let fields = {
                name: entry.name,
                slug: entry.slug,
                status: entry.status,
            }

            _.forEach(matrix.blueprint.sections, function(section) {
                _.forEach(section.fields, function(field) {
                    fields[field.handle] = entry[field.handle]
                })
            })

            callback(null, entry, matrix, fields)
        }).catch(function(error) {
            callback(new Error('The requested entry could not be found'))
        })
    }
</script>