<template>
	<div class="roles-page">
        <portal to="actions">
            <div class="buttons">
                <ui-button key="go-back-btn" :to="{ name: 'roles' }" variant="secondary">Go Back</ui-button>
                <ui-button v-if="!isOwner" key="save-btn" type="submit" @click.prevent="submit" variant="primary" :disabled="!form.hasChanges">Save</ui-button>
            </div>
        </portal>

        <ui-alert v-if="isOwner" icon="info-circle" variant="info">
            <p>Owner role information and permissions are not editable.</p>
        </ui-alert>

        <section-card title="General Information" description="General information about this role and what it can manage.">
            <ui-input-group
                id="roles-name"
                name="label"
                label="Name"
                description="What should this role be called?"
                autocomplete="off"
                autofocus
                required
                :has-error="form.errors.has('label')"
                :error-message="form.errors.get('label')"
                v-model="form.label"
                :readonly="isOwner">
            </ui-input-group>

            <ui-textarea-group
                id="roles-description"
                name="description"
                label="Description"
                autocomplete="off"
                :has-error="form.errors.has('description')"
                :error-message="form.errors.get('description')"
                v-model="form.description"
                :readonly="isOwner"
                :rows="2">
            </ui-textarea-group>
        </section-card>

        <section-card title="Permissions" description="Permissions allow you to restrict which areas of the controle panel this user can access." v-if="hasPermissions(form.name)">
            <ui-table key="permissions-table" ref="permissions" id="permissions-table" endpoint="/datatable/permissions" sort-by="name" no-actions show-page-status>
                <template slot="name" slot-scope="table">
                    <code v-if="isOwner">{{ table.record.name }}</code>

                    <ui-checkbox v-else :id="'roles-checkbox-' + table.record.name" name="permissions" :native-value="table.record.name" v-model="permissions">
                        <code>{{ table.record.name }}</code>
                    </ui-checkbox>
                </template>

                <template slot="description" slot-scope="table">
                    <p>{{ table.record.description }}</p>
                </template>
            </ui-table>
        </section-card>
	</div>
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
            },

            isOwner() {
                return this.role.id && this.role.id === 4
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