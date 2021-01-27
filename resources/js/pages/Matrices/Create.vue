<template>
    <div class="matrix-page">
        <portal to="title">
            <page-title icon="layer-group">Create Matrix</page-title>
        </portal>

        <shared-form
            :form="form"
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
                permission: 'matrices.create',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Create a Matrix'
                }
            }
        },

        data() {
            return {
                matrices: [],
                form: new Form({
                    name: '',
                    parent_id: 0,
                    handle: '',
                    description: '',
                    type: 'collection',
                    sections: [],
                    sidebar: true,
                    quicklink: true,
                    icon: '',
                    show_name_field: true,
                    name_label: '',
                    name_format: '',
                    route: '',
                    template: '',
                    order_by: 'name',
                    order_direction: true,
                    status: true,
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.post('/api/matrices').then((response) => {
                    axios.post(`/api/blueprints/${response.data.blueprint.id}/sections`, { sections: this.form.sections })
                        .then((response) => {
                            this.$store.dispatch('navigation/fetchAdminNavigation')

                            toast('Matrix successfully created', 'success')

                            this.$router.push('/matrices')
                        }).catch((response) => {
                            toast(response.message, 'failed')
                        })
                }).catch((response) => {
                    toast(response.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/matrices'),
            ]).then(axios.spread((matrices) => {
                next((vm) => {
                    vm.matrices  = matrices.data.data
                })
            }))
        }
    }
</script>