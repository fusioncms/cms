<template>
    <div title="Actions">
	<ui-dropdown id="control-filter" right v-if="hasSelection">
	    <fa-icon class="fa-fw" :icon="['fas', 'bolt']"></fa-icon>
            <span class="hidden md:inline">Actions</span>
	    <template v-slot:menu>
		<ui-dropdown-link @click.prevent="clearSelection"><fa-icon class="icon" :icon="['fas', 'minus-square']"></fa-icon> Unselect All</ui-dropdown-link>
		<ui-dropdown-link v-if="singleSelection" v-modal:rename-file><fa-icon class="icon" :icon="['fas', 'tag']"></fa-icon> Rename File</ui-dropdown-link>
		<ui-dropdown-link v-modal:move-file><fa-icon class="icon" :icon="['fas', 'exchange-alt']"></fa-icon> Move Selected</ui-dropdown-link>
		<ui-dropdown-link v-modal:delete><fa-icon class="icon" :icon="['fas', 'trash']"></fa-icon> Delete Selected</ui-dropdown-link>
	    </template>
	</ui-dropdown>
	<ui-dropdown id="control-filter" right v-else :disabled="true">
	    <fa-icon class="fa-fw" :icon="['fas', 'bolt']"></fa-icon>
            <span class="hidden md:inline">Actions</span>
	</ui-dropdown>

	<portal to="modals">
	    <move-file-modal></move-file-modal>
	    <rename-file-modal :selection="singleSelection"></rename-file-modal>
	    <delete-selected-files-modal></delete-selected-files-modal>
	</portal>
    </div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'file-manager-control-action',

		computed: {
			...mapGetters({
				selectedDirectories: 'filemanager/getSelectedDirectories',
				selectionCount:      'filemanager/selectionCount',
                selectedFiles:       'filemanager/getSelectedFiles',
				hasSelection:        'filemanager/hasSelection',
				directories:         'filemanager/getDirectories',
				files:               'filemanager/getFiles',
			}),

			singleSelection() {
                if (this.selectedDirectories.length == 1 && this.selectedFiles.length == 0) {
                    return _.find(this.directories, ['id', this.selectedDirectories[0]])
                }
                else if (this.selectedDirectories.length == 0 && this.selectedFiles.length == 1) {
                    return _.find(this.files, ['id', this.selectedFiles[0]])
                }

                return false
            }
		},

		methods: {
			...mapActions({
				clearDirectorySelection: 'filemanager/clearDirectorySelection',
				clearFileSelection:      'filemanager/clearFileSelection',
			}),

			clearSelection() {
                this.clearFileSelection()
                this.clearDirectorySelection()
            },
		}
	}
</script>