<template>
    <div>
        <portal to="actions">
            <div class="buttons">
                <ui-button :to="{ name: 'disks' }" variant="secondary">Go Back</ui-button>
                <ui-button type="submit" @click.prevent="$parent.submit" variant="primary" :disabled="!form.hasChanges">Save</ui-button>
            </div>
        </portal>

        <section-card id="disk_panel_general" title="General Information" description="General information about your filesystem disk and what it manages." tabindex="-1">
            <div class="row">
                <ui-input-group
                    class="col w-full lg:w-1/2"
                    id="disk-name"
                    name="name"
                    label="Name"
                    help="What should this filesystem disk be called?"
                    autocomplete="off"
                    autofocus
                    required
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
                </ui-input-group>

                <ui-slug-group
                    class="col w-full lg:w-1/2"
                    id="disk-handle"
                    name="handle"
                    label="Handle"
                    help="Disk identifier (doubles as handle)."
                    monospaced
                    autocomplete="off"
                    required
                    delimiter="_"
                    :watch="form.name"
                    :has-error="form.errors.has('handle')"
                    :error-message="form.errors.get('handle')"
                    v-model="form.handle">
                </ui-slug-group>

                <ui-select-group
                    class="col w-full lg:w-1/2"
                    id="disk-driver"
                    name="driver"
                    label="Driver"
                    help="Select and configure your driver."
                    :options="driverOptions"
                    :has-error="form.errors.has('driver')"
                    :error-message="form.errors.get('driver')"
                    v-model="form.driver">
                </ui-select-group>
            </div>
        </section-card>

        <component
            key="disk-configurations"
            :is="`disks-configurations-${form.driver}`"
            :errors="form.errors"
            v-model="form.configurations">
        </component>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                driverOptions: [
                    { label: 'Local', value: 'local' },
                    { label: 'S3',    value: 's3' },
                    { label: 'FTP',   value: 'ftp' },
                    { label: 'SFTP',  value: 'sftp' },
                ]
            }
        },

        props: {
            form: {
                type: Object,
                required: true,
            }
        }
    }
</script>