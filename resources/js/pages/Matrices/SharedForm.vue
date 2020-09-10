<template>
    <form-container>
        <portal to="actions">
            <div class="buttons">
                <ui-button :to="{ name: 'matrices' }" variant="secondary">Go Back</ui-button>
                <ui-button type="submit" @click.prevent="submit" variant="primary" :disabled="!form.hasChanges">Save</ui-button>
            </div>
        </portal>

        <section-card title="General Information" description="General information about your collection and what it manages.">
            <ui-input-group
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

            <ui-textarea-group
                name="description"
                label="Description"
                help="Give a short description of what this matrix will manage and store."
                autocomplete="off"
                :has-error="form.errors.has('description')"
                :error-message="form.errors.get('description')"
                v-model="form.description">
            </ui-textarea-group>

            <ui-select-group
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
        </section-card>

        <section-card title="Customizations" description="Configure the various customizations options.">
            <ui-input-group
                name="name_label"
                label="Name Label"
                placeholder="Name"
                help="If you'd like, you may customize the label used for your entry names."
                :has-error="form.errors.has('name_label')"
                :error-message="form.errors.get('name_label')"
                v-model="form.name_label">
            </ui-input-group>

            <ui-input-group
                name="reference_singular"
                label="Singular Reference"
                :placeholder="singularReference"
                help="What would you like to reference this as in singular form? By default will try to guess from the name. Results may vary."
                :has-error="form.errors.has('reference_singular')"
                :error-message="form.errors.get('reference_singular')"
                v-model="form.reference_singular">
            </ui-input-group>

            <ui-input-group
                name="reference_plural"
                label="Plural Reference"
                :placeholder="pluralReference"
                help="What would you like to reference this as in plural form? By default will try to guess from the name. Results may vary."
                :has-error="form.errors.has('reference_plural')"
                :error-message="form.errors.get('reference_plural')"
                v-model="form.reference_plural">
            </ui-input-group>

            <hr>

            <ui-toggle
                v-if="form.type == 'collection'"
                name="show_name_field"
                label="Show name field"
                v-model="form.show_name_field"
                :true-value="1"
                :false-value="0">
            </ui-toggle>

            <ui-input-group
                v-if="!form.show_name_field"
                monospaced
                name="name_format"
                label="Name Format"
                help="What format would you like your generated names and slugs to follow?"
                :has-error="form.errors.has('name_format')"
                :error-message="form.errors.get('name_format')"
                v-model="form.name_format">
            </ui-input-group>
        </section-card>

        <section-card title="Routing" description="Configure how entries within the collection will be accessed on the frontend.">
            <ui-input-group
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

        <template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <ui-slug-group
                        name="handle"
                        label="Handle"
                        monospaced
                        autocomplete="off"
                        required
                        delimiter="_"
                        :watch="form.name"
                        :has-error="form.errors.has('handle')"
                        :error-message="form.errors.get('handle')"
                        v-model="form.handle">
                    </ui-slug-group>

                    <ui-select-group
                        name="parent_id"
                        label="Parent Matrix"
                        help="Should this matrix belong to another?"
                        :options="parentOptions"
                        :has-error="form.errors.has('parent_id')"
                        :error-message="form.errors.get('parent_id')"
                        v-model="form.parent_id">
                    </ui-select-group>

                    <ui-toggle
                        name="status"
                        label="Status"
                        v-model="form.status"
                        :true-value="1"
                        :false-value="0">
                    </ui-toggle>
                </div>
            </div>

            <div class="card">
                <div class="card__body">
                    <icon-picker
                        name="icon"
                        label="Icon"
                        placeholder="Search icons..."
                        help="Choose an icon that best represents your matrix."
                        :has-error="form.errors.has('icon')"
                        :error-message="form.errors.get('icon')"
                        required
                        v-model="form.icon">
                    </icon-picker>

                    <ui-toggle
                        name="sidebar"
                        label="Show in Sidebar"
                        v-model="form.sidebar"
                        :true-value="1"
                        :false-value="0">
                    </ui-toggle>

                    <ui-toggle
                        name="quicklink"
                        label="Show as Quicklink"
                        v-model="form.quicklink"
                        :true-value="1"
                        :false-value="0">
                    </ui-toggle>
                </div>
            </div>

            <ui-definition-list v-if="matrix">
                <ui-definition name="Status">
                    <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': matrix.status, 'text-danger-500': ! matrix.status}"></fa-icon> {{ matrix.status ? 'Enabled' : 'Disabled' }}
                </ui-definition>

                <ui-definition name="Created At">
                    {{ $moment(matrix.created_at).format('Y-MM-DD, hh:mm a') }}
                </ui-definition>

                <ui-definition name="Updated At">
                    {{ $moment(matrix.updated_at).format('Y-MM-DD, hh:mm a') }}
                </ui-definition>
            </ui-definition-list>
        </template>
    </form-container>
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