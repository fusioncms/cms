<template>
	<div class="backups-page">
		<portal to="title">
			<page-title icon="save">Backups</page-title>
		</portal>

		<portal to="actions">
			<div class="buttons">
				<ui-button v-modal:upload-backup class="mr-1">Upload</ui-button>
				<ui-button v-modal:confirm-backup @click.prevent variant="primary">Backup Now</ui-button>
			</div>
		</portal>

		<ui-card>
            <ui-card-body>
            	<ui-table :refresh="5000" :key="'backups'" class="backup-table" id="backups" :endpoint="endpoint" sort-by="name" sort-in="desc" :per-page="50">
            		<template slot="name" slot-scope="table">
                        <ui-status :value="table.record.state == 'success'" class="mr-2"></ui-status>

                        <router-link :to="{ name: 'backups.show', params: {backup: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

            		<template slot="size" slot-scope="table">
                        <code>{{ filesize(table.record.size) }}</code>
                    </template>

                    <template slot="created_at" slot-scope="table">
                        {{ $moment(table.record.created_at).fromNow() }}
                    </template>

                    <template slot="actions" slot-scope="table">
                        <ui-table-actions :id="'backup_' + table.record.id + '_actions'" :key="'backup_' + table.record.id + '_actions'">
							<ui-dropdown-link
								v-if="$can('backups.view')"
								:to="{ name: 'backups.show', params: {backup: table.record.id} }">
								View
							</ui-dropdown-link>
                        	
                        	<ui-dropdown-divider></ui-dropdown-divider>

							<ui-dropdown-link
								v-if="$can('backups.restore')"
								@click.prevent
								v-modal:restore-backup="table.record">
								Restore
							</ui-dropdown-link>

							<ui-dropdown-link
								@click.prevent="downloadBackup(table.record.id)">
								Download
							</ui-dropdown-link>

							<ui-dropdown-link
								v-if="! table.record.isLatest && $can('backups.delete')"
								@click.prevent
								v-modal:delete-backup="table.record">
								Delete
							</ui-dropdown-link>
                        </ui-table-actions>
                    </template>
                </ui-table>
            </ui-card-body>
        </ui-card>


        <portal to="modals">
            <restore-backup-modal></restore-backup-modal>

            <!-- Run manual backup process -->
			<ui-modal name="confirm-backup" title="Backup Now" key="confirm_backup">
                <p>This will perform a full backup of your website. Backups can take up to one minute per GB of data.</p>

                <template slot="footer">
                    <ui-button v-modal:confirm-backup @click="runBackup()" variant="primary" class="ml-3">Backup</ui-button>
                    <ui-button v-modal:confirm-backup>Cancel</ui-button>
                </template>
            </ui-modal>

            <!-- Delete existing backup -->
			<ui-modal name="delete-backup" title="Delete Backup" key="delete_backup">
                <p>Are you sure you want to permenantly delete this backup?</p>

                <template slot="footer" slot-scope="backup">
                    <ui-button v-modal:delete-backup @click="destroyBackup(backup.data.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-backup>Cancel</ui-button>
                </template>
            </ui-modal>

			<!-- Upload backup -->
			<ui-modal name="upload-backup" title="Upload Backup" key="upload_backup">
				<ui-upload
					name="file-upload"
					label="Upload"
					ref="upload"
					accept="zip"
					:multiple="false"
					@input="upload"
				></ui-upload>
			</ui-modal>
        </portal>
	</div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Backups'
                }
            }
        },

        mixins: [
            require('../../mixins/backups').default,
            require('../../mixins/filehelper').default,
        ],

        data() {
            return {
                endpoint: '/datatable/backups'
            }
        },

    	methods: {
            upload(files) {
                if (typeof files == 'undefined') return

                const formData = new FormData()

                formData.append('_method', 'POST')
                formData.append('file-upload', files)

                axios.post('/api/backups/upload', formData)
                    .then(() => {
                        toast('Backup successfully uploaded!', 'success')

                        this.$refs.upload.remove()

                        bus().$emit('refresh-datatable-backups')
                    })
                },
    	}
	}
</script>