import Vue from 'vue';

// Layouts
Vue.component('admin-layout', require('../layouts/Admin').default)
Vue.component('error-layout', require('../layouts/Error').default)
Vue.component('default-layout', require('../layouts/Default').default)
Vue.component('blank-layout', require('../layouts/Blank').default)

// App
Vue.component('app', require('../components/App').default)
Vue.component('app-title', require('../components/AppTitle').default)
Vue.component('tos-modal', require('../components/Modals/TOSModal').default)
Vue.component('privacy-modal', require('../components/Modals/PrivacyModal').default)
Vue.component('confirm-modal', require('../components/Modals/ConfirmModal').default)
Vue.component('settings-modal', require('../components/Modals/SettingsModal').default)
Vue.component('analytics-overview', require('../components/AnalyticsOverview').default)
Vue.component('recent-activity', require('../components/RecentActivity').default)
Vue.component('recent-news', require('../components/RecentNews').default)
Vue.component('quicklinks', require('../components/Quicklinks').default)
Vue.component('icon-picker', require('../components/IconPicker').default)

Vue.component('p-frame', require('../components/Frame').default)
Vue.component('form-container', require('../components/FormContainer').default)
Vue.component('field-set', require('../components/Fieldset').default)

// File Manager
Vue.component('file-manager', require('../components/FileManager/FileManager').default)
Vue.component('new-folder-modal', require('../components/FileManager/Modals/NewFolderModal').default)
Vue.component('move-file-modal', require('../components/FileManager/Modals/MoveFileModal').default)
Vue.component('replace-file-modal', require('../components/FileManager/Modals/ReplaceFileModal').default)
Vue.component('rename-file-modal', require('../components/FileManager/Modals/RenameFileModal').default)
Vue.component('delete-file-modal', require('../components/FileManager/Modals/DeleteFileModal').default)
Vue.component('delete-selected-files-modal', require('../components/FileManager/Modals/DeleteSelectedFilesModal').default)

// Fieldtypes
Vue.component('section-builder', require('../components/Fieldtypes/SectionBuilder').default)

// Settings
Vue.component('settings-mail-test', require('../components/Settings/MailTest').default)
Vue.component('settings-cache', require('../components/Settings/Cache').default)
Vue.component('settings-mail-test', require('../components/Settings/MailTest').default)
