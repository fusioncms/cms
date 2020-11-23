<template>
    <div class="matrix-page">
        <portal to="title">
            <page-title icon="layer-group">Edit Matrix</page-title>
        </portal>

        <shared-form
            v-if="form"
            :id="id"
            :form="form"
            :matrix="matrix"
            :submit="submit"
            :matrices="matrices">
        </shared-form>
    </div>
</template>

<script>
    import Form       from '@/services/Form'
    import SharedForm from '@/pages/Matrices/SharedForm'

    export default {
        auth() {
            return {
                permission: 'matrices.update',
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
                id: null,
                matrices: [],
                matrix: {},
                form: null
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.patch(`/api/matrices/${this.id}`).then((response) => {
                    axios.post(`/api/blueprints/${response.data.blueprint.id}/sections`, { sections: this.form.sections })
                        .then((response) => {
                            this.$store.dispatch('navigation/fetchAdminNavigation')

                            toast('Matrix successfully updated', 'success')

                            this.$router.push('/matrices')
                        }).catch((response) => {
                            toast(response.message, 'failed')
                        })
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getModels(to.params.matrix, (error, matrix, matrices) => {
                if (error) {
                    next((vm) => {
                        toast(error.toString(), 'danger')

                        vm.$router.push('/matrices')
                    })
                } else {
                    next((vm) => {
                        vm.id        = matrix.data.data.id
                        vm.matrix    = matrix.data.data
                        vm.matrices  = matrices.data.data

                        vm.form = new Form({
                            parent_id:          vm.matrix.parent_id,
                            name:               vm.matrix.name,
                            handle:             vm.matrix.handle,
                            description:        vm.matrix.description,
                            type:               vm.matrix.type,
                            reference_singular: vm.matrix.reference_singular,
                            reference_plural:   vm.matrix.reference_plural,
                            sections:           vm.matrix.blueprint.sections,
                            sidebar:            vm.matrix.sidebar ? '1' : '0',
                            quicklink:          vm.matrix.quicklink ? '1' : '0',
                            icon:               vm.matrix.icon,
                            show_name_field:    vm.matrix.show_name_field,
                            name_label:         vm.matrix.name_label,
                            name_format:        vm.matrix.name_format,
                            route:              vm.matrix.route,
                            template:           vm.matrix.template,
                            revision_control:   vm.matrix.revision_control ? '1' : '0',
                            categorizable:      vm.matrix.categorizable ? '1' : '0',
                            creditable:         vm.matrix.creditable ? '1' : '0',
                            publishable:        vm.matrix.publishable ? '1' : '0',
                            seoable:            vm.matrix.seoable ? '1' : '0',
                            status:             vm.matrix.status ? '1' : '0'
                        }, true)

                        vm.$nextTick(() => {
                            vm.$emit('updateHead')
                        })
                    })
                }
            })
        }
    }

    export function getModels(matrix, callback) {
        axios.all([
            axios.get(`/api/matrices/${matrix}`),
            axios.get('/api/matrices')
        ]).then(axios.spread((matrix, matrices) => {
            callback(null, matrix, matrices)
        })).catch((error) => {
            callback(new Error('The requested maxtrix could not be found'))
        })
    }
</script>