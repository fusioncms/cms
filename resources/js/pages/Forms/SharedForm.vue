<template>
    <form-container>
        <portal to="actions">
            <div class="buttons">
                <router-link :to="{ name: 'forms' }" class="button">Go Back</router-link>
                <button type="submit" @click.prevent="$parent.submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save</button>
            </div>
        </portal>

        <div class="card">
            <div class="card__body">
                <ui-title
                    name="name"
                    autocomplete="off"
                    autofocus
                    required
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
                </ui-title>

                <ui-tabs>
                    <ui-tab key="general" name="General">
                        <ui-input
                            name="description"
                            label="Description"
                            help="Give a short description of what this form will collect."
                            autocomplete="off"
                            required
                            :has-error="form.errors.has('description')"
                            :error-message="form.errors.get('description')"
                            v-model="form.description">
                        </ui-input>
                    </ui-tab>

                    <ui-tab key="privacy" name="Privacy">
                        <ui-checkbox-group inline class="mb-0">
                            <ui-checkbox name="collect_email_addresses" id="collect_email_addresses" v-model="form.collect_email_addresses">Collect email addresses</ui-checkbox>
                            <ui-checkbox name="collect_ip_addresses" id="collect_ip_addresses" v-model="form.collect_ip_addresses">Collect IP addresses</ui-checkbox>
                        </ui-checkbox-group>

                        <ui-checkbox-group class="-mt-3" inline help="Respondents will receive a copy of their submission.">
                            <ui-checkbox name="response_receipt" id="response_receipt" :disabled="! form.collect_email_addresses" v-model="form.response_receipt">Response receipts</ui-checkbox>
                        </ui-checkbox-group>
                    </ui-tab>

                    <ui-tab key="spam" name="Spam">
                        <ui-checkbox-group help="Be sure to enter your site key and secret key in settings.">
                            <ui-checkbox name="enable_recaptcha" id="enable_recaptcha" v-model="form.enable_recaptcha">Enable Google reCAPTCHA</ui-checkbox>
                        </ui-checkbox-group>

                        <ui-checkbox-group help="A honeypot is a great and native alternative to Google reCAPTCHA. Both options can be safely enabled at the same time.">
                            <ui-checkbox name="enable_honeypot" id="enable_honeypot" v-model="form.enable_honeypot">Enable Honeypot</ui-checkbox>
                        </ui-checkbox-group>
                    </ui-tab>

                    <ui-tab key="notifications" name="Notifications">
                        <ui-textarea
                            name="send_to"
                            label="Send notifications to..."
                            help="List emails as a comma separated list."
                            placeholder="marie.c@example.com, nikola.t@example.com"
                            :has-error="form.errors.has('send_to')"
                            :error-message="form.errors.get('send_to')"
                            v-model="form.send_to"
                        ></ui-textarea>

                        <ui-input
                            name="reply_to"
                            label="Reply to..."
                            help="Replies to the confirmation email will be sent to this e-mail. By default this will reference the default email in system settings."
                            autocomplete="off"
                            :has-error="form.errors.has('reply_to')"
                            :error-message="form.errors.get('reply_to')"
                            v-model="form.reply_to">
                        </ui-input>
                    </ui-tab>

                    <ui-tab key="confirmations" name="Confirmations">
                        <ui-radio-group
                            inline
                            label="After submitting the form..."
                            :has-error="form.errors.has('redirect_on_submission')"
                            :error-message="form.errors.get('redirect_on_submission')"
                        >
                            <ui-radio id="redirect_on_submission_false" v-model="form.redirect_on_submission" name="redirect_on_submission" :native-value="false">Redirect to default confirmation page...</ui-radio>

                            <ui-radio id="redirect_on_submission_true" v-model="form.redirect_on_submission" name="redirect_on_submission" :native-value="true">Redirect to custom page...</ui-radio>
                        </ui-radio-group>

                        <ui-input
                            v-if="form.redirect_on_submission === false"
                            name="confirmation_message"
                            label="Message"
                            help="This message will be displayed on the confirmation page."
                            autocomplete="off"
                            :has-error="form.errors.has('confirmation_message')"
                            :error-message="form.errors.get('confirmation_message')"
                            placeholder="Thank you! We'll be in touch soon."
                            v-model="form.confirmation_message">
                        </ui-input>

                        <ui-input
                            v-if="form.redirect_on_submission === true"
                            name="redirect_url"
                            label="URL"
                            help="The URL to redirect users to after submitting the form."
                            autocomplete="off"
                            :has-error="form.errors.has('redirect_url')"
                            :error-message="form.errors.get('redirect_url')"
                            v-model="form.redirect_url">
                        </ui-input>
                    </ui-tab>

                    <ui-tab key="templates" name="Templates">
                        <ui-input
                            name="form_template"
                            label="Form Template"
                            help="What template is responsible for rendering this form?"
                            autocomplete="off"
                            monospaced
                            :has-error="form.errors.has('form_template')"
                            :error-message="form.errors.get('form_template')"
                            v-model="form.form_template">
                        </ui-input>

                        <ui-input
                            name="thankyou_template"
                            label="Thank You Template"
                            help="What template is reponsible for thanking respondents?"
                            autocomplete="off"
                            monospaced
                            :has-error="form.errors.has('thankyou_template')"
                            :error-message="form.errors.get('thankyou_template')"
                            v-model="form.thankyou_template">
                        </ui-input>
                    </ui-tab>

                    <ui-tab key="fields" name="Fields">
                        <section-builder v-model="form.sections"></section-builder>
                    </ui-tab>
                </ui-tabs>
            </div>
        </div>

        <template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <ui-slug
                        name="handle"
                        label="Handle"
                        autocomplete="off"
                        monospaced
                        required
                        delimiter="_"
                        :watch="form.name"
                        :has-error="form.errors.has('handle')"
                        :error-message="form.errors.get('handle')"
                        v-model="form.handle">
                    </ui-slug>

                    <ui-toggle
                        name="status"
                        label="Status"
                        v-model="form.status"
                        :true-value="1"
                        :false-value="0">
                    </ui-toggle>
                </div>
            </div>

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
        </template>
    </form-container>
</template>

<script>
    export default {
        data() {
            return {
                ready: false,
                fieldtype: {},
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
            }
        },

        watch: {
            'form.collect_email_addresses': function(value) {
                if (this.ready) {
                    if (value === false) {
                        this.form.response_receipt = false

                        this.removeIdentifiableEmailField()
                    } else {
                        this.addIdentifiableEmailField()
                    }
                }
            },
        },

        methods: {
            addIdentifiableEmailField() {
                bus().$emit(`add-field-${this.form.sections[0].handle}`, {
                    type: this.fieldtype,
                    settings: { type: 'email', identifiable: true }
                })
            },

            removeIdentifiableEmailField() {
                bus().$emit(`remove-field-${this.form.sections[0].handle}`,
                    'settings.identifiable', true)
            },
        },

        created() {
            axios.all([
                axios.get('/api/fieldtypes/input'),
            ]).then(axios.spread((fieldtype) => {
                this.fieldtype = fieldtype.data
                this.ready = true
            }))
        }
    }
</script>