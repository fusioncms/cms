<template>
	<form-container>
		<portal to="actions">
			<div class="buttons">
				<router-link :to="{ name: 'blueprints' }" class="button">Go Back</router-link>
				<button type="submit" @click.prevent="$parent.submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save</button>
			</div>
		</portal>

		<div class="card">
            <div class="card__body">
				<ui-title-group
                    name="name"
                    readonly
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
                </ui-title-group>

				<section-builder class="mt-6" v-model="form.sections"></section-builder>
			</div>
		</div>

		<template v-slot:sidebar>
			<ui-definition-list v-if="resource">
                <ui-definition name="Group">
                    {{ resource.group }}
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