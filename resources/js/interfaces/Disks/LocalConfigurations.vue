<template>
    <div>
        <section-card title="Configurations" description="Configure your disk.">
            <div class="row">
        		<ui-input-group
                    class="col w-full sm:w-1/2"
                    name="configurations.root"
                    label="Root Path"
                    help="Choose root path for this disk (.e.g. myfolder)."
                    v-model="model.root">
                </ui-input-group>
            </div>
        </section-card>

        <section-card title="Visibility" description="Configure the filesystem disk's visibility settings.">
            <div class="row">
                <ui-select-group
                    class="col w-full sm:w-1/2"
                    name="configurations.visibility"
                    label="Visibility"
                    help="Choose whether or not this disk is publicly visible."
                    autocomplete="off"
                    :options="[
                        { label: 'Public',  value: 'public' },
                        { label: 'Private', value: 'private' }
                    ]"
                    v-model="model.visibility">
                </ui-select-group>

                <ui-input-group
                    v-if="model.visibility == 'public'"
                    class="col w-full sm:w-1/2"
                    name="configurations.url"
                    label="Public URL"
                    help="Choose public URL to access this disk files."
                    v-model="model.url">
                </ui-input-group>
            </div>
        </section-card>
    </div>
</template>

<script>
	import DiskMixin from '@/mixins/disk'

	export default {
		name: 'disks-configurations-local',

		mixins: [DiskMixin],

		data() {
			return {
				default: {
					root: '',
					url: '',
					visibility: 'public',
				}
			}
		}
	}
</script>