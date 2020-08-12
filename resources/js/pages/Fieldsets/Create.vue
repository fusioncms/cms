<template>
    <div>
        <portal to="title">
            <page-title icon="list">Create Fieldset</page-title>
        </portal>

        <shared-form :form="form"></shared-form>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: 'Create a Fieldset'
                }
            }
        },

        data() {
            return {
                form: new Form({
                    name: '',
                    handle: '',
                    sections: []
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.post('/api/fieldsets')
                    .then((response) => {
                        axios.post(`/api/fieldsets/${response.data.id}/sections`, { sections: this.form.sections })
                            .then(() => {
                                toast('Fieldset successfully created', 'success')

                                this.$router.push('/fieldsets')
                            }).catch((response) => {
                                toast(response.message, 'failed')
                            })
                    }).catch((response) => {
                        toast(response.message, 'failed')
                    })
            },
        }
    }
</script>