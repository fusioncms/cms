<template>
	<p-tabs>
		<p-tab v-for="(groupSettings, group, index) in groups" :key="group" :name="group" :active="index === 0">
			<div v-for="setting in groupSettings" :key="setting.handle">
				<p-input
					v-if="setting.type === 'text' || setting.type === 'number' || setting.type === 'email'"
					:name="setting.handle"
					:ref="setting.handle"
					:label="setting.name"
					:type="setting.type"
					:help="setting.description"
					v-model="setting.value"
				></p-input>

				<p-select
					v-if="setting.type === 'select'"
					:name="setting.handle"
					:ref="setting.handle"
					:label="setting.name"
					:options="mapOptions(setting.options)"
					:help="setting.description"
					v-model="setting.value"
				></p-select>

				<p-upload
					v-if="setting.type === 'file'"
					:name="setting.handle"
					:label="setting.name"
					:help="setting.description"
					accept="json"
                    :display="false"
					v-model="setting.value"
                    @input="(ev) => setting.value = ev.shift()"
				></p-upload>

				<component
					v-if="setting.type === 'component'"
					:is="setting.component"
					:settings="settings"/>
			</div>
		</p-tab>
	</p-tabs>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'settings-form',

		props: {
			section: {
				type: String,
				required: true
			}
		},

		computed: {
			...mapGetters({
				sections: 'settings/getSections'
			}),

			settings: function() {
				return this.sections[this.section] ? this.sections[this.section].items : {}
			},

			groups: function() {
				let settings = _.filter(this.settings, (setting) => Boolean(setting.gui))

				return _.groupBy(settings, 'group')
			},
		},

		methods: {
			...mapActions({
				setSection: 'settings/setSection'
			}),

			mapOptions(options) {
	            let mapped = []

	            for (let key in options) {
	                if (options.hasOwnProperty(key)) {
	                    mapped.push({
	                        label: options[key],
	                        value: key
	                    })
	                }
	            }

	            return mapped
	        },

			submit() {
				let formData = new FormData()
				formData.append('_method', 'PATCH')

				_.forEach(this.settings, (setting) =>
					formData.append(setting.handle, setting.value))

				axios.post(`/api/settings/${this.section}`, formData)
                    .then((response) => {
                        this.setSection({
                            handle: this.section,
                            section: response.data.data
                        })

                        toast('Settings have been updated.', 'success')
                    }).catch(error => {
                        toast(error.message, 'failed')
                    })
            },
		}
	}
</script>