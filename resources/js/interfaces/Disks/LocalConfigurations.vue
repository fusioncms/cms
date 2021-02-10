<template>
    <div>
        <section-card title="Configurations" description="Configure your disk.">
            <div class="row">
        		<ui-input-group
                    class="col w-full"
                    name="configurations.root"
                    label="Root Path"
                    help="Enter a folder path on your local filesystem."
                    :placeholder="init.root"
                    v-model="model.root"
                    :has-error="hasError('configurations.root')"
                    :error-message="errorMessage('configurations.root')">
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
				init: {
					root: '/',
				}
			}
		}
	}
</script>