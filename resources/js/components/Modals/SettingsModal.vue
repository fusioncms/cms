<template>
	<p-modal v-model="show" name="settings" no-header flush>

		<div class="card">
            <div class="card__body">
        		<shared-form v-if="form" :form="form" :group="group"></shared-form>
			</div>
		</div>

		<template slot="footer">
			<div class="buttons">
				<button type="button" class="button" @click.prevent="close">Close</button>
				<button type="submit" class="button button--primary" @click.prevent="submit">Save Settings</button>
			</div>
		</template>
    </p-modal>
</template>

<script>
	import Form from '../../services/Form'
	import SharedForm from '../../pages/Settings/SharedForm.vue'

	export default {
		name: 'settings-modal',

		components: {
			'shared-form': SharedForm
		},

		data() {
			return {
				show: false,
				group: {},
                form: null
			}
		},

		props: {
			handle: {
				type: String,
				required: true
			}
		},

		methods: {
            close() {
            	this.show = false
            },

            submit() {
                this.form.patch(`/api/settings/${this.handle}`)
                    .then((response) => {
                        toast('Settings saved successfully', 'success')
                    }).catch((response) => {
                        toast(response.response.data.message, 'failed')
                    })
            },
        },

		created() {
			axios.get(`/api/settings/${this.handle}`)
				.then((response) => {
					this.group = response.data.data
					this.form  = new Form(this.group.settings)
		        })
		}
	}
</script>