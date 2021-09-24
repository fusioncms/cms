<template>
	<form-container>
		<portal to="actions">
			<div class="buttons">
				<ui-button v-if="$mq != 'sm'" :to="{ name: 'blueprints' }" variant="secondary">Go Back</ui-button>
				<ui-button type="submit" @click.prevent="$parent.submit" variant="primary" :disabled="!form.hasChanges">Save</ui-button>
			</div>
		</portal>

        <portal to="sidebar-right">
            <sidebar id="blueprint-sidebar">
                <status-card v-if="resource" :entry="resource" id="blueprint_panel_status_card" tabindex="-1"></status-card>
            </sidebar>
        </portal>

		<div class="card">
            <div class="card__body">
				<ui-title-group
                    name="name"
                    readonly
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
                </ui-title-group>

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

                    <portal to="modals">
                        <ui-modal name="delete_section" title="Delete" >
                            <p>Are you sure you want to permenantly delete this section and related fields?</p>

                            <template slot="footer">
                                <ui-button v-modal:delete_section @click="remove" variant="danger" class="ml-3">Delete</ui-button>
                                <ui-button v-modal:delete_section variant="secondary">Cancel</ui-button>
                            </template>
                        </ui-modal>
                    </portal>

                </blueprint>
			</div>
		</div>
	</form-container>
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

        methods: {
            remove() {
                const index = this.$store.getters['blueprint/getRemoveIndex'];
                if (this.form.sections.length > 0)
                    this.form.sections.splice(index, 1);
            },
        },

        created() {
            this.$store.commit('fieldtypes/setStructure', this.resource.structure.toLowerCase())
        }
    }
</script>