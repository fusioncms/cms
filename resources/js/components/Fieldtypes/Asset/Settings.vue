<template>
    <div class="row">
    	<div class="col w-1/2">
			<ui-number-group
				name="settings.limit"
				label="Limit"
				help="Limit the number of assets selected; leave blank if no limit is desired."
				min="1"
				:has-error="errors.has('settings.limit')"
           		:error-message="errors.get('settings.limit')"
           		v-model="settings.limit">
			</ui-number-group>

			<ui-checkbox-group
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
		</div>

    	<div class="col w-1/2">
			<ui-select-group
				name="settings.root_directory"
				label="Root directory"
				help="Select root folder for this field; default root will be used if None selected."
				:options="directories"
				v-model="settings.root_directory"
				:has-error="errors.has('settings.root_directory')"
           		:error-message="errors.get('settings.root_directory')">
			</ui-select-group>
	    </div>
    </div>
</template>

<script>
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
	        	directories: []
	        }
        },

        methods: {
        	recursiveMap(items, n) {
                _.forEach(items, (item) => {
                	this.directories.push({ 'label': _.repeat('- ', n) + item.name, 'value': item.id })

                    this.recursiveMap(item.children, n + 1)
                })
            },

        	fetchDirectoryHierarchy() {
                axios.get('/api/directories?recursive=true').then(({ data }) => {
                	this.directories.push({ 'label': 'Root', 'value': '0' })

                	this.recursiveMap(data.data, 1)
                })
            }
        },

        created() {
        	this.fetchDirectoryHierarchy()
        }
    }
</script>
