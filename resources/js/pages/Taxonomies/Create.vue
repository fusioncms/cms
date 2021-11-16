<template>
    <div class="taxonomy-page">
        <portal to="title">
            <page-title icon="sitemap">Create Taxonomy</page-title>
        </portal>

        <shared-form
            :form="form"
            :loading="loading"
            :submit="submit">
        </shared-form>
    </div>
</template>

<script>
    import Form       from '@/services/Form'
    import SharedForm from '@/pages/Taxonomies/SharedForm'

    export default {
        auth() {
            return {
                permission: 'taxonomies.create',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Create a Taxonomy'
                }
            }
        },

        data() {
            return {
                form: new Form({
                    name: '',
                    handle: '',
                    description: '',
                    sidebar: true,
                    icon: '',
                    route: '',
                    template: '',
                    sections: [],
                }, true),
                loading: false
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.loading = true;
                this.form.post('/api/taxonomies').then((response) => {
                    axios.post(`/api/blueprints/${response.data.blueprint.id}/sections`, { sections: this.form.sections })
                        .then((response) => {
                            this.$store.dispatch('navigation/fetchAdminNavigation')

                            toast('Taxonomy successfully created', 'success')

                            this.$router.push('/taxonomies')
                        }).catch((response) => {
                            toast(response.message, 'failed')
                            this.loading = false;
                        })
                }).catch((response) => {
                    toast(response.message, 'failed')
                    this.loading = false;
                })
            },
        }
    }
</script>