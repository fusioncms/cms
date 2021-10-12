<template>
    <div class="navigation-page">
        <portal to="title">
	    <page-title icon="anchor">Create Navigation</page-title>
	</portal>
        <shared-form :loading="loading" :form="form"></shared-form>
    </div>
</template>

<script>
    import Form       from '@/services/Form'
    import SharedForm from '@/pages/Navigation/SharedForm'

    export default {
        auth() {
            return {
                permission: 'navigation.create',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Create Navigation'
                }
            }
        },

        data() {
            return {
                form: new Form({
                    name: '',
                    handle: '',
                    description: '',
                    sections: []
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
                this.form.post('/api/navigation')
                    .then((response) => {
                        axios.post(`/api/blueprints/${response.data.blueprint.id}/sections`, { sections: this.form.sections })
                            .then((response) => {
                                toast('Navigation successfully saved', 'success')

                                this.$router.push('/navigation')
                                this.loading = false;
                            }).catch((response) => {
                                toast(response.message, 'failed')
                                this.loading = false;
                            })
                    }).catch((response) => {
                        toast(response.message, 'failed')
                        this.loading = false;
                    })
            }
        }
    }
</script>