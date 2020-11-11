<template>
    <div>
        <ui-field-group
            :name="field.handle"
            :fieldId="`${field.handle}-field`"
            :label="field.name"
            :help="field.help"
            :hasError="hasError(field.handle)"
            :errorMessage="errorMessage(field.handle)">

            <ui-button icon v-modal:selection-modal>
                <fa-icon :icon="['fas', 'plus-circle']"></fa-icon>
                <span class="sr-only">Browse users...</span>
            </ui-button>
            
            <table class="table" v-if="model && model.length > 0">
                <ui-sortable-list v-model="model" :class="`${field.handle}-sortable-list`">
                    <tbody>
                        <ui-sortable-item v-for="item in model" :key="item.id">
                            <tr>
                                <td class="w-8">
                                    <ui-sortable-handle class="cursor-move inline-block">
                                        <fa-icon icon="grip-vertical" class="handle fa-fw text-gray-400 mr-3"></fa-icon>
                                    </ui-sortable-handle>
                                </td>
                                <td v-text="item.name"></td>
                                <td v-text="item.email"></td>
                                <td class="w-16">
                                    <ui-button icon @click.prevent="remove(item.id)">
                                        <fa-icon icon="times"></fa-icon>
                                        <span class="sr-only">Destroy</span>
                                    </ui-button>
                                </td>
                            </tr>
                        </ui-sortable-item>
                    </tbody>
                </ui-sortable-list>
            </table>

            <div v-else class="help">Your list is empty.</div>
        </ui-field-group>


        <ui-modal name="selection-modal" title="Browse users">
            <ui-table :endpoint="endpoint" id="user-items" sort-by="name" sort-in="desc" :per-page="10">
                <template slot="name" slot-scope="table">
                    <ui-checkbox
                        :id="`selection-${table.record.id}`"
                        name="selection"
                        :native-value="table.record"
                        v-model="model">
                        {{ table.record.name }}
                    </ui-checkbox>
                </template>

                <template slot="role" slot-scope="table">
                    <router-link :to="{ name: 'roles.show', params: {role: table.record.role.id} }" v-if="$can('roles.view')">{{ table.record.role.name }}</router-link>
                    <span v-else>{{ table.record.role.name }}</span>
                </template>

                <template slot="created_at" slot-scope="table">
                    <ui-date :timestamp="table.record.created_at"></ui-date>
                </template>
            </ui-table>
        </ui-modal>
    </div>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'

	export default {
		name: 'user-fieldtype',

        mixins: [FieldMixin],

        data() {
            return {
                endpoint: '/datatable/users'
            }
        },

        created() {
            if (_.isEmpty(this.value)) {
                this.model = []
            }
        }
	}
</script>