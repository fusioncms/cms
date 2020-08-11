<template>
    <div>
        <portal to="title">
			<page-title icon="paper-plane">Create Form</page-title>
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
                    inner: 'Create a Form'
                }
            }
        },

        data() {
            return {
                sections: [],
                form: new Form({
                    name: '',
                    handle: '',
                    description: '',

                    fieldset: {},

                    collect_email_addresses: false,
                    collect_ip_addresses: false,
                    response_receipt: false,

                    message: '',
                    redirect_on_submission: false,
                    redirect_url: '',

                    enable_recaptcha: false,
                    enable_honeypot: false,

                    send_to: '',
                    reply_to: '',

                    form_template: '',
                    thankyou_template: '',

                    status: true,
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
                this.form.post('/api/forms')
                    .then((response) => {
                        axios.post(`/api/fieldsets/${response.data.fieldset.id}/sections`, { sections: this.sections })
                            .then(() => {
                                toast('Form successfully saved', 'success')

                                this.$router.push('/forms')
                            }).catch((response) => {
                                toast(response.message, 'failed')
                            })
                    }).catch((response) => {
                        toast(response.message, 'failed')
                    })
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.form.resetChangeListener()
            })
        }
    }
</script>