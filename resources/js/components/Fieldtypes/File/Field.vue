<template>
	<div class="field">
		<div class="form__group">
			<label
	            class="form__label"
	            :for="field.handle"
	            v-html="field.name">
	        </label>

			<input
				type="file"
				:id="field.handle"
				:name="`${field.handle}[]`"
				:accept="accept"
				:multiple="multiple"
				:required="required"
				@input="onChange"
			/>

			<div class="form__control--meta" v-if="field.help">
	            <div class="form__help">
	                <span class="field__help" v-html="field.help"></span>
	            </div>
	        </div>

	        <div v-if="files.length" class="bg-white shadow rounded-md mt-2">
	            <ul>
	                <li v-for="(file, index) in files" :key="`file.${index}`">
	                    <div class="p-2 sm:px-4">
	                        <div class="flex items-center justify-between">

	                        	<img v-if="file.type == 'image'" class="upload__file--preview max-w-12" :src="file.url" :alt="file.name"/>
	                        	<img v-else class="upload__file--preview max-w-12" :src="`/vendor/fusion/img/${file.type}-large.svg`" :alt="file.name"/>

	                            <div class="upload__file--name" v-text="file.name" />

	                            <div class="upload__file--size" v-text="filesize(file.bytes)" />
	                        </div>
	                    </div>
	                </li>
	            </ul>
	        </div>

	        <div v-if="files.length" class="rounded-md shadow bg-yellow-100 p-2 mt-2">
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
		</div>
	</div>
</template>

<script>
	export default {
		name: 'file-fieldtype',

		mixins: [
			require ('@/mixins/filehelper').default
		],

		data() {
			return {
				files: []
			}
		},

		props: {
			field: {
				type: Object,
				required: true,
			},

			value: {
                required: false,
                default: () => [],
            }
		},

		computed: {
            multiple() {
                return _.defaultTo(this.field.settings.multiple, false)
            },

            accept() {
                return _.defaultTo(this.field.settings.accept, '')
            },

            required() {
                return String(this.field.validation).includes('required')
            }
        },

        methods: {
        	onChange(ev) {
        		const fileList = ev.target.files

        		if (fileList.length == 0)
        			this.$emit('input', this.files)
				else
        			this.$emit('input', fileList)
        	}
        },

        mounted() {
        	if (_.isArray(this.value))
        		this.files = [...this.value]
        }
	}
</script>