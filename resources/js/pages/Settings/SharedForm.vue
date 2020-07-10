<template>
	<form-container>
        <div class="card">
            <div class="card__body">
				<p-tabs>
					<p-tab v-for="(section, i1) in group.fieldset.sections" :key="i1" :name="section.name" :active="i1 === 0">
						<div v-for="(field, i2) in gui(section.fields)" :key="i2" class="pb-5">
			                <component
								v-if="field.settings.component"
								:is="field.settings.component"
								:settings="group.settings">
							</component>

							<component
								v-else
			                    :is="field.type.id + '-fieldtype'"
			                    :field="field"
			                    :has-error="form.errors.has(field.handle)"
			                    :error-message="form.errors.get(field.handle)"
			                    v-model="form[field.handle]">
			                </component>
						</div>
					</p-tab>
				</p-tabs>
			</div>
		</div>
	</form-container>
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

		methods: {
			gui(values) {
				return _.filter(values, (value) => value.settings.gui)
			}
		}
	}
</script>