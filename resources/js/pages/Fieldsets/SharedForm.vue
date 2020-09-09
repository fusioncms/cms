<template>
	<form-container>
		<portal to="actions">
			<div class="buttons">
				<ui-button :to="{ name: 'fieldsets' }" variant="secondary">Go Back</ui-button>
				<ui-button type="submit" variant="primary" @click.prevent="$parent.submit" :disabled="!form.hasChanges">Save</ui-button>
			</div>
		</portal>

		<div class="card">
            <div class="card__body">
				<ui-title-group
                    name="name"
                    autocomplete="off"
                    autofocus
                    required
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
                </ui-title-group>

				<section-builder class="mt-6" v-model="form.sections"></section-builder>
			</div>
		</div>

		<template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
					<ui-slug-group
						name="handle"
						label="Handle"
						autocomplete="off"
						required
						delimiter="_"
						:watch="form.name"
						:has-error="form.errors.has('handle')"
						:error-message="form.errors.get('handle')"
						v-model="form.handle">
					</ui-slug-group>
				</div>
            </div>

			<ui-definition-list v-if="resource">
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
        props: {
            resource: {
                type: Object,
                required: false,
                default: () => {}
            },

            form: {
                type: Object,
                required: true,
            }
        }
    }
</script>