<template>
    <div>
        <section-card title="Configurations" description="Configure your disk.">
            <div class="row">
        		<ui-input-group
                    class="col w-full"
                    name="configurations.root"
                    label="Root Path"
                    :help="`resolves to storage_path(${model.root}))`"
                    v-model="model.root">
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
					root: '/',
				}
			}
		}
	}
</script>