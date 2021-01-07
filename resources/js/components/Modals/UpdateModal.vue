<template>
	<ui-modal
        noEscClose
        noCloseButton
        :noFooter="isUpdating"
        key="updater_modal"
        name="updater"
        :title="`Update to ${version.title}`"
        v-model="isOpen">

        <div v-if="!isUpdating">
            <p>Are you sure you want to update to version {{ version.title }}?</p>
        </div>

        <!-- Update: backup -->
        <ui-fieldset v-if="!! update.backup" label="Backup">
            <ui-checkbox
                id="backup"
                disabled
                name="checkbox"
                v-model="update.backup == 'complete'">
                    Backing up your data...
                    <fa-icon
                        v-if="update.backup == 'active'"
                        icon="circle-notch" class="fa-spin">
                    </fa-icon>
            </ui-checkbox>
        </ui-fieldset>

        <!-- Update: composer -->
        <ui-fieldset v-if="!! update.composer" label="Update">
            <ui-checkbox
                id="composer"
                disabled
                name="checkbox"
                v-model="update.composer == 'complete'">
                    Updating composer dependencies...
                    <fa-icon
                        v-if="update.composer == 'active'"
                        icon="circle-notch" class="fa-spin">
                    </fa-icon>
            </ui-checkbox>
        </ui-fieldset>

        <!-- Update: finalizing -->
        <ui-fieldset v-if="!! update.finalize" label="Finalize">
            <ui-checkbox
                id="finalize"
                disabled
                name="checkbox"
                v-model="update.finalize == 'complete'">
                    Finalizing some things...
                    <fa-icon
                        v-if="update.finalize == 'active'"
                        icon="circle-notch" class="fa-spin">
                    </fa-icon>
            </ui-checkbox>
        </ui-fieldset>

        <!-- Update Complete Message -->
        <div v-if="update.complete">
            <p>Update has successfully completed!</p>

            <ui-button @click="refresh" type="button" class="button button--primary">Refresh FusionCMS</ui-button>
        </div>

        <template slot="footer">
            <ui-button @click="confirm" type="button" class="button button--primary">Confirm</ui-button>
            <ui-button @click="close" type="button" class="mr-3">Cancel</ui-button>
        </template>
    </ui-modal>
</template>

<script>
	export default {
		name: 'update-modal',

		data() {
			return {
				isOpen: false,
				isUpdating: false,
				update: {
	                confirm:  false,
	                backup:   false,
	                composer: false,
	                finalize: false,
	                complete: false
	            }
			}
		},

		props: {
			version: {
				type: [Object,Boolean],
				required: true
			}
		},

		methods: {
			confirm() {
                this.update.backup   = false
                this.update.composer = false
                this.update.finalize = false
                this.update.complete = false

                this.runBackup()
            },

            runBackup() {
            	this.isUpdating    = true
                this.update.backup = 'active'

                axios.post('/api/updates/backup')
                    .then((response) => {
                        this.update.backup = 'complete'
                        this.runComposer()
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },

            runComposer() {
                this.update.composer = 'active'

                axios.post('/api/updates/composer')
                    .then((response) => {
                        this.update.composer = 'complete'
                        this.runFinalize()
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },

            runFinalize() {
                this.update.finalize = 'active'

                axios.post('/api/updates/finalize')
                    .then((response) => {
                        this.update.finalize = 'complete'
                        this.update.complete = true
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },

			close() {
				this.isOpen     = false
				this.isUpdating = false
			},

			refresh() {
				location.reload()
			}
		}
	}
</script>