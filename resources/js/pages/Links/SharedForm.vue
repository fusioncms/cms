<template>
    <div>
	<portal to="actions">
	    <div class="buttons">
                <ui-button v-if="navigation.id && $mq != 'sm'" :to="{ name: 'links', params: {navigation: navigation.id} }" variant="secondary">Go Back</ui-button>
		<ui-button type="submit" @click.prevent="submit" variant="primary" :disabled="!form.hasChanges || loading">Save</ui-button>
	    </div>
	</portal>

        <section-card title="Loading..." v-show="loading"></section-card>
        <div v-show="! loading">
            <portal to="sidebar-right">
                <sidebar id="link-sidebar">
                    <sidebar-section id="link_panel_status" tabindex="-1">
                        <ui-toggle
                            name="status"
                            label="Status"
                            :help="form.status ? 'Toggle to disable this link.' : 'Toggle to enable this link.'"
                            v-model="form.status"
                            :true-value="1"
                            :false-value="0">
                        </ui-toggle>

                        <ui-select-group
                            name="new_window"
                            label="Open link where"
                            help="Determine where the link should open."
                            :options="[
                                {
                                    'label': 'New Window',
                                    'value': 1,
                                },
                                {
                                    'label': 'Same Window',
                                    'value': 0,
                                },
                            ]"
                            v-model="form.new_window">
                        </ui-select-group>
                    </sidebar-section>
                </sidebar>
            </portal>

            <ui-card id="link_panel" tabindex="-1">
                <ui-card-body>
                    <ui-title-group
                        name="name"
                        label="Name"
                        autocomplete="off"
                        autofocus
                        required
                        :has-error="form.errors.has('name')"
                        :error-message="form.errors.get('name')"
                        v-model="form.name">
                    </ui-title-group>

                    <ui-input-group
                        name="url"
                        label="URL"
                        help="The URL of the link."
                        autocomplete="off"
                        :has-error="form.errors.has('url')"
                        :error-message="form.errors.get('url')"
                        v-model="form.url">
                    </ui-input-group>
                </ui-card-body>
            </ui-card>

            <section-card
                v-for="section in sections.body"
                :key="section.handle"
                :id="'collection_panel_' + section.handle"
                :title="section.name"
                :description="section.description"
                tabindex="-1">

                <div v-if="section.fields.length > 0">
                    <component v-for="field in section.fields"
                               :key="field.handle"
                               :is="field.type.id + '-fieldtype'"
                               :field="field"
                               :errors="form.errors"
                               v-model="form[field.handle]">
                    </component>
                </div>
            </section-card>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            link: {
                type: Object,
                default: function() {
                    return {}
                }
            },

            links: {
                type: Array,
                required: true,
            },

            navigation: {
                type: Object,
                required: true,
            },

            form: {
                type: Object,
                required: true,
            },

            submit: {
                required: true,
            },

           loading: {
               type: Boolean,
               required: false,
           }
        },

        computed: {
            sections() {
                let body = []
                let sidebar = []

                if (this.navigation.blueprint) {
                    body = _.filter(this.navigation.blueprint.sections, function(section) {
                        return section.placement == 'body'
                    })

                    sidebar = _.filter(this.navigation.blueprint.sections, function(section) {
                        return section.placement == 'sidebar'
                    })
                }

                return {
                    body: body,
                    sidebar: sidebar
                }
            },

            fields() {
                let body = []
                let sidebar = []

                if (this.navigation.blueprint) {
                    body = _.filter(this.navigation.blueprint.sections, function(section) {
                        return section.placement == 'body'
                    })

                    body = _.flatMap(body, function(section) {
                        return section.fields
                    })

                    sidebar = _.filter(this.navigation.blueprint.sections, function(section) {
                        return section.placement == 'sidebar'
                    })

                    sidebar = _.flatMap(sidebar, function(section) {
                        return section.fields
                    })
                }

                return {
                    body: body,
                    sidebar: sidebar
                }
            }
        },
    }
</script>