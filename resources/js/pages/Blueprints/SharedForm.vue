<template>
    <div>
	<portal to="actions">
	    <div class="buttons">
		<ui-button v-if="$mq != 'sm'" :to="{ name: 'blueprints' }" variant="secondary">Go Back</ui-button>
		<ui-button type="submit" @click.prevent="$parent.submit" variant="primary" :disabled="!form.hasChanges || loading">Save</ui-button>
	    </div>
	</portal>

        <portal to="sidebar-right">
            <div v-show="! loading">
                <sidebar id="blueprint-sidebar">
                    <status-card v-if="resource" :entry="resource" id="blueprint_panel_status_card" tabindex="-1"></status-card>
                </sidebar>
            </div>
        </portal>

        <section-card title="Loading..." v-show="loading"></section-card>
        <div v-show="! loading">
	    <div class="card">
                <div class="card__body">
		    <ui-title-group
                        name="name"
                        readonly
                        :has-error="form.errors.has('name')"
                        :error-message="form.errors.get('name')"
                        v-model="form.name">
                    </ui-title-group>

                    <blueprint :placements="placements" :form="form"></blueprint>
	        </div>
            </div>
	</div>
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
            },

           loading: {
               type: Boolean,
               required: false,
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