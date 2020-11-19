<template>
    <div>
        <portal to="actions">
            <div class="buttons">
                <ui-button v-if="$mq != 'sm'" :to="{ name: 'fieldsets' }" variant="secondary">Go Back</ui-button>
                <ui-button type="submit" @click.prevent="submit" variant="primary" :disabled="!form.hasChanges">Save</ui-button>
            </div>
        </portal>

        <portal to="sidebar-right">
            <sidebar id="fieldset-sidebar">
                <sidebar-section id="fieldset_panel_status" tabindex="-1">
                    <ui-toggle
                        id="fieldset-status"
                        name="status"
                        label="Status"
                        :help="form.status ? 'Toggle to disable this fieldset.' : 'Toggle to enable this fieldset.'"
                        v-model="form.status"
                        :true-value="1"
                        :false-value="0">
                    </ui-toggle>
                </sidebar-section>

                <status-card
                    v-if="fieldset"
                    :entry="fieldset"
                    id="fieldset_panel_status_card"
                    tabindex="-1">
                </status-card>
            </sidebar>
        </portal>

        <section-card id="fieldset_panel_general" title="General Information" description="General information about your fieldset and what it manages." tabindex="-1">
            <div class="row">
                <div class="col w-full lg:w-1/2">
                    <ui-input-group
                        id="fieldset-name"
                        name="name"
                        label="Name"
                        help="What should this fieldset be called?"
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
                        id="fieldset-handle"
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
        </section-card>

        <section-card
            id="fieldset_panel_fields"
            :grid="false"
            title="Fields"
            description="Manage fields for this fieldset."
            tabindex="-1">

            <field-builder
                v-model="form.fields"
                handle="fieldset">
            </field-builder>
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
            form: {
                type: Object,
                required: true,
            },

            fieldset: {
                type: Object,
                required: false,
            },

            submit: {
                required: true,
            }
        },

        created() {
            this.$store.commit('fieldtypes/setExcluded', ['fieldset'])
        },

        destroyed() {
            this.$store.commit('fieldtypes/setExcluded', [])
        }
    }
</script>