<template>
    <div class="matrix-page">
        <portal to="actions">
            <div class="buttons">
                <ui-button v-if="$mq != 'sm'" :to="{ name: 'matrices' }" variant="secondary">Go Back</ui-button>
                <ui-button type="submit" @click.prevent="submit" variant="primary" :disabled="!form.hasChanges">Save</ui-button>
            </div>
        </portal>

        <portal to="sidebar-right">
            <sidebar id="matrix-sidebar">
                <sidebar-section id="matrix_panel_status" tabindex="-1">
                    <ui-toggle
                        id="matrix-status"
                        name="status"
                        label="Status"
                        :help="form.status ? 'Toggle to disable this matrix.' : 'Toggle to enable this matrix.'"
                        v-model="form.status"
                        :true-value="1"
                        :false-value="0">
                    </ui-toggle>
                </sidebar-section>

                <sidebar-section id="matrix_panel_appearance" title="Appearance" description="Choose where to show this matrix and how to represent it." tabindex="-1">
                    <ui-toggle
                        id="matrix-sidebar-show"
                        name="sidebar"
                        label="Show in Sidebar"
                        v-model="form.sidebar"
                        :true-value="1"
                        :false-value="0">
                    </ui-toggle>

                    <ui-toggle
                        id="matrix-quicklink-show"
                        name="quicklink"
                        label="Show as Quicklink"
                        v-model="form.quicklink"
                        :true-value="1"
                        :false-value="0">
                    </ui-toggle>

                    <icon-picker
                        id="matrix-icon"
                        name="icon"
                        label="Icon"
                        placeholder="Search icons..."
                        help="Choose an icon that best represents your matrix."
                        :has-error="form.errors.has('icon')"
                        :error-message="form.errors.get('icon')"
                        required
                        v-model="form.icon">
                    </icon-picker>
                </sidebar-section>

                <status-card v-if="matrix" :entry="matrix" id="matrix_panel_status_card" tabindex="-1"></status-card>
            </sidebar>
        </portal>

        <section-card id="matrix_panel_general" title="General Information" description="General information about your collection and what it manages." tabindex="-1">
            <div class="row">
                <div class="col w-full lg:w-1/2">
                    <ui-input-group
                        id="matrix-name"
                        name="name"
                        label="Name"
                        help="What should this matrix be called?"
                        autocomplete="off"
                        autofocus
                        required
                        :has-error="form.errors.has('name')"
                        :error-message="form.errors.get('name')"
                        v-model="form.name">
                    </ui-input-group>
                </div>
                <div class="col w-full lg:w-1/2">
                    <ui-slug-group
                        id="matrix-handle"
                        name="handle"
                        label="Handle"
                        help="A developer-friendly identifier."
                        monospaced
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

            <ui-textarea-group
                id="matrix-description"
                name="description"
                label="Description"
                help="Give a short description of what this matrix will manage and store."
                autocomplete="off"
                :has-error="form.errors.has('description')"
                :error-message="form.errors.get('description')"
                v-model="form.description">
            </ui-textarea-group>


            <ui-select-group
                id="matrix-type"
                name="type"
                label="Type"
                help="What type of matrix will this be?"
                :options="[
                    {
                        'label': 'Collection',
                        'value': 'collection',
                    },
                    {
                        'label': 'Single',
                        'value': 'single',
                    },
                ]"
                :has-error="form.errors.has('type')"
                :error-message="form.errors.get('type')"
                v-model="form.type">
            </ui-select-group>

            <ui-select-group
                id="matrix-parent-id"
                name="parent_id"
                label="Parent Matrix"
                help="Should this matrix belong to another?"
                :options="parentOptions"
                :has-error="form.errors.has('parent_id')"
                :error-message="form.errors.get('parent_id')"
                v-model="form.parent_id">
            </ui-select-group>
        </section-card>

        <section-card id="matrix_panel_customizations" title="Customizations" description="Configure the various customizations options." tabindex="-1">
            <ui-input-group
                id="matrix-name-label"
                name="name_label"
                label="Name Label"
                placeholder="Name"
                help="If you'd like, you may customize the label used for your entry names."
                :has-error="form.errors.has('name_label')"
                :error-message="form.errors.get('name_label')"
                v-model="form.name_label">
            </ui-input-group>

            <ui-input-group
                id="matrix-reference-singular"
                name="reference_singular"
                label="Singular Reference"
                :placeholder="singularReference"
                help="What would you like to reference this as in singular form? By default will try to guess from the name. Results may vary."
                :has-error="form.errors.has('reference_singular')"
                :error-message="form.errors.get('reference_singular')"
                v-model="form.reference_singular">
            </ui-input-group>

            <ui-input-group
                id="matrix-reference-plural"
                name="reference_plural"
                label="Plural Reference"
                :placeholder="pluralReference"
                help="What would you like to reference this as in plural form? By default will try to guess from the name. Results may vary."
                :has-error="form.errors.has('reference_plural')"
                :error-message="form.errors.get('reference_plural')"
                v-model="form.reference_plural">
            </ui-input-group>

            <ui-toggle
                v-if="form.type == 'collection'"
                id="matrix-show-name-field"
                name="show_name_field"
                label="Show name field"
                :help="!form.show_name_field ? 'Auto-generate a name using the format in the field below.' : 'Include a name field on this matrix.'"
                v-model="form.show_name_field"
                :true-value="1"
                :false-value="0">
            </ui-toggle>

            <ui-input-group
                v-if="!form.show_name_field"
                monospaced
                id="matrix-name-format"
                name="name_format"
                label="Name Format"
                help="What format would you like your generated names and slugs to follow?"
                required
                :has-error="form.errors.has('name_format')"
                :error-message="form.errors.get('name_format')"
                v-model="form.name_format">
            </ui-input-group>
        </section-card>

        <section-card id="matrix_panel_routing" title="Routing" description="Configure how entries within the collection will be accessed on the frontend." tabindex="-1">
            <ui-input-group
                id="matrix-route"
                name="route"
                label="Route"
                help="When the URI matches this pattern..."
                autocomplete="off"
                monospaced
                :has-error="form.errors.has('route')"
                :error-message="form.errors.get('route')"
                v-model="form.route">
            </ui-input-group>

            <ui-input-group
                id="matrix-template"
                name="template"
                label="Template"
                help="Render this template"
                autocomplete="off"
                monospaced
                :has-error="form.errors.has('template')"
                :error-message="form.errors.get('template')"
                v-model="form.template">
            </ui-input-group>
        </section-card>

        <section-card id="matrix_panel_blueprint" title="Blueprint" description="Configure this matrix' blueprint." tabindex="-1">
            <section-builder v-model="form.sections"></section-builder>
        </section-card>
    </div>
</template>

<script>
    import pluralize from 'pluralize'

    export default {
        props: {
            id: {
                type: Number,
                required: false,
                default: 0
            },

            form: {
                type: Object,
                required: true,
            },

            matrix: {
                type: Object,
                required: false,
            },

            submit: {
                required: true,
            },

            matrices: {
                required: true,
            },
        },

        computed: {
            singularReference() {
                return pluralize.singular(this.form.name)
            },

            pluralReference() {
                return pluralize(this.form.name)
            },

            parentOptions() {
                let options = _.map(this.matrices, (item) => {
                    return {
                        'label': item.name,
                        'value': item.id
                    }
                })

                options = _.remove(options, (item) => this.id == item.id)

                options.unshift({ 'label': 'None', 'value': null })

                return options
            }
        },

        watch: {
            '$parent.form.type'(value) {
                if (value == 'single') {
                    this.$parent.form.show_name_field = true
                }
            }
        }
    }
</script>