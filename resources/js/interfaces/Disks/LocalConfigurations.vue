<template>
	<div class="row">
		<ui-input-group
            class="col w-full sm:w-1/2"
            name="configurations.root"
            label="Root Path"
            help="Choose root path for this disk (.e.g. myfolder)."
            v-model="model.root">
        </ui-input-group>

        <ui-input-group
            class="col w-full sm:w-1/2"
            name="configurations.url"
            label="Public URL"
            help="Choose public URL to access this disk's assets (if public)."
            v-model="model.url">
        </ui-input-group>

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