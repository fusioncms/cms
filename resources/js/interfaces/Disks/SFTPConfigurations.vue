<template>
    <section-card title="Configurations" description="Configure your disk.">
    	<div class="row">
            <ui-input-group
                class="col w-full sm:w-1/2"
                name="configurations.host"
                label="Host"
                v-model="model.host"
                :has-error="hasError('configurations.host')"
                :error-message="errorMessage('configurations.host')">
            </ui-input-group>

            <ui-input-group
                class="col w-full sm:w-1/2"
                name="configurations.username"
                label="Username"
                v-model="model.username"
                :has-error="hasError('configurations.username')"
                :error-message="errorMessage('configurations.username')">
            </ui-input-group>

            <ui-input-group
                class="col w-full sm:w-1/2"
                name="configurations.password"
                label="Password"
                v-model="model.password"
                :has-error="hasError('configurations.password')"
                :error-message="errorMessage('configurations.password')">
            </ui-input-group>

            <ui-input-group
                class="col w-full sm:w-1/2"
                name="configurations.privateKey"
                label="Private Key"
                v-model="model.privateKey"
                :has-error="hasError('configurations.privateKey')"
                :error-message="errorMessage('configurations.privateKey')">
            </ui-input-group>

            <ui-input-group
                class="col w-full sm:w-1/2"
                name="configurations.port"
                label="Port"
                :placeholder="init.port"
                v-model="model.port">
            </ui-input-group>

            <ui-input-group
                class="col w-full sm:w-1/2"
                name="configurations.root"
                label="Root Path"
                help="Enter the root path on your FTP connection."
                v-model="model.root">
            </ui-input-group>

            <ui-number-group
                class="col w-full sm:w-1/2"
                name="configurations.timeout"
                label="Timeout"
                help="Enter a max connection timeout."
                :min="0"
                :max="60"
                :step="1"
                :decimals="0"
                :placeholder="init.timeout"
                v-model="model.timeout">
            </ui-number-group>
        </div>
    </section-card>
</template>

<script>
	import DiskMixin from '@/mixins/disk'

	export default {
		name: 'disks-configurations-sftp',

		mixins: [DiskMixin],

		data() {
			return {
				init: {
					host: '',
                    username: '',
                    password: '',
                    privateKey: '',
                    port: '22',
                    root: '',
                    timeout: '10',
				}
			}
		}
	}
</script>