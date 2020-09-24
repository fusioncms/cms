<template>
	<form-container>
		<portal to="actions">
			<div class="buttons">
				<ui-button v-if="taxonomy.id" :to="{ name: 'terms.index', params: {taxonomy: taxonomy.id} }" variant="secondary">Go Back</ui-button>
				<ui-button type="submit" @click.prevent="submit" variant="primary" :disabled="!form.hasChanges">Save</ui-button>
			</div>
		</portal>

		<ui-card>
            <ui-card-body>
                <ui-input-group
                    name="name"
                    label="Name"
                    description="What should this term be called?"
                    autocomplete="off"
                    autofocus
                    required
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
                </ui-input-group>
            </ui-card-body>
        </ui-card>

        <section-card v-for="section in sections.body" :key="section.handle" :title="section.name" :description="section.description">
            <component
                class="form__group"
                v-for="field in section.fields"
                :key="field.handle"
                :is="field.type.id + '-fieldtype'"
                :field="field"
                :errors="form.errors"
                v-model="form[field.handle]">
            </component>
        </section-card>

		<template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <ui-slug-group
                        name="slug"
                        label="Slug"
                        monospaced
                        autocomplete="off"
                        required
                        :watch="form.name"
                        :has-error="form.errors.has('slug')"
                        :error-message="form.errors.get('slug')"
                        v-model="form.slug">
                    </ui-slug-group>

                    <ui-toggle
                        name="status"
                        label="Status"
                        v-model="form.status"
                        :true-value="1"
                        :false-value="0">
                    </ui-toggle>
                </div>
            </div>

			<div class="card" v-for="(section) in sections.sidebar" :key="section.handle">
                <div class="card__header">
                    <h3 class="card__title">{{ section.name }}</h3>
                    <p v-if="section.description" class="card__subtitle">{{ section.description }}</p>
                </div>

                <div class="card__body">
                    <component
                        class="form__group"
                        v-for="field in section.fields"
                        :key="field.handle"
                        :is="field.type.id + '-fieldtype'"
                        :field="field"
                        :errors="form.errors"
                        v-model="form[field.handle]">
                    </component>
                </div>
            </div>

			<ui-definition-list v-if="term">
                <ui-definition name="Status">
                    <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': term.status, 'text-danger-500': ! term.status}"></fa-icon> {{ term.status ? 'Enabled' : 'Disabled' }}
                </ui-definition>

                <ui-definition name="Created At">
                    {{ $moment(term.created_at).format('Y-MM-DD, hh:mm a') }}
                </ui-definition>

                <ui-definition name="Updated At">
                    {{ $moment(term.updated_at).format('Y-MM-DD, hh:mm a') }}
                </ui-definition>
            </ui-definition-list>
		</template>
	</form-container>
</template>

<script>
	export default {
		props: {
			taxonomy: {
				type: Object,
				required: true,
			},

			term: {
				required: false,
			},

			form: {
				type: Object,
				required: true,
			},

			submit: {
				required: true,
			},
		},

		computed: {
			sections() {
                let body = []
                let sidebar = []

                body = _.filter(this.taxonomy.blueprint.sections, function(section) {
                    return section.placement == 'body'
                })

                sidebar = _.filter(this.taxonomy.blueprint.sections, function(section) {
                    return section.placement == 'sidebar'
                })

                return {
                    body: body,
                    sidebar: sidebar
                }
            },
		}
	}
</script>