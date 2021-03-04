<template>
	<div class="gallery-container selectables">
		<div class="gallery pb-2">
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
				@dblclick="preview(file)">
			</file>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	import Directory from './Browse/Directory.vue'
	import File      from './Browse/File.vue'

	import FileBrowserMixin  from '@/mixins/filebrowser'
	import FileDragDropMixin from '@/mixins/filedragdrop'
	import FileSelectorMixin from '@/mixins/fileselector'

	export default {
		name: 'file-manager-browser',

		mixins: [FileBrowserMixin, FileDragDropMixin, FileSelectorMixin],

		components: {
			'directory': Directory,
			'file':      File,
		},

		watch: {
			loading: function(isLoading) {
				this.$nextTick(() => {
					if (isLoading) {
						this.destroySelector()
					} else {
						this.loadSelector(this.$el)
					}
				})
			}
		},

		methods: {
			...mapActions({
				moveFileToDirectory: 'filemanager/moveFileToDirectory',
			})
		},

		mounted() {
			this.$on('drag-n-drop', ({ dropzone, selection }) => {
				this.moveFileToDirectory({ directory: dropzone, moving: selection })
			})
		}
	}
</script>