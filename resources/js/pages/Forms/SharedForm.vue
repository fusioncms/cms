<template>
    <form-container>
        <portal to="actions">
            <div class="buttons">
                <router-link :to="{ name: 'forms' }" class="button">Go Back</router-link>
                <button type="submit" @click.prevent="$parent.submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save</button>
            </div>
        </portal>

        <section-card title="General Information" description="General information about this form and what it collects.">
            <p-input
                name="name"
                label="Name"
                help="What should this form be called?"
                autocomplete="off"
                autofocus
                required
                :has-error="form.errors.has('name')"
                :error-message="form.errors.get('name')"
                v-model="form.name">
            </p-input>

            <p-textarea
                name="description"
                label="Description"
                help="Give a short description of what this form will collect."
                autocomplete="off"
                :has-error="form.errors.has('description')"
                :error-message="form.errors.get('description')"
                v-model="form.description">
            </p-textarea>
        </section-card>

        <section-card title="Privacy" description="Configure this forms privacy settings.">
            <p-checkbox-group inline class="mb-0">
                <p-checkbox name="collect_email_addresses" id="collect_email_addresses" v-model="form.collect_email_addresses">Collect email addresses</p-checkbox>
                <p-checkbox name="collect_ip_addresses" id="collect_ip_addresses" v-model="form.collect_ip_addresses">Collect IP addresses</p-checkbox>
            </p-checkbox-group>

            <p-checkbox-group class="-mt-3" inline help="Respondents will receive a copy of their submission.">
                <p-checkbox name="response_receipt" id="response_receipt" :disabled="! form.collect_email_addresses" v-model="form.response_receipt">Response receipts</p-checkbox>
            </p-checkbox-group>
        </section-card>

        <section-card title="Spam" description="Configure this forms spam protection settings.">
            <p-checkbox-group help="Be sure to enter your site key and secret key in settings.">
                <p-checkbox name="enable_recaptcha" id="enable_recaptcha" v-model="form.enable_recaptcha">Enable Google reCAPTCHA</p-checkbox>
            </p-checkbox-group>

            <p-checkbox-group help="A honeypot is a great and native alternative to Google reCAPTCHA. Both options can be safely enabled at the same time.">
                <p-checkbox name="enable_honeypot" id="enable_honeypot" v-model="form.enable_honeypot">Enable Honeypot</p-checkbox>
            </p-checkbox-group>
        </section-card>

        <section-card title="Notifications" description="Configure who should receive notifications when submissions are made.">
            <p-textarea
                name="send_to"
                label="Send notifications to..."
                help="List emails as a comma separated list."
                placeholder="marie.c@example.com, nikola.t@example.com"
                :has-error="form.errors.has('send_to')"
                :error-message="form.errors.get('send_to')"
                v-model="form.send_to"
            ></p-textarea>

            <p-input
                name="reply_to"
                label="Reply to..."
                help="Replies to the confirmation email will be sent to this e-mail. By default this will reference the default email in system settings."
                autocomplete="off"
                :has-error="form.errors.has('reply_to')"
                :error-message="form.errors.get('reply_to')"
                v-model="form.reply_to">
            </p-input>
        </section-card>

        <section-card title="Confirmations" description="Configure confirmation settings when submissions are made.">
            <p-radio-group
                inline
                label="After submitting the form..."
                :has-error="form.errors.has('redirect_on_submission')"
                :error-message="form.errors.get('redirect_on_submission')"
            >
                <p-radio id="redirect_on_submission_false" v-model="form.redirect_on_submission" name="redirect_on_submission" :native-value="false">Redirect to default confirmation page...</p-radio>

                <p-radio id="redirect_on_submission_true" v-model="form.redirect_on_submission" name="redirect_on_submission" :native-value="true">Redirect to custom page...</p-radio>
            </p-radio-group>

            <p-input
                v-if="form.redirect_on_submission === false"
                name="confirmation_message"
                label="Message"
                help="This message will be displayed on the confirmation page."
                autocomplete="off"
                :has-error="form.errors.has('confirmation_message')"
                :error-message="form.errors.get('confirmation_message')"
                placeholder="Thank you! We'll be in touch soon."
                v-model="form.confirmation_message">
            </p-input>

            <p-input
                v-if="form.redirect_on_submission === true"
                name="redirect_url"
                label="URL"
                help="The URL to redirect users to after submitting the form."
                autocomplete="off"
                :has-error="form.errors.has('redirect_url')"
                :error-message="form.errors.get('redirect_url')"
                v-model="form.redirect_url">
            </p-input>
        </section-card>

        <section-card title="Templates" description="Configure this forms template settings.">
            <p-input
                name="form_template"
                label="Form Template"
                help="What template is responsible for rendering this form?"
                autocomplete="off"
                monospaced
                :has-error="form.errors.has('form_template')"
                :error-message="form.errors.get('form_template')"
                v-model="form.form_template">
            </p-input>

            <p-input
                name="thankyou_template"
                label="Thank You Template"
                help="What template is reponsible for thanking respondents?"
                autocomplete="off"
                monospaced
                :has-error="form.errors.has('thankyou_template')"
                :error-message="form.errors.get('thankyou_template')"
                v-model="form.thankyou_template">
            </p-input>
        </section-card>

        <section-card title="Blueprint" description="Configure this forms blueprint.">
            <section-builder v-model="form.sections"></section-builder>
        </section-card>

        <template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <p-slug
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
                    </p-slug>

                    <p-toggle
                        name="status"
                        label="Status"
                        v-model="form.status"
                        :true-value="1"
                        :false-value="0">
                    </p-toggle>
                </div>
            </div>

            <p-definition-list v-if="resource">
                <p-definition name="Status">
                    <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': resource.status, 'text-danger-500': ! resource.status}"></fa-icon> {{ resource.status ? 'Enabled' : 'Disabled' }}
                </p-definition>

                <p-definition name="Created At">
                    {{ $moment(resource.created_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>

                <p-definition name="Updated At">
                    {{ $moment(resource.updated_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>
            </p-definition-list>
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