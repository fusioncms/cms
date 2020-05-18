<template>
	<form-container>
        <portal to="actions">
            <div class="buttons">
                <router-link :to="{ name: 'roles' }" class="button">Go Back</router-link>
                <button type="submit" @click.prevent="submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save</button>
            </div>
        </portal>

		<div class="card">
            <div class="card__body">
                <p-title
                    name="label"
                    autocomplete="off"
                    autofocus
                    required
                    :has-error="form.errors.has('label')"
                    :error-message="form.errors.get('label')"
                    v-model="form.label">
                </p-title>

				<p-textarea
					name="description"
					label="Description"
					autocomplete="off"
					:has-error="form.errors.has('description')"
					:error-message="form.errors.get('description')"
					required
					v-model="form.description"
					:rows="2">
				</p-textarea>
			</div>
		</div>

        <div class="card" v-if="hasPermissions(form.name)">
            <div class="card__body">
                <p-table ref="permissions" id="permissions" endpoint="/datatable/permissions" sort-by="name" no-actions key="permissions_table">
                    <template slot="name" slot-scope="table">
                        <input
                            type="checkbox"
                            name="permissions"
                            :id="table.record.name"
                            :value="table.record.name"
                            v-model="permissions">

                        <code>{{ table.record.name }}</code>
                    </template>

                    <template slot="guard_name" slot-scope="table">
                        <span class="badge">{{ table.record.guard_name }}</span>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>
                </p-table>
            </div>
        </div>

		<template v-slot:sidebar>
			<p-definition-list v-if="role">
                <p-definition name="Created At">
                    {{ $moment(role.created_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>

                <p-definition name="Updated At">
                    {{ $moment(role.updated_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>
            </p-definition-list>
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