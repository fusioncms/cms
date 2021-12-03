<template>
    <div>
        <portal to="actions">
            <div class="buttons">
                <ui-button :to="{ name: 'taxonomies' }" variant="secondary">Go Back</ui-button>
                <ui-button type="submit" @click.prevent="submit" variant="primary" :disabled="!form.hasChanges || loading">Save</ui-button>
            </div>
        </portal>

        <section-card title="Loading..." v-show="loading"></section-card>

        <portal to="sidebar-right">
            <div  v-show="! loading">
                <sidebar id="taxonomy-sidebar">
                    <sidebar-section id="matrix_panel_status" tabindex="-1">
                        <icon-picker
                            name="icon"
                            label="Icon"
                            placeholder="Search icons..."
                            help="Choose an icon that best represents your taxonomy."
                            :has-error="form.errors.has('icon')"
                            :error-message="form.errors.get('icon')"
                            required
                            v-model="form.icon">
                        </icon-picker>

                        <ui-toggle
                            name="sidebar"
                            label="Show in Sidebar"
                            v-model="form.sidebar"
                            :true-value="true"
                            :false-value="false">
                        </ui-toggle>
                    </sidebar-section>

                    <status-card v-if="taxonomy" :entry="taxonomy" id="taxonomy_panel_status_card" tabindex="-1"></status-card>
                </sidebar>
            </div>
        </portal>

        <div  v-show="! loading">
            <section-card id="taxonomy_panel_general" title="General Information" description="General information about this taxonomy and what it organizes.">
                <div class="row">
                    <div class="col w-full lg:w-1/2">
                        <ui-input-group
                            id="taxonomy-name"
                            name="name"
                            label="Name"
                            help="What should this taxonomy be called?"
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
                            id="taxonomy-handle"
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
                    id="taxonomy-description"
                    name="description"
                    label="Description"
                    help="Give a short description of what this taxonomy will manage and store."
                    autocomplete="off"
                    :has-error="form.errors.has('description')"
                    :error-message="form.errors.get('description')"
                    v-model="form.description">
                </ui-textarea-group>
            </section-card>

            <section-card id="taxonomy_panel_routing" title="Routing" description="Configure how terms within this taxonomy will be accessed on the frontend.">
                <ui-input-group
                    id="taxonomy-route"
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
                    id="taxonomy-template"
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

            <section-card id="taxonomy_panel_blueprint" :grid="false" title="Blueprint" description="Create the content blueprint for this taxonomy by adding panel sections and fields to either the page body or page sidebar." tabindex="-1">
                <blueprint :placements="placements" :form="form"></blueprint>
            </section-card>
        </div>
    </div>
</template>

<script>
 export default {
     data() {
         return {
             placements: [
                 { label: 'Body',    value: 'body'    },
                 { label: 'Sidebar', value: 'sidebar' },
             ]
         }
     },

     props: {
         form: {
             type: Object,
             required: true,
         },

         taxonomy: {
             type: Object,
             required: false,
         },

         submit: {
             required: true,
         },

         loading: {
             type: Boolean,
             required: false,
         }
     },

     created() {
         this.$store.commit('fieldtypes/setStructure', 'taxonomies')
     }
 }
</script>
