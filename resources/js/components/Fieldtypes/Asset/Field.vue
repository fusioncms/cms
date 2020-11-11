<template>
	<div>
        <ui-field-group
            :name="field.handle"
            :fieldId="`${field.handle}-field`"
            :label="field.name"
            :help="field.help"
            :hasError="hasError(field.handle)"
            :errorMessage="errorMessage(field.handle)">

            <ui-button :disabled="requestOpen" @click="open">
                <fa-icon :icon="['fas', 'tasks']" class="mr-1"></fa-icon>
                <span>Manage Asset Selection</span>
            </ui-button>

            <file-selection
                :limit="selectionLimit"
                :hasHeader="false"
                v-model="selected">
            </file-selection>
        </ui-field-group>

		<ui-modal name="file-manager" no-header no-footer extra-large v-model="modalOpen">
			<file-uploader ref="uploader"></file-uploader>

			<div class="row" @dragenter="setDropzoneVisible(true)">
				<div class="side-container">
					<file-selection
						:limit="selectionLimit"
						@reject="reject"
						@accept="accept"
						v-model="selection">
					</file-selection>
			   	</div>

				<div class="content-container">
					<div class="card">
						<div class="card__body">
                    		<div class="toolbar">
                    			<div class="toolbar__group">
									<ui-button icon @click.prevent="push">
										<fa-icon class="icon" icon="arrow-alt-circle-left"></fa-icon>
									</ui-button>
                    			</div>

                    			<div class="toolbar__group">
                    				<div class="buttons">
										<div class="buttons__group">
											<ui-button icon @click.prevent="$refs.uploader.openDZ()">
												<fa-icon class="icon" :icon="['fas', 'upload']"></fa-icon>
											</ui-button>

											<ui-button icon v-modal:new-folder>
												<fa-icon class="icon" :icon="['fas', 'folder-plus']"></fa-icon>
											</ui-button>
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
									@dblclick="add(file.id)">
								</file>
							</div>
						</div>

            		</div>
            	</div>
            </div>
        </ui-modal>

        <portal to="modals">
            <new-folder-modal></new-folder-modal>
        </portal>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	import FileUploader  from '@/interfaces/FileManager/FileUploader.vue'
	import FileSelection from '@/interfaces/FileManager/FileSelection.vue'

	import BreadcrumbAction from '@/interfaces/FileManager/Actions/Breadcrumb.vue'
	import DisplayAction    from '@/interfaces/FileManager/Actions/Display.vue'
	import SearchAction     from '@/interfaces/FileManager/Actions/Search.vue'
	import SortAction       from '@/interfaces/FileManager/Actions/Sort.vue'
	import ViewAction       from '@/interfaces/FileManager/Actions/View.vue'

	import Directory from '@/interfaces/FileManager/Browse/Directory.vue'
	import File      from '@/interfaces/FileManager/Browse/File.vue'

	export default {
		name: 'asset-fieldtype',

		components: {
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

		mixins: [
			require('@/mixins/fieldtypes/field').default,
			require('@/mixins/fileselector').default,
			require('@/mixins/filedragdrop').default,
            require('@/mixins/filebrowser').default,
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
			selectionLimit() {
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
				this.setCurrentDirectory(this.field.settings.root_directory || 0)
        		this.setRootDirectory(this.field.settings.root_directory || 0)
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

		created() {
			if (_.isEmpty(this.value)) {
				this.selected = []
			}
		},

		beforeDestroy() {
			this.reset()
		}
	}
</script>