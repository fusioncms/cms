<template>
	<div>
		<label :for="field.handle" class="form__label">{{ field.name }}</label>

		<!-- File Manager Modal -->
		<p-modal style="z-index: 9999" name="file-manager" no-header no-footer extra-large v-model="modalOpen">
			<file-uploader ref="uploader"></file-uploader>

			<div class="row" @dragenter="setDropzoneVisible(true)">
				<!--
				<div class="side-container">
					<file-selection
						:limit="selectionLimit"
						@reject="reject"
						@accept="accept"
						v-model="selection">
					</file-selection>
			   	</div>
				-->
				
				<div class="content-container">
					<div class="card">
						<div class="card__body">
                    		<div class="toolbar">
                    			<div class="toolbar__group">
									<button class="button button--icon" @click.prevent="push">
										<fa-icon class="icon" icon="arrow-alt-circle-left"></fa-icon>
									</button>
                    			</div>

                    			<div class="toolbar__group">
                    				<div class="buttons">
										<div class="buttons__group">
											<button class="button button--icon" @click.prevent="$refs.uploader.openDZ()">
												<fa-icon class="icon" :icon="['fas', 'upload']"></fa-icon>
											</button>

											<button class="button button--icon" v-modal:new-folder>
												<fa-icon class="icon" :icon="['fas', 'folder-plus']"></fa-icon>
											</button>
										</div>
									</div>
	                            </div>

                    			<div class="toolbar__group toolbar__group--grow">
		                            <search-action></search-action>
		                        </div>

		                        <div class="toolbar__group">
		                        	<display-action></display-action>
		                        	<sort-action></sort-action>
		                        	<view-action></view-action>
		                        </div>
							</div>
						</div>

						<div class="flex items-center border-b border-gray-200 px-3 py-2">
							<breadcrumb-action></breadcrumb-action>
						</div>

						<div class="gallery-container selectables">
							<div class="gallery border-b border-gray-200 pb-2">
								<directory
									v-for="directory in directories"
									:key="directory.id"
									:directory="directory"
									:isDropzone="true"
									@dblclick="navigate(directory)">
								</directory>
							</div>

							<div class="gallery">
								<file
									v-for="file in files"
									:key="file.id"
									:file="file"
									@dblclick="add(file.id); accept()">
								</file>
							</div>
						</div>

            		</div>
            	</div>
            </div>
        </p-modal>
    <editor
       api-key="no-api-key"
        :name="field.handle"
        :label="field.name"
        :help="field.help"
        :placeholder="field.settings.placeholder"
        :value="value"
        @input="$emit('input', $event)"
        :config="{
            plugins: ['table']
        }"
       :init="init"
     />
	 </div>
</template>

<style lang="scss">
	@import '~tinymce/skins/ui/oxide/skin.min.css';
	@import '~tinymce/skins/ui/oxide/content.min.css';
	@import '~tinymce/skins/content/default/content.min.css';
</style>

