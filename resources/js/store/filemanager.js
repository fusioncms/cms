import _ from 'lodash'

export default {
    namespaced: true,

    state: {
        disk: {},
        loading: true,
        files: [],
        directory: 0,
        directories: [],
        selected: {
            files: [],
            directories: [],
        },
        rootDirectory: 0,
        currentDirectory: 0,
        parentDirectory: 0,
        breadcrumbs: [],
        search: '',
        display: 'everything',
        sort: 'name',
        direction: 'asc',
        view: 'grid',
        currentPage: 1,
        totalPages: 1,
        uploadProgress: 0,
        uploadsVisible: false,
        uploadsMinimized: false,
        fileUploads: [],
        dropzoneVisible: false,
        dropzoneEnabled: true
    },

    getters: {
        getDisk(state) {
            return state.disk
        },

        getLoading(state) {
            return state.loading
        },

        getFiles(state) {
            return state.files
        },

        getDirectories(state) {
            return state.directories
        },

        getBreadcrumbs(state) {
            return state.breadcrumbs
        },

        getView(state) {
            return state.view
        },

        getSearch(state) {
            return state.search
        },

        getRootDirectory(state) {
            return state.rootDirectory
        },

        getCurrentDirectory(state) {
            return state.currentDirectory
        },
        
        getParentDirectory(state) {
            return state.parentDirectory
        },

        getDisplay(state) {
            return state.display
        },

        getSort(state) {
            return state.sort
        },

        getDirection(state) {
            return state.direction
        },

        getSelectedFiles(state) {
            return state.selected.files
        },

        getSelectedDirectories(state) {
            return state.selected.directories
        },

        hasSelection(state) {
            return (state.selected.files.length + state.selected.directories.length) > 0
        },

        selectionCount(state) {
            return state.selected.files.length + state.selected.directories.length
        },

        getCurrentPage(state) {
            return state.currentPage
        },

        getTotalPages(state) {
            return state.totalPages
        },

        getUploadProgress(state) {
            return state.uploadProgress
        },

        getUploadsVisible(state) {
            return state.uploadsVisible
        },

        getUploadsMinimized(state) {
            return state.uploadsMinimized
        },

        getFileUploads(state) {
            return state.fileUploads
        },

        getDropzoneVisible(state) {
            return state.dropzoneVisible && state.dropzoneEnabled
        },

        getFileFilters(state) {
            return {
                'filter[directory_id]': state.currentDirectory,
                'filter[display]':      (state.display !== 'everything') ? state.display : null,
                'filter[search]':       (state.search !== '') ? state.search : null,
                'sort':                 (state.direction === 'asc' ? '' : '-') + state.sort,
                'page':                 state.currentPage,
                'perPage':              state.perPage,
            }
        },

        getDirectoryFilters(state) {
            return {
                'filter[search]':    (state.search !== '') ? state.search : null,
                'filter[parent_id]': state.currentDirectory,
                'sort':              (state.sort == 'name' ? (state.direction === 'asc' ? 'name' : '-name') : null)
            }
        }
    },

    mutations: {
        setDisk(state, disk) {
            state.disk = disk
        },

        setLoading(state, loading) {
            state.loading = loading
        },

        setFiles(state, files) {
            state.files = files
        },

        setDirectory(state, directory) {
            state.directory = directory
        },

        setDirectories(state, directories) {
            state.directories = directories
        },

        setRootDirectory(state, directory) {
            state.rootDirectory = directory
        },

        setCurrentDirectory(state, directory) {
            state.currentDirectory = directory
        },

        setParentDirectory(state, directory) {
            state.parentDirectory = directory
        },

        setBreadcrumbs(state, breadcrumbs) {
            state.breadcrumbs = breadcrumbs
        },

        setView(state, view) {
            state.view = view
        },

        setSearch(state, query) {
            state.search = query
        },

        setDisplay(state, display) {
            state.display = display
        },

        setSort(state, sortBy) {
            state.sort = sortBy
        },

        setDirection(state, direction) {
            state.direction = direction
        },

        addFile(state, file) {
            state.files.push(file)
        },

        toggleFileSelection(state, file) {
            state.selected.files = _.xor(state.selected.files, [file])
        },

        clearFileSelection(state) {
            state.selected.files = []
        },

        toggleDirectorySelection(state, directory) {
            state.selected.directories = _.xor(state.selected.directories, [directory])
        },

        clearDirectorySelection(state) {
            state.selected.directories = []
        },

        removeFiles(state, files) {
            _.each(files, function(id) {
                let index = _.findIndex(state.files, function(file) {
                    return file.id == id
                })

                state.files.splice(index, 1)
            })
        },

        clearFiles(state) {
            state.files = []
        },

        setCurrentPage(state, page) {
            state.currentPage = page
        },

        setTotalPages(state, pages) {
            state.totalPages = pages
        },

        setUploadProgress(state, progress) {
            state.uploadProgress = progress
        },

        setUploadsMinimized(state, value) {
            state.uploadsMinimized = value
        },

        setUploadsVisible(state, value) {
            state.uploadsVisible = value
        },

        setFileUploads(state, files) {
            state.fileUploads  = files
        },

        addFileUpload(state, file) {
            state.fileUploads.push(file)
        },
        
        setDropzoneVisible(state, value) {
            state.dropzoneVisible = value
        },

        setDropzoneEnabled(state, value) {
            state.dropzoneEnabled = value
        },
    },

    actions: {
        reset({ commit }) {
            commit('setRootDirectory', 0)
            commit('setCurrentDirectory', null)
            commit('setParentDirectory', null)
            commit('clearFileSelection')
            commit('clearDirectorySelection')
        },

        setLoading(context, loading) {
            context.commit('setLoading', loading)
        },

        setFiles(context, files) {
            context.commit('setFiles', files)
        },

        addFile(context, file) {
            context.commit('addFile', file)
        },

        toggleFileSelection(context, file) {
            context.commit('toggleFileSelection', file)
        },

        toggleDirectorySelection(context, directory) {
            context.commit('toggleDirectorySelection', directory)
        },

        clearFiles(context) {
            context.commit('clearFiles')
        },

        removeFiles(context, files) {
            context.commit('removeFiles', files)
        },

        clearFileSelection(context) {
            context.commit('clearFileSelection')
        },

        clearDirectorySelection(context) {
            context.commit('clearDirectorySelection')
        },

        fetchDisk({ commit, dispatch }, disk) {
            axios.get(`/api/disks/${disk}`)
                .then(({ data }) => {
                    commit('setDisk', data.data)
                    dispatch('reset')
                    dispatch('fetchFilesAndDirectories')
                })
                .catch((errors) => console.log(errors))
        },

        fetchFilesAndDirectories: _.throttle(({ state, getters, commit, dispatch }) => {
            commit('setLoading', true)

            let getDirectory = null

            if (state.currentDirectory > 0)
                getDirectory = axios.get(`/api/directories/${state.disk.id}/${state.currentDirectory}`)

            axios.all([
                axios.get(`/api/files/${state.disk.id}`, { params: getters.getFileFilters }),
                axios.get(`/api/directories/${state.disk.id}`, { params: getters.getDirectoryFilters }),
                getDirectory
            ]).then(
                axios.spread((files, directories, currentDirectory) => {
                    commit('setFiles',       files.data.data)
                    commit('setTotalPages',  files.data.meta.last_page)
                    commit('setDirectories', directories.data.data)
                    commit('setDirectory',   currentDirectory ? currentDirectory.data.data : null)
                    commit('setLoading',     false)

                    dispatch('setBreadcrumbs')
                })
            ).catch(errors => {
                console.error(errors)
            })
        }, 500),

        fetchFiles: _.throttle(({ state, getters, commit, dispatch }) => {
            commit('setLoading', true)

            let getDirectory = null

            if (state.currentDirectory > 0)
                getDirectory = axios.get(`/api/directories/${state.disk.id}/${state.currentDirectory}`)

            axios.all([
                axios.get(`/api/files/${state.disk.id}`, { params: getters.getFileFilters }),
                getDirectory
            ]).then(
                axios.spread((files, currentDirectory) => {
                    commit('setFiles',       files.data.data)
                    commit('setTotalPages',  files.data.meta.last_page)
                    commit('setDirectory',   currentDirectory ? currentDirectory.data.data : null)
                    commit('setLoading',     false)

                    dispatch('setBreadcrumbs')
                })
            ).catch(errors => {
                console.error(errors)
            })
        }, 500),

        fetchDirectories: _.throttle(({ state, getters, commit, dispatch }) => {
            commit('setLoading', true)

            let getDirectory = null

            if (state.currentDirectory > 0)
                getDirectory = axios.get(`/api/directories/${state.disk.id}/${state.currentDirectory}`)

            axios.all([
                axios.get(`/api/directories/${state.disk.id}`, { params: getters.getDirectoryFilters }),
                getDirectory
            ]).then(
                axios.spread((directories, currentDirectory) => {
                    commit('setDirectories', directories.data.data)
                    commit('setDirectory',   currentDirectory ? currentDirectory.data.data : null)
                    commit('setLoading',     false)

                    dispatch('setBreadcrumbs')
                })
            ).catch(errors => {
                console.error(errors)
            })
        }, 500),

        moveFileToDirectory({ commit, state, dispatch }, payload) {
            axios.post(`/api/files/${state.disk.id}/move`, {
                directory: payload.directory,
                moving: payload.moving
            }).then(response  => {
                dispatch('fetchFilesAndDirectories')

                toast('File(s) have been successfully moved!', 'success')
            }).catch(errors => {
                toast(errors.response.data.errors.moving[0], 'failed')
            })
        },

        setSearch(context, query) {
            context.commit('setSearch', query)
        },

        setDisplay(context, display) {
            context.commit('setDisplay', display)
        },

        setSort(context, sortBy) {
            context.commit('setSort', sortBy)
        },

        setDirection(context, direction) {
            context.commit('setDirection', direction)
        },

        setBreadcrumbs({ state, commit }) {
            let breadcrumbs = []
            let directory   = state.directory
            let root        = state.rootDirectory

            while (_.has(directory, 'id') && directory.id != root) {
                breadcrumbs.unshift(directory)
                directory = directory.parent
            }

            if (root == 0) {
                breadcrumbs.unshift({ id: null, name: 'Root' })
            } else {
                breadcrumbs.unshift(directory)
            }

            commit('setBreadcrumbs', breadcrumbs)
        },

        setDirectories(context, directories) {
            context.commit('setDirectories', directories)
        },

        setRootDirectory(context, directory) {
            context.commit('setRootDirectory', directory)
        },

        setCurrentDirectory(context, directory) {
            context.commit('setCurrentDirectory', directory)
        },

        setParentDirectory(context, directory) {
            context.commit('setParentDirectory', directory)
        },

        setCurrentPage(context, page) {
            context.commit('setCurrentPage', page)
        },

        setTotalPages(context, pages) {
            context.commit('setTotalPages', pages)
        },

        setUploadProgress(context, progress) {
            context.commit('setUploadProgress', progress)
        },

        setUploadsVisible(context, value) {
            context.commit('setUploadsVisible', value)
        },

        setUploadsMinimized(context, value) {
            context.commit('setUploadsMinimized', value)
        },

        setFileUploads(context, files) {
            context.commit('fileUploads', files)
        },

        addFileUpload(context, file) {
            context.commit('addFileUpload', file)
        },

        setDropzoneVisible(context, value) {
            context.commit('setDropzoneVisible', value)
        },

        setDropzoneEnabled(context, value) {
            context.commit('setDropzoneEnabled', value)
        },

        toggleView(context) {
            if (context.state.view === 'grid') {
                context.commit('setView', 'list')
            } else {
                context.commit('setView', 'grid')
            }
        },

        toggleDirection(context) {
            if (context.state.direction === 'asc') {
                context.commit('setDirection', 'desc')
            } else {
                context.commit('setDirection', 'asc')
            }
        },
    }
}