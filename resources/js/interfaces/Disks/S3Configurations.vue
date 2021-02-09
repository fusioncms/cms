<template>
    <div>
        <section-card title="Configurations" description="Configure your disk.">
            <div class="row">
                <ui-input-group
                    class="col w-full sm:w-1/2"
                    name="configurations.key"
                    label="Key"
                    help=""
                    v-model="model.key">
                </ui-input-group>

                <ui-input-group
                    class="col w-full sm:w-1/2"
                    name="configurations.secret"
                    label="Secret"
                    help=""
                    v-model="model.secret">
                </ui-input-group>

                <ui-select-group
                    class="col w-full sm:w-1/2"
                    name="configurations.region"
                    label="Region"
                    help=""
                    :options="[
                        { value: 'us-east-1',      label: 'US East (N. Virginia) / US Standard / us-east-1' },
                        { value: 'us-east-2',      label: 'US East (Ohio) / us-east-2' },
                        { value: 'us-west-1',      label: 'US West (N. California) / us-west-1' },
                        { value: 'us-west-2',      label: 'US West (Oregon) / us-west-2' },
                        { value: 'ca-central-1',   label: 'Canada (Central) / ca-central-1' },
                        { value: 'ap-south-1',     label: 'Asia Pacific (Mumbai) / ap-south-1' },
                        { value: 'ap-northeast-2', label: 'Asia Pacific (Seoul) / ap-northeast-2' },
                        { value: 'ap-southeast-1', label: 'Asia Pacific (Singapore) / ap-southeast-1' },
                        { value: 'ap-southeast-2', label: 'Asia Pacific (Sydney) / ap-southeast-2' },
                        { value: 'ap-northeast-1', label: 'Asia Pacific (Tokyo) / ap-northeast-1' },
                        { value: 'eu-central-1',   label: 'EU (Frankfurt) / eu-central-1' },
                        { value: 'eu-west-1',      label: 'EU (Ireland) / eu-west-1' },
                        { value: 'eu-west-2',      label: 'EU (London) / eu-west-2' },
                        { value: 'sa-east-1',      label: 'South America (Sao Paulo) / sa-east-1)' }
                    ]"
                    v-model="model.region">
                </ui-select-group>

                <ui-input-group
                    class="col w-full sm:w-1/2"
                    name="configurations.bucket"
                    label="Bucket"
                    help=""
                    v-model="model.bucket">
                </ui-input-group>
            </div>
        </section-card>
    </div>
</template>

<script>
	import DiskMixin from '@/mixins/disk'

	export default {
		name: 'disks-configurations-s3',

		mixins: [DiskMixin],

		data() {
			return {
				default: {
					key: '',
					secret: '',
                    region: '',
                    bucket: '',
                    endpoint: '',
				}
			}
		}
	}
</script>