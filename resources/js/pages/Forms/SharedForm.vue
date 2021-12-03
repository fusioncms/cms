<template>
    <form-container>
        <portal to="actions">
            <div class="buttons">
                <ui-button :to="{ name: 'forms' }" variant="secondary">Go Back</ui-button>
                <ui-button type="submit" @click.prevent="handleSave" variant="primary" :disabled="!form.hasChanges || loading">Save</ui-button>
            </div>
        </portal>

        <section-card title="Loading..." v-show="loading"></section-card>
        <div v-show="! loading">
            <section-card title="General Information" description="General information about this form and what it collects.">
                <ui-input-group
                    name="name"
                    label="Name"
                    help="What should this form be called?"
                    autocomplete="off"
                    autofocus
                    required
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
                </ui-input-group>

                <ui-textarea-group
                    name="description"
                    label="Description"
                    help="Give a short description of what this form will collect."
                    autocomplete="off"
                    :has-error="form.errors.has('description')"
                    :error-message="form.errors.get('description')"
                    v-model="form.description">
                </ui-textarea-group>
            </section-card>

            <section-card title="Privacy" description="Configure this forms privacy settings.">
                <ui-fieldset label="Privacy Settings">
                    <ui-checkbox-single name="collect_email_addresses" id="collect_email_addresses" v-model="form.collect_email_addresses">Collect email addresses</ui-checkbox-single>
                    <ui-checkbox-single name="collect_ip_addresses" id="collect_ip_addresses" v-model="form.collect_ip_addresses">Collect IP addresses</ui-checkbox-single>
                    <ui-checkbox-single name="response_receipt" id="response_receipt" help="Respondents will receive a copy of their submission." :disabled="! form.collect_email_addresses" v-model="form.response_receipt">Response receipts</ui-checkbox-single>
                </ui-fieldset>
            </section-card>

            <section-card title="Spam" description="Configure this forms spam protection settings.">
                <ui-fieldset label="Spam Settings">
                    <ui-checkbox-single name="enable_recaptcha" id="enable_recaptcha" help="Be sure to enter your site key and secret key in settings." v-model="form.enable_recaptcha">Enable Google reCAPTCHA</ui-checkbox-single>
                    <ui-checkbox-single name="enable_honeypot" id="enable_honeypot" help="A honeypot is a great and native alternative to Google reCAPTCHA. Both options can be safely enabled at the same time." v-model="form.enable_honeypot">Enable Honeypot</ui-checkbox-single>
                </ui-fieldset>
            </section-card>

            <section-card title="Notifications" description="Configure who should receive notifications when submissions are made.">
                <ui-textarea-group
                    name="send_to"
                    label="Send notifications to..."
                    help="List emails as a comma separated list."
                    placeholder="marie.c@example.com, nikola.t@example.com"
                    :has-error="form.errors.has('send_to')"
                    :error-message="form.errors.get('send_to')"
                    v-model="form.send_to"
                ></ui-textarea-group>

                <ui-input-group
                    name="reply_to"
                    label="Reply to..."
                    help="Replies to the confirmation email will be sent to this e-mail. By default this will reference the default email in system settings."
                    autocomplete="off"
                    :has-error="form.errors.has('reply_to')"
                    :error-message="form.errors.get('reply_to')"
                    v-model="form.reply_to">
                </ui-input-group>
            </section-card>

            <section-card title="Confirmations" description="Configure confirmation settings when submissions are made.">
                <ui-radio-group
                    inline
                    label="After submitting the form..."
                    :has-error="form.errors.has('redirect_on_submission')"
                    :error-message="form.errors.get('redirect_on_submission')">
                    <ui-radio id="redirect_on_submission_false" v-model="form.redirect_on_submission" name="redirect_on_submission" :native-value="false">Redirect to default confirmation page...</ui-radio>
                    <ui-radio id="redirect_on_submission_true" v-model="form.redirect_on_submission" name="redirect_on_submission" :native-value="true">Redirect to custom page...</ui-radio>
                </ui-radio-group>

                <ui-input-group
                    v-if="form.redirect_on_submission === false"
                    name="confirmation_message"
                    label="Message"
                    help="This message will be displayed on the confirmation page."
                    autocomplete="off"
                    :has-error="form.errors.has('confirmation_message')"
                    :error-message="form.errors.get('confirmation_message')"
                    placeholder="Thank you! We'll be in touch soon."
                    v-model="form.confirmation_message">
                </ui-input-group>

                <ui-input-group
                    v-if="form.redirect_on_submission === true"
                    name="redirect_url"
                    label="URL"
                    help="The URL to redirect users to after submitting the form."
                    autocomplete="off"
                    :has-error="form.errors.has('redirect_url')"
                    :error-message="form.errors.get('redirect_url')"
                    v-model="form.redirect_url">
                </ui-input-group>
            </section-card>

            <section-card title="Templates" description="Configure this forms template settings.">
                <ui-input-group
                    name="form_template"
                    label="Form Template"
                    help="What template is responsible for rendering this form?"
                    autocomplete="off"
                    monospaced
                    :has-error="form.errors.has('form_template')"
                    :error-message="form.errors.get('form_template')"
                    v-model="form.form_template">
                </ui-input-group>

                <ui-input-group
                    name="thankyou_template"
                    label="Thank You Template"
                    help="What template is reponsible for thanking respondents?"
                    autocomplete="off"
                    monospaced
                    :has-error="form.errors.has('thankyou_template')"
                    :error-message="form.errors.get('thankyou_template')"
                    v-model="form.thankyou_template">
                </ui-input-group>
            </section-card>

            <section-card id="form_panel_blueprint" :grid="false" title="Blueprint" description="Create the content blueprint for this form by adding panel sections and fields to either the page body or page sidebar." tabindex="-1">
                <blueprint :placements="placements" :form="form"></blueprint>
            </section-card>
        </div>
        <template v-slot:sidebar>
            <div v-show="! loading">
            <ui-card>
                <ui-card-body>
                    <ui-slug-group
                        name="form-handle"
                        label="Handle"
                        autocomplete="off"
                        monospaced
                        required
                        delimiter="_"
                        :watch="form.name"
                        :has-error="form.errors.has('handle')"
                        :error-message="form.errors.get('handle')"
                        v-model="form.handle">
                    </ui-slug-group>

                    <ui-toggle
                        name="status"
                        label="Status"
                        :help="form.status ? 'Toggle to disable this form.' : 'Toggle to enable this form.'"
                        v-model="form.status"
                        :true-value="true"
                        :false-value="false">
                    </ui-toggle>
                </ui-card-body>
            </ui-card>

            <ui-definition-list v-if="resource">
                <ui-definition name="Status">
                    <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': resource.status, 'text-danger-500': ! resource.status}"></fa-icon> {{ resource.status ? 'Enabled' : 'Disabled' }}
                </ui-definition>

                <ui-definition name="Created At">
                    {{ $moment(resource.created_at).format('Y-MM-DD, hh:mm a') }}
                </ui-definition>

                <ui-definition name="Updated At">
                    {{ $moment(resource.updated_at).format('Y-MM-DD, hh:mm a') }}
                </ui-definition>
            </ui-definition-list>
            </div>
        </template>
    </form-container>
