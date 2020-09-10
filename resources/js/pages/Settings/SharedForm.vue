<template>
	<div class="card">
		<div class="card__body">
<<<<<<< HEAD
			<p-tabs>
				<p-tab v-for="(section, i1) in group.blueprint.sections" :key="i1" :name="section.name" :active="i1 === 0">
=======
			<ui-tabs>
				<ui-tab v-for="(section, i1) in group.fieldset.sections" :key="i1" :name="section.name" :active="i1 === 0">
>>>>>>> f3e50ae019c256a50f3b87bb09f42f22e8c86a4a
					<div v-for="(field, i2) in fields(section.fields)" :key="i2" class="pb-5">
						<component
							v-if="field.settings.component"
							:is="field.settings.component"
							:settings="group.settings">
						</component>

						<component
							v-else
							:is="field.type.id + '-fieldtype'"
							:field="field"
							:errors="form.errors"
							v-model="form[field.handle]">
						</component>
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

		methods: {
			fields(values) {
				return _.filter(values, (value) => ! value.settings.hidden)
			}
		}
	}
</script>