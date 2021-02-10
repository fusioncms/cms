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
                v-model="model.root"
            </ui-input-group>

            <ui-toggle
                class="col w-full sm:w-1/2"
                id="configurations-passive"
                name="configurations.passive"
                label="Passive"
                v-model="model.passive">
            </ui-toggle>

            <ui-toggle
                class="col w-full sm:w-1/2"
                id="configurations-ssl"
                name="configurations.ssl"
                label="SSL"
                v-model="model.ssl">
            </ui-toggle>

            <ui-number-group
                class="col w-full sm:w-1/2"
                name="configurations.timeout"
                label="Timeout"
                help="Enter the max connection timeout."
                :min="0"
                :max="60"
                :step="1"
                :decimals="0"
                v-model="model.timeout">
            </ui-number-group>
        </div>
    </section-card>
</template>

<script>
	import DiskMixin from '@/mixins/disk'

	export default {
		name: 'disks-configurations-ftp',

		mixins: [DiskMixin],

		data() {
			return {
				init: {
					host: '',
                    username: '',
                    password: '',
                    port: '21',
                    root: '',
                    passive: true,
                    ssl: true,
                    timeout: '30',
				}
			}
		}
	}
</script>