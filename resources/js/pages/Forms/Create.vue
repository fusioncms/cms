<template>
    <div>
        <portal to="title">
	    <page-title icon="paper-plane">Create Form</page-title>
	</portal>

        <shared-form :loading="loading" :form="form"></shared-form>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import SharedForm from './SharedForm'

    export default {
        auth() {
            return {
                permission: 'forms.create',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Create a Form'
                }
            }
        },

        data() {
            return {
                form: new Form({
                    name: '',
                    handle: '',
                    description: '',
                    sections: [],

                    collect_email_addresses: false,
                    collect_ip_addresses: false,
                    response_receipt: false,

                    confirmation_message: '',
                    redirect_on_submission: false,
                    redirect_url: '',

                    enable_recaptcha: false,
                    enable_honeypot: false,

                    send_to: '',
                    reply_to: '',

                    form_template: '',
                    thankyou_template: '',

                    status: true,
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
                this.form.post('/api/forms')
                    .then((response) => {
                        axios.post(`/api/blueprints/${response.data.blueprint.id}/sections`, { sections: this.form.sections })
                            .then(() => {
                                toast('Form successfully saved', 'success')

                                this.$router.push('/forms')
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
        },

        created() {
            let unwatch = this.$watch('form.sections', (value) => {
                this.form.orig.sections = _.cloneDeep(value)
                unwatch()
            })
        }
    }
</script>