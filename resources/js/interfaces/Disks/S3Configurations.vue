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

                <ui-input-group
                    class="col w-full sm:w-1/2"
                    name="configurations.region"
                    label="Region"
                    help=""
                    v-model="model.region">
                </ui-input-group>

                <ui-input-group
                    class="col w-full sm:w-1/2"
                    name="configurations.bucket"
                    label="Bucket"
                    help=""
                    v-model="model.bucket">
                </ui-input-group>

                <!--
                <ui-input-group
                    class="col w-full sm:w-1/2"
                    name="configurations.endpoint"
                    label="Endpoint"
                    help=""
                    v-model="model.endpoint">
                </ui-input-group>
                -->
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
                    :placeholder="`https://s3.${model.region}.amazonaws.com/${model.bucket}/`"
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
                    url: '',
					visibility: 'public',
				}
			}
		}
	}
</script>