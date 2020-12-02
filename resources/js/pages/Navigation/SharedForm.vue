<template>
    <div>
        <portal to="actions">
            <div class="buttons">
                <ui-button :to="{ name: 'navigation' }" variant="secondary">Go Back</ui-button>
                <ui-button type="submit" @click.prevent="$parent.submit" variant="primary" :disabled="!form.hasChanges">Save</ui-button>
            </div>
        </portal>

        <section-card id="navigation_panel_general" title="General Information" description="General information about your navigation menu and what it manages." tabindex="-1">
            <div class="row">
                <div class="col w-full lg:w-1/2">
                    <ui-input-group
                        id="navigation-name"
                        name="name"
                        label="Name"
                        help="What should this navigation menu be called?"
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
                        id="navigation-handle"
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
                id="navigation-description"
                name="description"
                label="Description"
                help="Give a short description of what this navigation menu will manage and store."
                autocomplete="off"
                :has-error="form.errors.has('description')"
                :error-message="form.errors.get('description')"
                v-model="form.description">
            </ui-textarea-group>
        </section-card>

        <section-card title="Blueprint" description="Configure this navigation's blueprint.">
            <blueprint>
                <blueprint-area
                    v-model="form.sections"
                    :placements="placements"
                    area="body"
                    title="Body">
                </blueprint-area>

                <blueprint-area
                    v-model="form.sections"
                    class="blueprint__col--sidebar"
                    :placements="placements"
                    area="sidebar"
                    title="Sidebar">
                </blueprint-area>
            </blueprint>
        </section-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                placements: [
                    { label: 'Body',    value: 'body'    },
                    { label: 'Sidebar', value: 'sidebar' }
                ]
            }
        },

        props: {
            resource: {
                type: Object,
                required: false,
                default: () => {}
            },

            form: {
                type: Object,
                required: true,
            }
        },

        created() {
            this.$store.commit('fieldtypes/setStructure', 'navigation')
        }
    }
</script>