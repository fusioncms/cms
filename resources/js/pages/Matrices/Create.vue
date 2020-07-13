<template>
    <div>
        <portal to="title">
            <app-title icon="layer-group">Create Matrix</app-title>
        </portal>

        <shared-form
            :form="form"
            :submit="submit"
            :matrices="matrices">
        </shared-form>
    </div>
</template>

<script>
    import pluralize from 'pluralize'
    import store from '../../store'
    import Form from '../../services/Form'
    import SharedForm from './SharedForm'

    export default {
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
                    fieldset: null,

                    reference_singular: '',
                    reference_plural: '',

                    sidebar: '1',
                    quicklink: '1',
                    icon: '',

                    show_name_field: true,
                    name_label: '',
                    name_format: '',

                    route: '',
                    template: '',

                    categorizable: '1',
                    creditable: '1',
                    publishable: '1',
                    revision_control: '1',

                    seoable: '1',

                    status: '1',
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                if (this.form.reference_singular == '') {
                    this.form.reference_singular = pluralize.singular(this.form.name)
                }

                if (this.form.reference_plural == '') {
                    this.form.reference_plural = pluralize(this.form.name)
                }

                this.form.post('/api/matrices').then((response) => {
                    store.dispatch('navigation/fetchAdminNavigation')

                    toast('Matrix successfully created', 'success')

                    this.$router.push('/matrices')
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