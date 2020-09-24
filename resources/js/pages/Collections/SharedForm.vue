<template>
    <div class="collection-page">
        <portal to="actions">
            <div class="buttons">
                <ui-button v-if="collection.slug" :to="{ name: 'collection.index', params: {collection: collection.slug} }" variant="secondary">Go Back</ui-button>
                <ui-button type="submit" @click.prevent="$parent.submit" variant="primary" :disabled="!form.hasChanges">Save</ui-button>
            </div>
        </portal>

        <ui-card v-if="collection.show_name_field">
            <ui-card-body>
                <ui-title-group
                    class="mb-0"
                    name="name"
                    :label="collection.name_label || 'Name'"
                    autocomplete="off"
                    autofocus
                    required
                    :readonly="editSlug"
                    :placeholder="collection.name_label || 'Name'"
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name"
                    v-if="collection.show_name_field">
                </ui-title-group>
                
                <div class="entry-slug" v-if="form.slug">
                    <!-- <ui-tooltip class="entry-slug__info inline-block mr-1">
                        <template>
                            <span class="icon icon--info icon--xxs">
                                <fa-icon icon="question"></fa-icon>
                            </span>
                        </template>
                        <template slot="content">
                            <span>The slug is auto generated based on the name of this entry. You may manually edited the slug value.</span>
                        </template>
                    </ui-tooltip> -->

                    <div v-if="!editSlug" class="entry-slug__current">
                        <span class="entry-slug__label">Slug:</span> 
                        <span class="entry-slug__value">{{ form.slug }}</span>
                        <a href="#" class="entry-slug__action" @click.prevent="toggleEdit()">Edit</a>
                    </div>

                    <div v-if="editSlug" class="entry-slug__edit">
                        <label v-if="editSlug" class="entry-slug__label" for="edit-slug">Slug:</label>

                        <ui-slug
                            class="field--xs"
                            id="edit-slug"
                            name="edit_slug"
                            monospaced
                            autocomplete="off"
                            v-model="slugValue">
                        </ui-slug>

                        <a href="#" class="entry-slug__action" @click.prevent="saveSlug()">Apply</a>

                        <a href="#" class="entry-slug__action" @click.prevent="toggleEdit()">Cancel</a>
                    </div>
                </div>

                <ui-slug
                    v-if=" collection.show_name_field || entry.id"
                    type="hidden"
                    name="slug"
                    label="Slug"
                    monospaced
                    autocomplete="off"
                    required
                    :help="collection.show_name_field ? '' : 'This field is auto-generated based on pattern specified.'"
                    :watch="form.name"
                    :readonly="!collection.show_name_field"
                    :has-error="form.errors.has('slug')"
                    :error-message="form.errors.get('slug')"
                    v-model="form.slug">
                </ui-slug>
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


        <div class="card">
            <div class="card__body">
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
                <div v-for="field in section.fields">
                    <component
                        v-for="field in section.fields"
                        :key="field.handle"
                        :is="field.type.id + '-fieldtype'"
                        :field="field"
                        :has-error="form.errors.has(field.handle)"
                        :error-message="form.errors.get(field.handle)"
                        v-model="form[field.handle]">
                    </component>
                </div>
            </div>
        </div>

        <ui-definition-list v-if="entry">
            <ui-definition name="Status">
                <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': entry.status, 'text-danger-500': ! entry.status}"></fa-icon> {{ entry.status ? 'Enabled' : 'Disabled' }}
            </ui-definition>

            <ui-definition name="Created At">
                {{ $moment(entry.created_at).format('Y-MM-DD, hh:mm a') }}
            </ui-definition>

            <ui-definition name="Updated At">
                {{ $moment(entry.updated_at).format('Y-MM-DD, hh:mm a') }}
            </ui-definition>
        </ui-definition-list>
    </div>
</template>

<script>
    export default {
        props: {
            entry: {
                required: false
            },

            collection: {
                required: true,
            },

            form: {
                type: Object,
                required: true,
            }
        },

        data() {
            return {
                editSlug: false,
                slugValue: ''
            }
        },

        computed: {
            sections() {
                let body = []
                let sidebar = []

                body = _.filter(this.collection.blueprint.sections, (section) =>
                    section.placement == 'body')

                sidebar = _.filter(this.collection.blueprint.sections, (section) =>
                    section.placement == 'sidebar')

                return { body, sidebar }
            }
        },

        methods: {
            toggleEdit() {
                if (this.editSlug) {
                    this.slugValue = ''
                } else {
                    this.slugValue = this.form.slug
                }

                this.editSlug = !this.editSlug
            },

            saveSlug() {
                if (this.slugValue === '') {
                    this.slugValue = this.form.slug
                } else {
                    this.form.slug = this.slugValue
                }

                this.toggleEdit()
            }
        }
    }
</script>