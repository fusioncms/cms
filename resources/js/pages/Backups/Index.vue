<template>
	<div class="backup-page">
		<portal to="title">
			<page-title icon="save">Backups</page-title>
		</portal>

		<portal to="actions">
			<ui-button v-modal:settings class="mr-1" :disabled="isBusy">Settings</ui-button>
			<ui-button v-modal:upload class="mr-1" :disabled="isBusy">Upload</ui-button>

			<ui-button v-if="isBusy" variant="primary" disabled>
				<fa-icon icon="sync" class="fa-spin"></fa-icon>
				<span class="sr-only">Working</span>
			</ui-button>

			<ui-button
				v-else
				v-modal:confirm-form
				@click.prevent
				variant="primary">Backup Now</ui-button>
		</portal>

		<ui-card>
            <ui-card-body>
            	<ui-table :key="'backups'" class="backup-table" id="backups" :endpoint="endpoint" sort-by="name" sort-in="desc" :per-page="50">
                    <template v-if="!isBusy" slot="actions" slot-scope="table">
                        <ui-table-actions :id="'backup_' + table.record.id + '_actions'" :key="'backup_' + table.record.id + '_actions'">
							<ui-dropdown-link
								@click.prevent
								v-modal:restore-form="table.record">
								Restore
							</ui-dropdown-link>

							<ui-dropdown-link
								@click.prevent="download(table.record.name)">
								Download
							</ui-dropdown-link>

							<ui-dropdown-link
								v-if="! table.record.isLatest"
								@click.prevent
								v-modal:delete-form="table.record">
								Delete
							</ui-dropdown-link>
                        </ui-table-actions>
                    </template>
                </ui-table>
            </ui-card-body>
        </ui-card>


        <portal to="modals">
            <settings-modal handle="backups"></settings-modal>

            <!-- Restore from existing backup -->
            <ui-modal name="restore-form" title="Restore Backup" key="restore_form">
                <p>Restoring a backup will <b>replace all files and the database with the contents of the backup.</b> Unless you specify to create a new backup during this process, there will be no way to undo your changes if you change your mind.</p>

        		<ui-checkbox id="saveBackup" name="saveBackup" v-model="saveBackup">
        			Create a backup before restoring
        		</ui-checkbox>

                <template slot="footer" slot-scope="backup">
                    <ui-button v-modal:restore-form @click="restore(backup.data)" variant="primary" class="ml-3">Restore</ui-button>
                    <ui-button v-modal:restore-form>Cancel</ui-button>
                </template>
            </ui-modal>

            <!-- Run manual backup process -->
			<ui-modal name="confirm-form" title="Backup Now" key="confirm_form">
                <p>This will perform a full backup of your website. Backups can take up to one minute per GB of data.</p>

                <template slot="footer">
                    <ui-button v-modal:confirm-form @click="backup()" variant="primary" class="ml-3">Backup</ui-button>
                    <ui-button v-modal:confirm-form>Cancel</ui-button>
                </template>
            </ui-modal>

            <!-- Delete existing backup -->
			<ui-modal name="delete-form" title="Delete Backup" key="delete_form">
                <p>Are you sure you want to permenantly delete this backup?</p>

                <template slot="footer" slot-scope="backup">
                    <ui-button v-modal:delete-form @click="destroy(backup.data)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-form>Cancel</ui-button>
                </template>
            </ui-modal>

			<!-- Upload backup -->
			<ui-modal name="upload" title="Upload Backup" key="upload-backup">
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

		data() {
			return {
				endpoint: '/datatable/backups',
				saveBackup: true,
				isBusy: false
			}
		},

		watch: {
			isBusy(value) {
				this.$store.commit('form/setPreventNavigation', value)

				if (!value)
					bus().$emit('refresh-datatable-backups')
			}
		},

		methods: {
            upload(files) {
            	if (typeof files == 'undefined') {
            		return;
            	}

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

            download(backup) {
            	window.open(`/backups/${backup}`, '_blank')
            },

			restore(backup) {
				this.isBusy = true

				axios.post(`/api/backups/restore/${backup.disk}/${backup.name}`, { saveBackup: this.saveBackup })
					.then(response => {
						this.isBusy = false
						
						toast('Backup successfully restored!', 'success')
					})
					.catch(response => {
						this.isBusy = false

						toast(response.response.data.message, 'failed')
					})
			},

			backup() {
				this.isBusy = true

				axios.post('/api/backups')
					.then(response => {
						this.isBusy = false
						
						toast('Backup successfully created!', 'success')
					})
					.catch(response => {
						this.isBusy = false

						toast(response.response.data.message, 'failed')
					})
			},

			destroy(backup) {
				axios.delete(`/api/backups/${backup.disk}/${backup.name}`)
					.then((response) => {
	                    toast('Backp successfully deleted!', 'success')

	                    bus().$emit('refresh-datatable-backups')
	                })
			}
		}
	}
</script>