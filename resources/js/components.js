import Vue from 'vue';
import * as UI from '@/ui'

// UI
Object.values(UI).forEach((Component) => {
    Vue.use(Component)
})

// Layouts
Vue.component('admin-layout', require('@/layouts/Admin').default)
Vue.component('blank-layout', require('@/layouts/Blank').default)
Vue.component('default-layout', require('@/layouts/Default').default)
Vue.component('error-layout', require('@/layouts/Error').default)

// Components
Vue.component('app', require('@/components/App').default)
Vue.component('confirm-modal', require('@/components/Modals/ConfirmModal').default)
Vue.component('edit-directory-modal', require('@/components/Modals/EditDirectoryModal').default) // TODO
Vue.component('fieldset-picker', require('@/components/FieldsetPicker').default)
Vue.component('form-container', require('@/components/FormContainer').default)
Vue.component('icon-picker', require('@/components/IconPicker').default)
Vue.component('nav-menu', require('@/components/Navigation/Navigation').default)
Vue.component('nav-item', require('@/components/Navigation/NavigationItem').default)
Vue.component('nav-toggle', require('@/components/Navigation/NavigationToggle').default)
Vue.component('option-builder', require('@/components/OptionBuilder').default)
Vue.component('page-title', require('@/components/PageTitle').default)
Vue.component('privacy-modal', require('@/components/Modals/PrivacyModal').default)
Vue.component('select-directory-modal', require('@/components/Modals/SelectDirectoryModal').default)
Vue.component('settings-modal', require('@/components/Modals/SettingsModal').default)
Vue.component('tos-modal', require('@/components/Modals/TOSModal').default)

// Interfaces
Vue.component('analytics-overview', require('@/interfaces/Analytics/AnalyticsOverview').default)
Vue.component('quick-links', require('@/interfaces/Dashboard/QuickLinks').default)
Vue.component('recent-activity', require('@/interfaces/Dashboard/RecentActivity').default)
Vue.component('recent-news', require('@/interfaces/Dashboard/RecentNews').default)
Vue.component('field-builder', require('@/interfaces/Fieldsets/FieldBuilder').default)
Vue.component('field-editor', require('@/interfaces/Fieldsets/FieldEditor').default)
Vue.component('section-builder', require('@/interfaces/Fieldsets/SectionBuilder').default)
Vue.component('section-editor', require('@/interfaces/Fieldsets/SectionEditor').default)
Vue.component('file-manager', require('@/interfaces/FileManager/FileManager').default)
Vue.component('delete-file-modal', require('@/interfaces/FileManager/Modals/DeleteFileModal').default)
Vue.component('delete-selected-files-modal', require('@/interfaces/FileManager/Modals/DeleteSelectedFilesModal').default)
Vue.component('move-file-modal', require('@/interfaces/FileManager/Modals/MoveFileModal').default)
Vue.component('new-folder-modal', require('@/interfaces/FileManager/Modals/NewFolderModal').default)
Vue.component('rename-file-modal', require('@/interfaces/FileManager/Modals/RenameFileModal').default)
Vue.component('replace-file-modal', require('@/interfaces/FileManager/Modals/ReplaceFileModal').default)
Vue.component('delete-file-modal', require('@/interfaces/FileManager/Modals/DeleteFileModal').default)
Vue.component('settings-cache', require('@/interfaces/Settings/Cache').default)
Vue.component('settings-mail-test', require('@/interfaces/Settings/MailTest').default)