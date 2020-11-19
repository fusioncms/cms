<template>
	<ui-field-group
        :name="field.handle"
        :fieldId="`${field.handle}-field`"
        :label="field.name"
        :help="field.help"
        :hasError="hasError(field.handle)"
        :errorMessage="errorMessage(field.handle)">

        <div class="flex items-center justify-between">
    		<input
                ref="upload"
    			type="file"
    			:id="field.handle"
    			:name="`${field.handle}[]`"
    			:accept="accept"
    			:multiple="multiple"
                @input="onChange">

            <ui-button @click="clear">
                <fa-icon :icon="['fas', 'times-circle']"></fa-icon>
                Clear
            </ui-button>
        </div>

        <table class="table">
            <tbody>
                <tr v-for="(item, index) in model" :key="`file-${index}`">
                    <td>
                        <img
                            v-if="item.type == 'image'"
                            :src="item.url"
                            :alt="item.name"/>

                        <img
                            v-else
                            :src="'/vendor/fusion/img/' + filetype(item.type) + '-small.svg'"
                            :alt="item.name"/>
                    </td>
                    <td>
                        <span class="help">{{ item.name }}</span>
                    </td>
                    <td>
                        <code>{{ filesize(item.size | item.bytes) }}</code>
                    </td>
                </tr>
            </tbody>
        </table>

        <div v-if="model.length" class="rounded-md shadow bg-yellow-100 p-2 mt-2">
        	<div class="flex">
				<div class="flex-shrink-0">
					<svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
					</svg>
				</div>
				<div class="px-2">
					<div class="text-sm leading-5 text-yellow-700">
            			Uploading new files will clear existing files.
            		</div>
            	</div>
            </div>
        </div>
	</ui-field-group>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'
    import FileHelper from '@/mixins/filehelper'

	export default {
		name: 'file-fieldtype',

        mixins: [FieldMixin, FileHelper],

		computed: {
            multiple() {
                return _.defaultTo(this.field.settings.multiple, false)
            },

            accept() {
                return _.defaultTo(this.field.settings.accept, '')
            }
        },

        methods: {
        	onChange(ev) {
                this.$emit('input', ev.target.files)
        	},

            clear() {
                this.$refs.upload.value = ''
                this.model = []
            }
        },

        mounted() {
            if (_.isEmpty(this.value)) {
                this.model = []
            }
        }
	}
</script>