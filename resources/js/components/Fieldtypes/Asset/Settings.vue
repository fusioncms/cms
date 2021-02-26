<template>
    <div class="row">
        <ui-number-group
            class="col w-full sm:w-1/2"
            name="settings.limit"
            label="Selection limit"
            help="Limit the number of selected assets; - 0 - is equal to no limit."
            :min="0"
            :has-error="errors.has('settings.limit')"
            :error-message="errors.get('settings.limit')"
            v-model="settings.limit">
        </ui-number-group>

        <ui-checkbox-group
            class="col w-full sm:w-1/2"
            label="File type restrictions"
            help="Restrict which file types are selectable for this field; leave blank if no retriction is desired."
            :has-error="errors.has('settings.filetype_restrictions')"
            :error-message="errors.get('settings.filetype_restrictions')">
            
            <ui-checkbox
                v-for="(filetype, index) in filetypes"
                name="settings.filetype_restrictions"
                :id="index"
                :key="index"
                :native-value="index"
                v-model="settings.filetype_restrictions">
                {{ filetype }}
            </ui-checkbox>
        </ui-checkbox-group>

        <ui-toggle
            class="col w-full sm:w-1/2"
            name="settings.allow_navigation"
            label="Allow navigation"
            help="Allow navigation within starting directory?"
            v-model="settings.allow_navigation"
            :has-error="errors.has('settings.allow_navigation')"
            :error-message="errors.get('settings.allow_navigation')">
        </ui-toggle>

        <ui-toggle
            class="col w-full sm:w-1/2"
            name="settings.allow_uploads"
            label="Allow uploads"
            help="Allow uploads through this field?"
            v-model="settings.allow_uploads"
            :has-error="errors.has('settings.allow_uploads')"
            :error-message="errors.get('settings.allow_uploads')">
        </ui-toggle>

        <ui-select
            class="col w-full sm:w-1/2"
            name="settings.disk"
            label="Disk"
            :options="diskOptions"
            v-model="settings.disk"
            :has-error="errors.has('settings.disk')"
            :error-message="errors.get('settings.disk')">
        </ui-select>

        <ui-select
            class="col w-full sm:w-1/2"
            name="settings.directory"
            label="Starting directory"
            :options="directoryOptions"
            v-model="settings.directory"
            :has-error="errors.has('settings.directory')"
            :error-message="errors.get('settings.directory')">
        </ui-select>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
	import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'asset-fieldtype-settings',

        mixins: [fieldtype],

        data() {
        	return {
        		filetypes: {
	                image:    'Images',
	                video:    'Videos',
	                audio:    'Audio',
	                document: 'Documents',
	        	},
                cache: {},
                directories: []
	        }
        },

        computed: {
            ...mapGetters({
                disks: 'disks/getDisks'
            }),

            diskOptions() {
                return _.map(this.disks, (disk) => {
                    return { label: disk.name, value: disk.id }
                })
            },

            directoryOptions() {
                let options =  _.map(this.directories, (directory) => {
                    return { label: directory.name, value: directory.id }
                })

                options.unshift({ label: 'Root', value: 0 })

                return options
            }
        },

        watch: {
            'settings.disk'(disk) {
                this.settings.directory = "0"

                if (this.cache[disk]) {
                    this.directories = this.cache[disk]
                } else {
                    axios.get(`/api/directories/${disk}`)
                        .then(response => {
                            this.cache[disk] = response.data.data
                            this.directories = this.cache[disk]

                        })
                }
            }
        },

        created() {
            this.$store.dispatch('disks/fetchDisks')
        }
    }
</script>
