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
                    <div v-if="!editSlug" class="entry-slug__current">
                        <span class="entry-slug__label">Slug:</span> 

                        <span class="entry-slug__value">{{ form.slug }}</span>

                        <ui-button class="entry-slug__action" size="xsmall" @click.prevent="openEdit()">Edit</ui-button>
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

                        <ui-button class="entry-slug__action" variant="primary" size="xsmall" @click.prevent="saveSlug()">Apply</ui-button>

                        <ui-button class="entry-slug__action" variant="secondary" size="xsmall" @click.prevent="closeEdit()">Cancel</ui-button>
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
            <component v-for="field in section.fields"
                :key="field.handle"
                :is="field.type.id + '-fieldtype'"
                :field="field"
                :errors="form.errors"
                v-model="form[field.handle]">
            </component>
        </section-card>

        <section-card title="Settings" description="Settings and configurations for this entry.">
            <ui-toggle
                name="status"
                label="Status"
                :help="form.status ? 'Toggle to disable this entry.' : 'Toggle to enable this entry.'"
                v-model="form.status"
                :true-value="1"
                :false-value="0">
            </ui-toggle>

            <hr v-if="entry">

            <dl v-if="entry" class="detail-list">
                <dt>Created</dt>
                <dd><ui-datetime :timestamp="entry.created_at"></ui-datetime></dd>

                <dt>Last Updated</dt>
                <dd><ui-datetime :timestamp="entry.updated_at"></ui-datetime></dd>
            </dl>
        </section-card>

        <section-card v-for="(section) in sections.sidebar" :key="section.handle" :title="section.name" :description="section.description">
            <component
                v-for="field in section.fields"
                :key="field.handle"
                :is="field.type.id + '-fieldtype'"
                :field="field"
                :has-error="form.errors.has(field.handle)"
                :error-message="form.errors.get(field.handle)"
                v-model="form[field.handle]">
            </component>
        </section-card>
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
            openEdit() {
                this.slugValue = this.form.slug
                this.editSlug = true
            },

            closeEdit() {
                this.slugValue = ''
                this.editSlug = false
            },

            saveSlug() {
                if (this.slugValue === '') {
                    this.slugValue = this.form.slug
                } else {
                    this.form.slug = this.slugValue
                }

                this.closeEdit()
            }
        }
    }
</script>