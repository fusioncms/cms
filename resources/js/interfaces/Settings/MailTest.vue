<template>
	<div class="row">
	    <div class="side-container">
	        <div class="xxl:mr-10 xxl:mb-0 mb-6">
	            <h3>Test Mail</h3>
	            <p class="text-sm">Run test on the following settings:</p>
	        </div>
	    </div>

	    <div class="content-container">
			<!-- SMTP -->
			<div v-show="settings.mail_default == 'smtp'">
				<ui-input-group name="stmp_driver" label="Driver" v-model="settings.mail_default" readonly></ui-input-group>
				<ui-input-group name="stmp_host" label="Host" v-model="settings.mail_smtp_host" readonly></ui-input-group>
				<ui-input-group name="stmp_port" label="Port" v-model="settings.mail_smtp_port" readonly></ui-input-group>
				<ui-input-group name="stmp_username" label="Username" v-model="settings.mail_smtp_username" readonly></ui-input-group>
				<ui-input-group name="stmp_password" type="password" label="Password" v-model="settings.mail_smtp_password" readonly></ui-input-group>
				<ui-input-group name="stmp_from_name" label="From Name" v-model="settings.mail_name" readonly></ui-input-group>
				<ui-input-group name="stmp_from_address" label="From Address" v-model="settings.mail_server" readonly></ui-input-group>
			</div>

			<!-- Sparkpost -->
			<div v-show="settings.mail_default == 'sparkpost'">
				<ui-input-group name="sparkpost_driver" label="Driver" v-model="settings.mail_default" readonly></ui-input-group>
				<ui-input-group name="sparkpost_scret" type="password" label="Secret" v-model="settings.mail_sparkpost_secret" readonly></ui-input-group>
			</div>

			<!-- Mailgun -->
			<div v-show="settings.mail_default == 'mailgun'">
				<ui-input-group name="mailgun_driver" label="Driver" v-model="settings.mail_default" readonly></ui-input-group>
				<ui-input-group name="mailgun_domain" label="Domain" v-model="settings.mail_mailgun_domain" readonly></ui-input-group>
				<ui-input-group name="mailgun_secret" type="password" label="Secret" v-model="settings.mail_mailgun_secret" readonly></ui-input-group>
			</div>

			<!-- Mandrill -->
			<div v-show="settings.mail_default == 'mandrill'">
				<ui-input-group name="mandrill_driver" label="Driver" v-model="settings.mail_default" readonly></ui-input-group>
				<ui-input-group name="mandrill_scret" type="password" label="Secret" v-model="settings.mail_mandrill_secret" readonly></ui-input-group>
			</div>

			<ui-button variant="primary" @click="submit" class="mt-5">Run Test</ui-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'settings-mail-test',

		props: {
			settings: {
				type: Object,
				required: true
			}
		},

		methods: {
			submit() {
				axios.get('/api/mail/test').then((response) => {
					toast('Mail has been sent. Please check your inbox.', 'success')
				}).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
			}
		}
	}
</script>