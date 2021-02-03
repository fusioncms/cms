<template>
	<div class="row">
        <ui-input-group
            class="col w-full sm:w-1/2"
            name="configurations.host"
            label="Host"
            help=""
            v-model="model.host">
        </ui-input-group>

        <ui-input-group
            class="col w-full sm:w-1/2"
            name="configurations.username"
            label="Username"
            help=""
            v-model="model.username">
        </ui-input-group>

        <ui-input-group
            class="col w-full sm:w-1/2"
            name="configurations.password"
            label="Password"
            help=""
            v-model="model.password">
        </ui-input-group>

        <ui-input-group
            class="col w-full sm:w-1/2"
            name="configurations.port"
            label="Port"
            help="Choose a connection port."
            v-model="model.port">
        </ui-input-group>

        <ui-input-group
            class="col w-full sm:w-1/2"
            name="configurations.root"
            label="Root Path"
            help="Choose root path for this disk (.e.g. myfolder)."
            v-model="model.root">
        </ui-input-group>

        <ui-toggle
            class="col w-full sm:w-1/2"
            id="configurations-passive"
            name="configurations.passive"
            label="Passive"
            help="Toggle passive mode"
            v-model="model.passive">
        </ui-toggle>

        <ui-toggle
            class="col w-full sm:w-1/2"
            id="configurations-ssl"
            name="configurations.ssl"
            label="SSL"
            help="Toggle ssl mode"
            v-model="model.ssl">
        </ui-toggle>

        <ui-number-group
            class="col w-full sm:w-1/2"
            name="configurations.timeout"
            label="Timeout"
            help="Choose a max connection timeout."
            :min="0"
            :max="60"
            :step="1"
            :decimals="0"
            v-model="model.timeout">
        </ui-number-group>
    </div>
</template>

<script>
	import DiskMixin from '@/mixins/disk'

	export default {
		name: 'disks-configurations-ftp',

		mixins: [DiskMixin],

		data() {
			return {
				default: {
					host: '',
                    username: '',
                    password: '',
                    port: 21,
                    root: '',
                    passive: true,
                    ssl: true,
                    timeout: 30,
				}
			}
		}
	}
</script>