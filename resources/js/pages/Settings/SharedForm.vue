<template>
	<form-container>
        <portal to="actions">
            <div class="buttons">
                <router-link :to="{ name: 'settings' }" class="button">Go Back</router-link>
                <button type="submit" @click.prevent="$parent.submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save</button>
            </div>
        </portal>

        <div class="card">
            <div class="card__body">
				<p-tabs>
					<p-tab v-for="(section, i1) in group.fieldset.sections" :key="i1" :name="section.name" :active="i1 === 0">
						<div v-for="(field, i2) in section.fields" :key="i2">
			                <component
								v-if="field.settings.component"
								:is="field.settings.default"
								:settings="group.settings">
							</component>

							<component
								v-else
			                    :is="field.type.id + '-fieldtype'"
			                    :field="field"
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
		}
	}
</script>