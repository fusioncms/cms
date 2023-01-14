import { mapGetters, mapActions } from 'vuex'

export default {
	computed: {
		...mapGetters({
			disk:             'filemanager/getDisk',
			rootDirectory:    'filemanager/getRootDirectory',
			currentDirectory: 'filemanager/getCurrentDirectory',
			parentDirectory:  'filemanager/getParentDirectory',
			breadcrumbs:      'filemanager/getBreadcrumbs',
			directories:      'filemanager/getDirectories',
			files:            'filemanager/getFiles',
			view:             'filemanager/getView',
		}),
	},

	filters: {
		bytes(value) {
		    let thresh = 1000

		    if (Math.abs(value) < thresh) {
		        return value + ' B'
		    }

		    let index = -1
		    let units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

		    do {
		        value /= thresh
		        ++index
		    } while (Math.abs(value) >= thresh && index < units.length - 1)

		    return value.toFixed(1) + ' ' + units[index]
		},

		size(value) {
			return _.size(value)
		}
	},

	methods: {
		...mapActions({
			fetchDisk:                'filemanager/fetchDisk',
			fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
			setCurrentDirectory:      'filemanager/setCurrentDirectory',
			setParentDirectory:       'filemanager/setParentDirectory',
			setRootDirectory:         'filemanager/setRootDirectory',
			reset:                    'filemanager/reset',
		}),

		loadCurrentDirectoryFromLocalStorage(diskId) {
			return window.localStorage.getItem('filemanager_current_directory_' + diskId);
		},
		saveCurrentDirectoryToLocalStorage(directoryId) {
			window.localStorage.setItem('filemanager_current_directory_' + this.disk.id, directoryId);
		},

		navigate(directory) {
			this.reset()

			if (directory) {
				this.saveCurrentDirectoryToLocalStorage(directory.id)
				this.setCurrentDirectory(directory.id)
				this.setParentDirectory(directory.parent_id)
			}

			this.fetchFilesAndDirectories()
		},

		preview(file) {
			this.$router.push({ path: `/files/${this.disk.id}/${file.id}` })
		},
	}
}