</template>

<script>
    export default {
        data() {
            return {
                ready: false,
                fieldtype: {},
                placements: [
                    { label: 'Body',    value: 'body'    },
                    { label: 'Sidebar', value: 'sidebar' }
                ]
            }
        },

        props: {
            form: {
                type: Object,
                required: true,
            },

            resource: {
                type: Object,
                required: false,
                default: () => {}
            },

           loading: {
               type: Boolean,
               required: false,
           }
        },

        watch: {
            'form.collect_email_addresses'(value) {
                if (this.ready) {
                    if (value === false) {
                        this.form.response_receipt = false

                        this.removeIdentifiableEmailField()
                    } else {
                        this.addIdentifiableEmailField()
                    }
                }
            },

            'form.sections': {
                deep: true,
                handler(value) {
                    this.form.collect_email_addresses = this.hasIdentifiableEmailField
                }
            }
        },

        computed: {
            hasIdentifiableEmailField() {
                return _.findIndex(this.form.sections[0].fields,
                    (field) => field.settings.identifiable) != -1
            }
        },

        methods: {
            addIdentifiableEmailField() {
                bus().$emit(`add-field-${this.form.sections[0].handle}`, {
                    type: this.fieldtype,
                    settings: { identifiable: true }
                })
            },

            removeIdentifiableEmailField() {
                bus().$emit(`remove-field-${this.form.sections[0].handle}`,
                    'settings.identifiable', true)
            },

            handleSave() {
                this.$parent.submit();
            }
        },

        created() {
            this.$store.commit('fieldtypes/setStructure', 'forms')

            axios.all([
                axios.get('/api/fieldtypes/email'),
            ]).then(axios.spread((fieldtype) => {
                this.fieldtype = fieldtype.data
                this.ready = true
            }))
        }
    }
</script>