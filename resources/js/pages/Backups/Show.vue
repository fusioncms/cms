<template>
    <div class="backups-page">
        <portal to="title">
            <page-title icon="save">Backups - {{ backup.name }}</page-title>
        </portal>

        <portal to="actions">
            <div class="buttons">
                <ui-button key="go-back-btn" :to="{ name: 'backups' }" variant="secondary">Go Back</ui-button>
                <ui-button key="save-btn" variant="primary" @click.prevent="submit" :disabled="!form.hasChanges">Save</ui-button>
            </div>
        </portal>

        <section-card v-if="form" title="Backup Information" description="General information about this backup.">
            <dl class="detail-list">

                <ui-input-group
                    id="user-name"
                    name="name"
                    label="Name"
                    autocomplete="off"
                    autofocus
                    required
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
                </ui-input-group>

                <dt>Disk</dt>
                <dd>{{ backup.disk }}</dd>
                <dt>Size</dt>
                <dd><code>{{ filesize(backup.size) }}</code></dd>
                <dt>Created</dt>
                <dd>{{ $moment(backup.created_at).fromNow() }}</dd>
                <dt>Status</dt>
                <dd class="flex">
                    <span v-if="backup.state == 'success'">
                        <fa-icon icon="circle" class="icon fa-xs text-success-500"></fa-icon> Success
                    </span>
                    <span v-if="backup.state == 'failed'">
                        <fa-icon icon="circle" class="icon fa-xs text-danger-500"></fa-icon> Failed
                    </span>
                    <span v-if="backup.state == 'in-progress'">
                        <fa-icon icon="circle" class="icon fa-xs text-orange-500"></fa-icon> In Progress
                    </span>
                </dd>
            </dl>
        </section-card>

        <section-card v-if="form" title="Actions" description="Management actions that can be performed for this backup.">
            <div class="mb-4">
                <span class="label">Restore Backup</span>
                <p class="help mb-2">Restore FusionCMS to this backup.</p>
                <ui-button variant="secondary" @click.prevent v-modal:restore-backup="backup">Restore Backup</ui-button>
            </div>

            <div class="mb-4">
                <span class="label">Download Backup</span>
                <p class="help mb-2">Download backup zip.</p>
                <ui-button variant="secondary" @click.prevent="downloadBackup(backup.id)">Download Backup</ui-button>
            </div>

            <div class="mb-4">
                <span class="label">Delete Backup</span>
                <p class="help mb-2">Once you delete this backup, there is no going back. Please be certain.</p>
                <ui-button variant="danger" v-modal:delete-backup>Delete Backup</ui-button>
            </div>
        </section-card>

        <section-card title="Backup Log" description="See what has been happening.">
            <table v-if="backup.logs" class="table" aria-live="polite">
                <tr>
                    <th><span class="table__heading">Level</span></th>
                    <th><span class="table__heading">Message</span></th>
                    <th><span class="table__heading">Happened</span></th>
                </tr>
                <tr v-for="(log, index) in backup.logs.data" :key="`log-${index}`">
                    <td align="center">
                        <span class="column-label">Level</span>
                        {{ log.level_name }}
                    </td>
                    <td>
                        <span class="column-label">Message</span>
                        {{ log.message }}
                    </td>
                    <td align="center">
                        <span class="column-label">Happened</span>
                        {{ log.happened }}
                    </td>
                </tr>
            </table>
        </section-card>

        <portal to="modals">
            <restore-backup-modal></restore-backup-modal>

            <ui-modal name="delete-backup" title="Delete Backup" key="delete_backup">
                <p>Are you sure you want to permenantly delete this backup?</p>

                <template slot="footer">
                    <ui-button v-modal:delete-backup @click="destroyBackup(backup.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-backup>Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    import Form from '../../services/Form'

    export default {
        permission: 'backups.view',

        head: {
            title() {
                return {
                    inner: this.backup.name || 'Loading...'
                }
            }
        },

        mixins: [
            require('../../mixins/backups').default,
            require('../../mixins/filehelper').default,
        ],

        data() {
            return {
                backup: {},
                form: false
            }
        },

        methods: {
            submit() {
                this.form.patch(`/api/backups/${this.backup.id}`)
                    .then((response) => {
                        this.backup = response.data

                        toast('User successfully updated', 'success')
                    })
                    .catch((response) => {
                        toast(response.response.data.message, 'failed')
                    })
            },
        },

        beforeRouteEnter(to, from, next) {
            getModel(to.params.backup, (error, backup) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/backup')
                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.backup = backup
                        vm.form   = new Form({
                            'name': backup.name
                        }, true)
                        vm.$emit('updateHead')
                    })
                }
            })
        }
    }

    export function getModel(id, callback) {
        axios.get(`/api/backups/${id}`)
            .then(response => callback(null, response.data.data))
            .catch((error) => {
                callback(new Error('The requested role could not be found'))
            })
    }
</script>