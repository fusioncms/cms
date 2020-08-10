import Vue from 'vue';
import * as UI from '../ui'

// UI
Object.values(UI).forEach((Component) => {
    Vue.use(Component)
})

// Layouts
Vue.component('admin-layout', require('./layouts/Admin').default)
Vue.component('blank-layout', require('./layouts/Blank').default)
Vue.component('default-layout', require('./layouts/Default').default)
Vue.component('error-layout', require('./layouts/Error').default)

// Components
Vue.component('app', require('./components/App').default)
Vue.component('confirm-modal', require('./components/Modals/ConfirmModal').default)
Vue.component('edit-directory-modal', require('./components/Modals/EditDirectoryModal').default) // TODO
Vue.component('fieldset-picker', require('./components/FieldsetPicker').default)
Vue.component('form-container', require('./components/FormContainer').default)
Vue.component('icon-picker', require('./components/IconPicker').default)
Vue.component('nav-menu', require('./components/Navigation/Navigation').default)
Vue.component('nav-item', require('./components/Navigation/NavigationItem').default)
Vue.component('nav-toggle', require('./components/Navigation/NavigationToggle').default)
Vue.component('option-builder', require('./components/OptionBuilder').default)
Vue.component('page-title', require('./components/PageTitle').default)
Vue.component('privacy-modal', require('./components/Modals/PrivacyModal').default)
Vue.component('select-directory-modal', require('./components/Modals/SelectDirectoryModal').default)
Vue.component('settings-modal', require('./components/Modals/SettingsModal').default)
Vue.component('tos-modal', require('./components/Modals/TOSModal').default)