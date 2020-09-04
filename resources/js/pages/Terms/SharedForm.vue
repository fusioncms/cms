<template>
	<form-container>
		<portal to="actions">
			<div class="buttons">
				<router-link v-if="taxonomy.id" :to="{ name: 'terms.index', params: {taxonomy: taxonomy.id} }" class="button">Go Back</router-link>
				<button type="submit" @click.prevent="submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save</button>
			</div>
		</portal>

        <p-card>
            <p-card-body>
                <p-input
                    name="name"
                    label="Name"
                    description="What should this term be called?"
                    autocomplete="off"
                    autofocus
                    required
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
                </p-input>
            </p-card-body>
        </p-card>

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
                    <p-slug
                        name="slug"
                        label="Slug"
                        monospaced
                        autocomplete="off"
                        required
                        :watch="form.name"
                        :has-error="form.errors.has('slug')"
                        :error-message="form.errors.get('slug')"
                        v-model="form.slug">
                    </p-slug>

                    <p-toggle
                        name="status"
                        label="Status"
                        v-model="form.status"
                        :true-value="1"
                        :false-value="0">
                    </p-toggle>
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

			<p-definition-list v-if="term">
                <p-definition name="Status">
                    <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': term.status, 'text-danger-500': ! term.status}"></fa-icon> {{ term.status ? 'Enabled' : 'Disabled' }}
                </p-definition>

                <p-definition name="Created At">
                    {{ $moment(term.created_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>

                <p-definition name="Updated At">
                    {{ $moment(term.updated_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>
            </p-definition-list>
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