<template>
    <div class="card">
	<div class="card__body">
	    <ui-tabs>
		<ui-tab v-for="(section, i1) in group.blueprint.sections" :key="i1" :name="section.name" :active="i1 === 0">
		    <div v-for="(field, i2) in fields(section.fields)" :key="i2" class="pb-5">
			<component
			    v-if="field.settings.component"
			    :is="field.settings.component"
			    :field="field"
			    v-model="form[field.handle]">
			</component>

			<component
			    v-else
			    :is="field.type.id + '-fieldtype'"
			    :field="field"
			    :errors="form.errors"
			    v-model="form[field.handle]">
			</component>
		    </div>

                    <div v-if="group.blueprint.name === 'Mail' && section.name === 'General' ">
                        <div class="form-group">
                            <label for="mail_server-field" class="label">Test Email</label>
                            <input v-model="test_email" id="mail_server-field" type="text" class="col field field--input">
                            <div class="form-group__messages">
                                <div class="help">Email to send test to.</div>
                            </div>
                        </div>
                        <button @click="sendTest" type="submit" class="button button--primary">Send Test</button>
                    </div>

		</ui-tab>
	    </ui-tabs>
	</div>
    </div>
</template>

<script>
 export default {
     props: {
	 form: {
	     type: Object,
	     required: true
	 },

	 group: {
	     type: Object,
	     required: true
	 }
     },

     data() {
         return {
             test_email: ''
         }
     },

     methods: {
	 fields(values) {
	     return _.filter(values, (value) => ! value.settings.hidden)
	 },

         sendTest() {
             axios.post(`/api/settings/send/${this.test_email}`)
                  .then((response) => {
                      toast('Test has been sent.', 'success')
                  }).catch((response) => {
                      toast(response.response.data.message, 'failed')
                  });
         },
     },
 }
</script>
