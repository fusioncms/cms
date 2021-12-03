<template>
    <div>
        <portal to="actions">
            <div class="buttons">
                <ui-button v-if="collection.slug && $mq != 'sm'" :to="{ name: 'collection.index', params: {collection: collection.slug} }" variant="secondary">Go Back</ui-button>
                <ui-button type="submit" @click.prevent="$parent.submit" variant="primary" :disabled="!form.hasChanges || loading">Save</ui-button>
            </div>
        </portal>

        <section-card title="Loading..." v-show="loading"></section-card>
        <portal to="sidebar-right">
            <div v-show="! loading">
                <sidebar v-if="collection" id="collection-sidebar">
                    <sidebar-section id="collection_panel_status" tabindex="-1">
                        <ui-toggle
                            name="status"
                            label="Status"
                            :help="form.status ? 'Toggle to disable this entry.' : 'Toggle to enable this entry.'"
                            v-model="form.status"
                            :true-value="true"
                            :false-value="false">
                        </ui-toggle>

                        <ui-flatpickr-group
                            v-model="form.publish_at"
                            name="publish_at"
                            id="publish_at"
                            label="Publish Date"
                            :with-time="true"
                            :has-error="form.errors.has('publish_at')"
                            :error-message="form.errors.get('publish_at')">
                        </ui-flatpickr-group>

                        <ui-flatpickr-group
                            v-model="form.expire_at"
                            name="expire_at"
                            id="expire_at"
                            label="Expiry Date"
                            :with-time="true"
                            :has-error="form.errors.has('expire_at')"
                            :error-message="form.errors.get('expire_at')">
                        </ui-flatpickr-group>
                    </sidebar-section>

                    <sidebar-section
                        v-for="section in sections.sidebar"
                        v-if="section.fields.length > 0"
                        :key="section.handle"
                        :id="'collection_panel_' + section.handle"
                        :title="section.name"
                        :description="section.description"
                        tabindex="-1">

                        <component
                            v-for="field in section.fields"
                            :key="field.handle"
                            :is="field.type.id + '-fieldtype'"
                            :field="field"
                            :has-error="form.errors.has(field.handle)"
                            :error-message="form.errors.get(field.handle)"
                            v-model="form[field.handle]">
                        </component>
                    </sidebar-section>

                    <status-card v-if="entry" id="collection_panel_status_card" :entry="entry" tabindex="-1"></status-card>
                </sidebar>
            </div>
        </portal>

        <div v-show="! loading">
            <ui-card v-if="collection.show_name_field" :id="'collection_panel_' + collection.handle" tabindex="-1">
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

                            <ui-button ref="edit" class="entry-slug__action" size="xsmall" @click.prevent="openEdit()">Edit</ui-button>
                        </div>

                        <div v-if="editSlug" class="entry-slug__edit">
                            <label v-if="editSlug" class="entry-slug__label" for="edit-slug">Slug:</label>

                            <ui-slug
                                ref="slug"
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

            <section-card
                v-for="section in sections.body"
                v-if="section.fields.length > 0"
                :key="section.handle"
                :id="'collection_panel_' + section.handle"
                :title="section.name"
                :description="section.description"
                tabindex="-1">

                <component v-for="field in section.fields"
                           :key="field.handle"
                           :is="field.type.id + '-fieldtype'"
                           :field="field"
                           :errors="form.errors"
                           v-model="form[field.handle]">
                </component>
            </section-card>
        </div>
    </div>
</template>

<script>
import Flatpickr from '../../ui/Flatpickr/Flatpickr.vue'
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
            },

            loading: {
                type: Boolean,
                required: false,
            }
        },

        data() {
            return {
                editSlug: false,
                slugValue: '',
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
                this.slugFocus()
            },

            closeEdit() {
                this.slugValue = ''
                this.editSlug = false
                this.editBtnFocus()
            },

            saveSlug() {
                if (this.slugValue === '') {
                    this.slugValue = this.form.slug
                } else {
                    this.form.slug = this.slugValue
                }

                this.closeEdit()
            },

            slugFocus() {
                this.$nextTick(() => {
                    this.$refs.slug.$el.focus()
                })
            },

            editBtnFocus() {
                this.$nextTick(() => {
                    this.$refs.edit.$el.focus()
                })
            }
        },
    }
</script>