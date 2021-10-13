<template>
    <div>
        <portal to="title">
	    <page-title icon="paper-plane">Edit Form</page-title>
	</portal>

        <shared-form
            v-if="form"
            :loading="loading"
            :form="form"
            :resource="resource">
        </shared-form>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import SharedForm from './SharedForm'

    export default {
        auth() {
            return {
                permission: 'forms.update',
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
                resource: null,
                form: null,
                loading: false
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.loading = true;
                this.form.patch(`/api/forms/${this.id}`)
                    .then(() => {
                        axios.post(`/api/blueprints/${this.resource.blueprint.id}/sections`, { sections: this.form.sections })
                            .then(() => {
                                toast('Form successfully saved', 'success')
                                this.loading = false;
                            })
                        .catch((response) => {
                                toast(response.message, 'failed')
                                this.loading = false;
                        })
                    }).catch((response) => {
                        toast(response.message, 'failed')
                        this.loading = false;
                    })
            }
        },

        beforeRouteEnter(to, from, next) {
            getForm(to.params.form, (error, form) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/forms')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.id       = form.id
                        vm.resource = form
                        vm.form     = new Form({
                            name:                    form.name,
                            handle:                  form.handle,
                            description:             form.description,
                            sections:                form.blueprint.sections,
                            collect_email_addresses: form.collect_email_addresses,
                            collect_ip_addresses:    form.collect_ip_addresses,
                            response_receipt:        form.response_receipt,
                            confirmation_message:    form.confirmation_message,
                            redirect_on_submission:  form.redirect_on_submission,
                            redirect_url:            form.redirect_url,
                            enable_recaptcha:        form.enable_recaptcha,
                            enable_honeypot:         form.enable_honeypot,
                            send_to:                 form.send_to,
                            reply_to:                form.reply_to,
                            form_template:           form.form_template,
                            thankyou_template:       form.thankyou_template,
                            status:                  form.status,
                        }, true)

                        vm.$nextTick(() => {
                            vm.$emit('updateHead')
                        })
                    })
                }
            })
        }
    }

    export function getForm(form, callback) {
        axios.get('/api/forms/' + form).then((response) => {
            callback(null, response.data.data)
        }).catch(function(error) {
            callback(new Error('The requested form could not be found'))
        })
    }
</script>