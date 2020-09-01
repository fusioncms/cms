<template>
	<div>
		<portal to="title">
			<page-title icon="save">Backups</page-title>
		</portal>

		<portal to="actions">
			<ui-button v-modal:settings class="button mr-1">Settings</ui-button>
			<ui-button v-modal:upload class="button mr-3">Upload</ui-button>

			<ui-button @click.prevent v-modal:confirm-form class="button--primary">Backup Now</ui-button>
		</portal>

		<ui-card no-body>
			<div class="card__body text-center" v-if="! ready">
				<fa-icon :icon="['fas', 'circle-notch']" class="fa-spin mr-3"></fa-icon> Loading backups...
			</div>

			<div v-else>
				<table v-for="destination in destinations" :key="destination.name">
					<thead>
						<th>Name</th>
						<th>Created</th>
						<th>Size</th>
						<th></th>
					</thead>

					<tbody>
						<tr v-for="backup in destination.backups" :key="backup.name">
							<td>{{ backup.name }}</td>
							<td>{{ backup.happened }}</td>
							<td>{{ backup.size }}</td>
							<td class="text-right">
								<ui-dropdown right>
									<fa-icon :icon="['fas', 'bars']"></fa-icon>

									<template slot="options">
										<ui-dropdown-item @click.prevent v-modal:restore-form="backup">
											Restore
										</ui-dropdown-item>

										<ui-dropdown-item @click="download(backup.name)">
											Download
										</ui-dropdown-item>

										<ui-dropdown-item v-if="! backup.isNewest" @click.prevent v-modal:delete-form="backup">
											Delete
										</ui-dropdown-item>
									</template>
								</ui-dropdown>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</ui-card>

        <portal to="modals">
            <settings-modal handle="backups"></settings-modal>

            <!-- Restore from existing backup -->
            <ui-modal name="restore-form" title="Restore Backup" key="restore_form">
                <p>Restoring a backup will <b>replace all files and the database with the contents of the backup.</b> Unless you specify to create a new backup during this process, there will be no way to undo your changes if you change your mind.</p>

        		<ui-checkbox name="saveBackup" v-model="saveBackup">
        			Create a backup before restoring
        		</ui-checkbox>

                <template slot="footer" slot-scope="form">
                    <ui-button v-modal:restore-form @click="restore(form.data.name)" theme="primary" class="ml-3">Restore</ui-button>
                    <ui-button v-modal:restore-form>Cancel</ui-button>
                </template>
            </ui-modal>

            <!-- Run manual backup process -->
			<ui-modal name="confirm-form" title="Backup Now" key="confirm_form">
                <p>This will perform a full backup of your website. Backups can take up to one minute per GB of data.</p>

                <template slot="footer">
                    <ui-button v-modal:confirm-form @click="backup()" theme="primary" class="ml-3">Backup</ui-button>
                    <ui-button v-modal:confirm-form>Cancel</ui-button>
                </template>
            </ui-modal>

            <!-- Delete existing backup -->
			<ui-modal name="delete-form" title="Delete Backup" key="delete_form">
                <p>Are you sure you want to permenantly delete this backup?</p>

                <template slot="footer" slot-scope="form">
                    <ui-button v-modal:delete-form @click="destroy(form.data.name)" theme="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-form>Cancel</ui-button>
                </template>
            </ui-modal>

			<!-- Upload backup -->
			<ui-modal name="upload" title="Upload Backup" key="upload-backup">
				<ui-upload
					name="file-upload"
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
				destinations: [],
				ready: false,
				saveBackup: true,
			}
		},

		methods: {
            refresh() {
            	this.ready = false

            	axios.get('/api/backups').then(response => {
            		this.destinations = response.data.data
            		this.ready        = true
            		this.saveBackup   = true
            	})
            },

            upload(files) {
            	if (typeof files == 'undefined') {
            		return;
            	}

				const formData = new FormData()

				formData.append('_method', 'POST')
				formData.append('file-upload', files)

				axios.post('/api/backups/upload', formData).then(() => {
					toast('Backup successfully uploaded!', 'success')

					this.$refs.upload.remove()
					this.refresh()
				})
            },

            download(backup) {
            	window.open(`/backups/${backup}`, '_blank')
            },

			restore(backup) {
				axios.post(`/api/backups/restore/${backup}`, { saveBackup: this.saveBackup }).then(response => {
					toast('Backup successfully restored!', 'success')

					this.refresh()
				})
			},

			backup() {
				axios.post('/api/backups').then(response => {
					toast('Backup successfully created!', 'success')

					this.refresh()
				})
			},

			destroy(backup) {
				axios.delete(`/api/backups/${backup}`).then((response) => {
                    toast('Backp successfully deleted!', 'success')

                    this.refresh()
                })
			}
		},

		beforeRouteEnter(to, from, next) {
			next(function(vm) {
				vm.refresh()
			})
		}
	}
</script>