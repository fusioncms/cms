<template>
    <div>
        <portal to="actions">
            <div class="buttons">
                <ui-button v-if="$mq != 'sm'" :to="{ name: 'dashboard' }" variant="secondary">Go Back</ui-button>
                <ui-button type="submit" @click.prevent="$parent.submit" variant="primary" :disabled="!form.hasChanges">Save</ui-button>
            </div>
        </portal>

        <portal to="sidebar-right">
            <sidebar v-if="single" id="single-sidebar">
                <sidebar-section id="single_panel_status" tabindex="-1">
                    <ui-toggle
                        name="status"
                        label="Status"
                        :help="form.status ? 'Toggle to disable this entry.' : 'Toggle to enable this entry.'"
                        v-model="form.status"
                        :true-value="1"
                        :false-value="0">
                    </ui-toggle>
                </sidebar-section>

                <sidebar-section v-for="(section) in sections.sidebar" :key="section.handle" :id="'single_panel_' + section.handle" :title="section.name" :description="section.description" tabindex="-1">
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

                <status-card v-if="entry" :entry="entry" id="single_panel_status_card" tabindex="-1"></status-card>
            </sidebar>
        </portal>

        <ui-card v-if="single.show_name_field" :id="'single_panel_' + single.handle" tabindex="-1">
            <ui-card-body>
                <ui-title-group
                    class="mb-0"
                    name="name"
                    :label="single.name_label || 'Name'"
                    autocomplete="off"
                    autofocus
                    required
                    :readonly="editSlug"
                    :placeholder="single.name_label || 'Name'"
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
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
                    v-if="entry.id"
                    type="hidden"
                    name="slug"
                    label="Slug"
                    monospaced
                    autocomplete="off"
                    required
                    :help="single.show_name_field ? '' : 'This field is auto-generated based on pattern specified.'"
                    :watch="form.name"
                    :readonly="!single.show_name_field"
                    :has-error="form.errors.has('slug')"
                    :error-message="form.errors.get('slug')"
                    v-model="form.slug">
                </ui-slug>
            </ui-card-body>
        </ui-card>

        <section-card v-for="section in sections.body" :key="section.handle" :id="'single_panel_' + section.handle" :title="section.name" :description="section.description" tabindex="-1">
            <component v-for="field in section.fields"
                :key="field.handle"
                :is="field.type.id + '-fieldtype'"
                :field="field"
                :errors="form.errors"
                v-model="form[field.handle]">
            </component>
        </section-card>
    </div>
</template>

<script>
    export default {
        props: {
            entry: {
                required: true
            },

            single: {
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

                body = _.filter(this.single.blueprint.sections, function(section) {
                    return section.placement == 'body'
                })

                sidebar = _.filter(this.single.blueprint.sections, function(section) {
                    return section.placement == 'sidebar'
                })

                return {
                    body: body,
                    sidebar: sidebar
                }
            },
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
                let vm = this
                this.$nextTick(() => {
                    vm.$refs.slug.$el.focus()
                })
            },

            editBtnFocus() {
                let vm = this
                this.$nextTick(() => {
                    vm.$refs.edit.$el.focus()
                })
            }
        }
    }
</script>