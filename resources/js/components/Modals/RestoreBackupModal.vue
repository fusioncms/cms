<template>
    <div>
        <ui-modal name="restore-backup" title="Restore From Backup" key="restore_backup">
            <p>
                Restoring a backup will <b>replace all files and the database with the contents of the backup.</b>
                Unless you specify to create a new backup during this process, there will be no way to undo your changes if you change your mind.
            </p>

            <ui-checkbox id="saveBackup" name="saveBackup" v-model="saveBackup">
                Create a backup before restoring.
            </ui-checkbox>

            <template slot="footer" slot-scope="backup">
                <ui-button v-modal:restore-backup @click="confirm(backup.data.id)" class="button button--primary">Restore</ui-button>
                <ui-button v-modal:restore-backup class="mr-3">Cancel</ui-button>
            </template>
        </ui-modal>

        <ui-modal
            v-model="inProgress"
            size="small"
            name="in-progress"
            key="in_progress"
            noFooter
            noHeader
            noEscClose>
            <div class="mx-auto flex flex-col items-center justify-center">
                <fa-icon icon="sync" class="fa-spin text-primary-500 text-3xl m-3"></fa-icon>                   
                <h3>Please wait while we process your request.</h3>
            </div>
        </ui-modal>
    </div>
</template>

<script>
    export default {
        name: 'restore-backup-modal',

        data() {
            return {
                saveBackup: true,
                inProgress: false,
            }
        },

        watch: {
            inProgress(value) {
                this.$store.commit('form/setPreventNavigation', value)
            }
        },

        methods: {
            confirm(id) {
                this.inProgress = true

                axios.post(`/api/backups/restore/${id}`, { saveBackup: this.saveBackup })
                    .then(response => {
                        this.inProgress = false
                        this.saveBackup = true
                        
                        toast('Backup successfully restored!', 'success')
                    })
                    .catch(response => {
                        this.inProgress = false
                        this.saveBackup = true

                        toast(response.response.data.message, 'failed')
                    })
            }
        }
    }
</script>
