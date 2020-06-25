<template>
    <div>
        <portal to="title">
            <app-title :icon="matrix.icon || 'pencil-alt'">Edit {{ matrix.reference_singular }}</app-title>
        </portal>

        <portal to="subtitle">{{ matrix.description }}</portal>

        <shared-form
            v-if="form"
            :form="form"
            :single="single"
            :matrix="matrix">
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
                matrix: {},
                single: {},
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

                if (this.matrix.fieldset) {
                    body = _.filter(this.matrix.fieldset.sections, function(section) {
                        return section.placement == 'body'
                    })

                    sidebar = _.filter(this.matrix.fieldset.sections, function(section) {
                        return section.placement == 'sidebar'
                    })
                }

                return {
                    body: body,
                    sidebar: sidebar
                }
            },
        },

        methods: {
            submit() {
                this.form.patch('/api/singles/' + this.matrix.id).then((response) => {
                    toast('Single saved successfully', 'success')

                    this.$router.go()
                }).catch((response) => {
                    toast(response.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getSingle(to.params.single, (error, single, matrix, fields) => {
                next((vm) => {
                    vm.matrix = matrix
                    vm.single = single
                    vm.form   = new Form(fields, true)

                    vm.$emit('updateHead')

                    vm.$nextTick(() => {
                        vm.form.resetChangeListener()
                    })
                })
            })
        },

        beforeRouteUpdate(to,from,next) {
            getSingle(to.params.single, (error, single, matrix, fields) => {
                this.matrix = matrix
                this.single = single
                this.form   = new Form(fields, true)

                this.$emit('updateHead')

                this.$nextTick(() => {
                    this.form.resetChangeListener()
                })
            })

            next()
        }
    }

    export function getSingle(slug, callback) {
        axios.get('/api/singles/' + slug).then((response) => {
            let single = {}
            let matrix = {}

            if (_.has(response, 'data.data.single')) {
                matrix = response.data.data.matrix
                single = response.data.data.single
            } else {
                matrix = response.data.data
                single = {
                    name: matrix.name,
                    slug: matrix.slug,
                    status: 1
                }
            }

            let fields = {
                name: single.name,
                slug: single.slug,
                status: single.status,
            }

            if (matrix.fieldset) {
                _.forEach(matrix.fieldset.sections, function(section) {
                    _.forEach(section.fields, function(field) {
                        fields[field.handle] = single[field.handle]
                    })
                })
            }

            callback(null, single, matrix, fields)
        })
    }
</script>