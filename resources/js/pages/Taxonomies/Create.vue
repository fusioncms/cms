<template>
    <div>
        <portal to="title">
            <app-title icon="sitemap">Create Taxonomy</app-title>
        </portal>

        <shared-form :form="form" :submit="submit"></shared-form>
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
                    inner: 'Create a Taxonomy'
                }
            }
        },

        data() {
            return {
                fieldsets: [],
                form: new Form({
                    name: '',
                    handle: '',
                    description: '',
                    fieldset: null,

                    sidebar: '1',
                    icon: '',

                    route: '',
                    template: '',

                    status: '1',
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.post('/api/taxonomies').then((response) => {
                    store.dispatch('navigation/fetchAdminNavigation')

                    toast('Taxonomy successfully created', 'success')

                    this.$router.push('/taxonomies')
                }).catch((response) => {
                    toast(response.message, 'failed')
                })
            },
        }
    }
</script>