<script>
	import Editor from '@tinymce/tinymce-vue'
		
	import 'tinymce/tinymce'

	// Theme
	import 'tinymce/themes/silver/theme'

	// Skins
	//import 'tinymce/skins/ui/oxide/skin.min.css'
	//import 'tinymce/skins/ui/oxide/content.min.css'
	//import 'tinymce/skins/content/default/content.min.css' 

	// Plugins
	import 'tinymce/plugins/fullscreen'
	import 'tinymce/plugins/paste'
	import 'tinymce/plugins/autoresize'
	import 'tinymce/plugins/image'
	import 'tinymce/plugins/media'
	
	import { FusionMedia, FusionMediaFilePickerCallback } from '../../../vendor/tinymce-fusion-media/plugin.js'
	
	
	import { mapActions } from 'vuex'

	import FileUploader  from '../../components/file-manager/FileUploader.vue'
	import FileSelection from '../../components/file-manager/FileSelection.vue'

	import BreadcrumbAction from '../../components/file-manager/actions/Breadcrumb.vue'
	import DisplayAction    from '../../components/file-manager/actions/Display.vue'
	import SearchAction     from '../../components/file-manager/actions/Search.vue'
	import SortAction       from '../../components/file-manager/actions/Sort.vue'
	import ViewAction       from '../../components/file-manager/actions/View.vue'

	import Directory from '../../components/file-manager/browse/Directory.vue'
	import File      from '../../components/file-manager/browse/File.vue'

    export default {
        name: 'tinymce-fieldtype',
		components: {
			'editor': Editor,
			'file-uploader':  FileUploader,
			'file-selection': FileSelection,

			'display-action':    DisplayAction,
			'breadcrumb-action': BreadcrumbAction,
			'search-action':     SearchAction,
			'sort-action':       SortAction,
			'view-action':       ViewAction,

			'directory': Directory,
			'file':      File,
		},
        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: '',
            },
        },

		mixins: [
			require('../../mixins/fileselector').default,
			require('../../mixins/filedragdrop').default,
            require('../../mixins/filebrowser').default,
        ],

		data() {
            return {
            	requestOpen: false,
            	modalOpen: false,
            	selection: [],
            }
        },
		
		

		watch: {
			loading(isLoading) {
				this.$nextTick(() => {
					if (isLoading) {
						this.destroySelector()
					} else {
						this.loadSelector(this.$el.querySelector('.selectables'))

						if (this.requestOpen) {
							this.modalOpen   = true
							this.requestOpen = false
						}
					}
				})
			}
		},

        computed: {
			init() {
				return {
					plugins: 'paste, image, media, fullscreen',
					file_picker_callback: FusionMediaFilePickerCallback(this),
					height: 500,
					inline_styles: false,
					paste_preprocess: function(pl, o) {
						o.content = o.content 
							//.replace(/<div(.*?)>(.*?)<\/div>/gi, '<p$1>$2</p>')
							.replace(/<div(.*?)>(.*?)<\/div>/gi, '$2') 
							//.replace(/(.*?)<br\s?\/?>/gi, '<p>$1</p>')
							.replace(/(.*?)<br\s?\/?>/gi, '<p>$1</p>')
					},
					file_picker_types: 'file image media',
					media_dimensions: false,
					image_dimensions: false,
					image_caption: true,
					image_class_list: [
						{title: 'Full width', value: 'img-responsive img-fluid'},
						{title: 'Original width', value: 'cms-img'},
					],
				}
			},
			selected: {
				get() {
					return []
					//return this.value || []
				},

				set(value) {
					this.$emit('fileSelected', value[0])
					//this.$emit('input', value)
				}
			},

			selectionLimit() {
				return 1;
				return Number(this.field.settings.limit) || Infinity
			},

			addLimit() {
				return this.selectionLimit - this.selection.length
			},

			typeRestriction() {
				return this.field.settings.filetype_restrictions
			}
        },

		methods: {
			...mapActions({
                setDropzoneVisible: 'filemanager/setDropzoneVisible',
            }),

            isValidSelection(file) {
            	return this.typeRestriction.length == 0 || _.includes(this.typeRestriction, file.type)
            },

			push() {
				_.forEach(this.selectedFiles, (id) => this.add(id))
			},

			add(id) {
				if (this.addLimit > 0) {
					let exists = _.find(this.selection, [ 'id', id ])
					let file   = _.find(this.files, [ 'id', id ])

					if (! exists && this.isValidSelection(file)) {
						this.selection.push(file)
					}
				}
			},

			open() {
				this.reset()
				this.setCurrentDirectory(this.field.settings.root_directory)
        		this.setRootDirectory(this.field.settings.root_directory)
				this.fetchFilesAndDirectories()

				this.selection = [...this.selected]
				this.requestOpen = true
			},

			close() {
				this.reset()

				this.selection = []
				this.modalOpen = false
			},

			reject() {
				this.close()
			},

			accept() {
				this.selected = this.selection
				this.close()
			}
		},

		beforeDestroy() {
			this.reset()
		}
    }
</script>
