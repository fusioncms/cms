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
                sections: [],
                form: new Form({
                    name: '',
                    handle: '',
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        watch: {
            sections: {
                deep: true,
                handler(value) {
                    if (! this.hasChanges) {
                        this.form.onFirstChange()
                    }
                }
            }
        },

        methods: {
            submit() {
                this.form.post('/api/fieldsets')
                    .then((response) => {
                        axios.post(`/api/fieldsets/${response.data.id}/sections`, { sections: this.sections })
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
        },

        mounted() {
            this.$nextTick(() => {
                this.form.resetChangeListener()
            })
        }
    }
</script>