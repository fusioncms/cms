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
Vue.component('blueprint', require('@/components/Blueprints/Blueprint').default)
Vue.component('blueprint-area', require('@/components/Blueprints/BlueprintArea').default)
Vue.component('blueprint-section', require('@/components/Blueprints/BlueprintSection').default)
Vue.component('confirm-modal', require('@/components/Modals/ConfirmModal').default)
Vue.component('update-modal', require('@/components/Modals/UpdateModal').default)
Vue.component('fieldtype-picker', require('@/components/FieldtypePicker').default)
Vue.component('icon-picker', require('@/components/IconPicker').default)
Vue.component('layout-header', require('@/components/Layout/Header').default)
Vue.component('layout-footer', require('@/components/Layout/Footer').default)
Vue.component('nav-menu', require('@/components/Navigation/Navigation').default)
Vue.component('nav-item', require('@/components/Navigation/NavigationItem').default)
Vue.component('nav-toggle', require('@/components/Navigation/NavigationToggle').default)
Vue.component('option-builder', require('@/components/OptionBuilder').default)
Vue.component('page-title', require('@/components/PageTitle').default)
Vue.component('restore-backup-modal', require('@/components/Modals/RestoreBackupModal').default)
Vue.component('section-card', require('@/components/Cards/SectionCard').default)
Vue.component('settings-modal', require('@/components/Modals/SettingsModal').default)
Vue.component('sidebar', require('@/components/Sidebar/Sidebar').default)
Vue.component('sidebar-section', require('@/components/Sidebar/SidebarSection').default)
Vue.component('status-card', require('@/components/Cards/StatusCard').default)
Vue.component('disk-path-selector', require('@/components/DiskPathSelector').default)

// Interfaces
Vue.component('analytics-overview', require('@/interfaces/Analytics/AnalyticsOverview').default)
Vue.component('quick-links', require('@/interfaces/Dashboard/QuickLinks').default)
Vue.component('recent-activity', require('@/interfaces/Dashboard/RecentActivity').default)
Vue.component('recent-news', require('@/interfaces/Dashboard/RecentNews').default)
Vue.component('field-builder', require('@/interfaces/Fieldsets/FieldBuilder').default)
Vue.component('field-editor', require('@/interfaces/Fieldsets/FieldEditor').default)
Vue.component('file-manager', require('@/interfaces/FileManager/FileManager').default)
Vue.component('delete-file-modal', require('@/interfaces/FileManager/Modals/DeleteFileModal').default)
Vue.component('delete-selected-files-modal', require('@/interfaces/FileManager/Modals/DeleteSelectedFilesModal').default)
Vue.component('move-file-modal', require('@/interfaces/FileManager/Modals/MoveFileModal').default)
Vue.component('new-folder-modal', require('@/interfaces/FileManager/Modals/NewFolderModal').default)
Vue.component('rename-file-modal', require('@/interfaces/FileManager/Modals/RenameFileModal').default)
Vue.component('replace-file-modal', require('@/interfaces/FileManager/Modals/ReplaceFileModal').default)
Vue.component('delete-file-modal', require('@/interfaces/FileManager/Modals/DeleteFileModal').default)
Vue.component('settings-cache', require('@/interfaces/Settings/Cache').default)
Vue.component('settings-backup-disks', require('@/interfaces/Settings/BackupDisks').default)
Vue.component('structures-fieldtypes', require('@/interfaces/Structures/Fieldtypes').default)
Vue.component('user-notifications', require('@/interfaces/Notifications/UserNotifications').default)

Vue.component('disks-configurations-local', require('@/interfaces/Disks/LocalConfigurations').default)
Vue.component('disks-configurations-s3', require('@/interfaces/Disks/S3Configurations').default)
Vue.component('disks-configurations-ftp', require('@/interfaces/Disks/FTPConfigurations').default)
Vue.component('disks-configurations-sftp', require('@/interfaces/Disks/SFTPConfigurations').default)
