<template>
	<div>
		<portal to="title">
			<page-title icon="mail-bulk">Mailables</page-title>
		</portal>

		<portal to="actions">
			<ui-button v-modal:settings>Settings</ui-button>
		</portal>

		<div class="row">
			<div class="content-container">
				<ui-table :endpoint="endpoint" id="mailables" sort-by="name" primary-key="handle" key="mailables_table">
					<template slot="name" slot-scope="table">
                        <ui-status :value="table.record.status" class="mr-2"></ui-status>

                        <router-link :to="{ name: 'mailables.edit', params: {mailable: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="handle" slot-scope="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template slot="theme" slot-scope="table">
                        <span class="badge badge--info" v-if="table.record.theme !== false">{{ table.record.theme }}</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-table-actions :id="'mail_' + table.record.id + '_actions'" :key="'mail_' + table.record.id + '_actions'">
                            <ui-dropdown-link :to="{ name: 'mailables.edit', params: {mailable: table.record.id} }">Edit</ui-dropdown-link>
                        </ui-table-actions>
                    </template>
				</ui-table>
			</div>
		</div>

		<portal to="modals">
            <settings-modal handle="mail"></settings-modal>
		</portal>
	</div>
</template>

<script>
	export default {
        auth() {
            return {
                permission: 'mailables.view',
            }
        },

		head: {
            title() {
                return {
                    inner: 'Mailables'
                }
            }
        },

		data() {
            return {
                endpoint: '/datatable/mailables',
            }
        },

	}
</script>