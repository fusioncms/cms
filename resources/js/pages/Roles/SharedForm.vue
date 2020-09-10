<template>
	<form-container>
        <portal to="actions">
            <div class="buttons">
                <ui-button :to="{ name: 'roles' }" variant="secondary">Go Back</ui-button>
                <ui-button type="submit" @click.prevent="submit" variant="primary" :disabled="!form.hasChanges">Save</ui-button>
            </div>
        </portal>

        <section-card title="General Information" description="General information about this role and what it can manage.">
            <ui-input-group
                name="label"
                label="Name"
                description="What should this role be called?"
                autocomplete="off"
                autofocus
                required
                :has-error="form.errors.has('label')"
                :error-message="form.errors.get('label')"
                v-model="form.label">
            </ui-input-group>

            <ui-textarea-group
                name="description"
                label="Description"
                autocomplete="off"
                :has-error="form.errors.has('description')"
                :error-message="form.errors.get('description')"
                v-model="form.description"
                :rows="2">
            </ui-textarea-group>
        </section-card>

        <section-card title="Permissions" description="Configure which permissions this role has." v-if="hasPermissions(form.name)">
            <ui-table ref="permissions" id="permissions" endpoint="/datatable/permissions" sort-by="name" no-actions key="permissions_table" show-page-status show-page-numbers show-page-nav show-page-ends>
                <template slot="name" slot-scope="table">
                    <ui-checkbox :id="table.record.name" name="permissions" :native-value="table.record.name" v-model="permissions">
                        <code>{{ table.record.name }}</code>
                    </ui-checkbox>
                </template>

                <template slot="description" slot-scope="table">
                    <p>{{ table.record.description }}</p>
                </template>
            </ui-table>
        </section-card>

		<template v-slot:sidebar>
			<ui-definition-list v-if="role">
                <ui-definition name="Created At">
                    {{ $moment(role.created_at).format('Y-MM-DD, hh:mm a') }}
                </ui-definition>

                <ui-definition name="Updated At">
                    {{ $moment(role.updated_at).format('Y-MM-DD, hh:mm a') }}
                </ui-definition>
            </ui-definition-list>
		</template>
	</form-container>
</template>

<script>
    export default {

        mixins: [
            require('../../mixins/roles').default
        ],

    	props: {
			role: {
				type: Object,
				required: false,
			},

    		form: {
    			type: Object,
    			required: true,
			},

			submit: {
                required: true,
            },
		},

        computed: {
            permissions: {
                get() {
                    return this.form.permissions
                },

                set(value){
                    this.form.permissions = value
                }
            }
        },

        methods: {
            // toggle(name, ev) {
            //     const token  = _.head(_.split(name, '.'))
            //     const items  = this.$refs.permissions.records

            //     if (ev.target.checked) {
            //         let matches = _.filter(items, (item) => _.startsWith(item.name, token))
            //             matches = _.map(matches,  (item) => item.name)

            //         this.permissions = _.union(this.permissions, matches)
            //     } else {
            //         this.permissions = _.remove(this.permissions, (item) => ! _.startsWith(item, token))
            //     }
            // }
        }
    }
</script>