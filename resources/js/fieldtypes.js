import Vue from 'vue'

// Address
Vue.component('address-fieldtype', () => import('./components/Fieldtypes/Address/Field'))
Vue.component('address-fieldtype-settings', () => import('./components/Fieldtypes/Address/Settings'))

// Asset
Vue.component('asset-fieldtype', () => import('./components/Fieldtypes/Asset/Field'))
Vue.component('asset-fieldtype-settings', () => import('./components/Fieldtypes/Asset/Settings'))

// Checkbox
Vue.component('checkbox-fieldtype', () => import('./components/Fieldtypes/Checkbox/Field'))
Vue.component('checkbox-fieldtype-settings', () => import('./components/Fieldtypes/Checkbox/Settings'))

// Code
Vue.component('code-fieldtype', () => import('./components/Fieldtypes/Code/Field'))
Vue.component('code-fieldtype-settings', () => import('./components/Fieldtypes/Code/Settings'))

// Color Picker
Vue.component('color-picker-fieldtype', () => import('./components/Fieldtypes/ColorPicker/Field'))
Vue.component('color-picker-fieldtype-settings', () => import('./components/Fieldtypes/ColorPicker/Settings'))

// Country
Vue.component('country-fieldtype', () => import('./components/Fieldtypes/Country/Field'))
Vue.component('country-fieldtype-settings', () => import('./components/Fieldtypes/Country/Settings'))

// File
Vue.component('file-fieldtype', () => import('./components/Fieldtypes/File/Field'))
Vue.component('file-fieldtype-settings', () => import('./components/Fieldtypes/File/Settings'))

// Form
Vue.component('form-fieldtype', () => import('./components/Fieldtypes/Form/Field'))
Vue.component('form-fieldtype-settings', () => import('./components/Fieldtypes/Form/Settings'))

// Datetime
Vue.component('datetime-fieldtype', () => import('./components/Fieldtypes/DateTime/Field'))
Vue.component('datetime-fieldtype-settings', () => import('./components/Fieldtypes/DateTime/Settings'))

// Divider
Vue.component('divider-fieldtype', () => import('./components/Fieldtypes/Divider/Field'))
Vue.component('divider-fieldtype-settings', () => import('./components/Fieldtypes/Divider/Settings'))

// Information
Vue.component('information-fieldtype', () => import('./components/Fieldtypes/Information/Field'))
Vue.component('information-fieldtype-settings', () => import('./components/Fieldtypes/Information/Settings'))

// Input
Vue.component('input-fieldtype', () => import('./components/Fieldtypes/Input/Field'))
Vue.component('input-fieldtype-settings', () => import('./components/Fieldtypes/Input/Settings'))

// Link
Vue.component('link-fieldtype', () => import('./components/Fieldtypes/Link/Field'))
Vue.component('link-fieldtype-settings', () => import('./components/Fieldtypes/Link/Settings'))

// List
Vue.component('list-fieldtype', () => import('./components/Fieldtypes/List/Field'))
Vue.component('list-fieldtype-settings', () => import('./components/Fieldtypes/List/Settings'))

// Markdown
Vue.component('markdown-fieldtype', () => import('./components/Fieldtypes/Markdown/Field'))
Vue.component('markdown-fieldtype-settings', () => import('./components/Fieldtypes/Markdown/Settings'))

// Number
Vue.component('number-fieldtype', () => import('./components/Fieldtypes/Number/Field'))
Vue.component('number-fieldtype-settings', () => import('./components/Fieldtypes/Number/Settings'))

// Radio
Vue.component('radio-fieldtype', () => import('./components/Fieldtypes/Radio/Field'))
Vue.component('radio-fieldtype-settings', () => import('./components/Fieldtypes/Radio/Settings'))

// Redactor
Vue.component('redactor-fieldtype', () => import('./components/Fieldtypes/Redactor/Field'))
Vue.component('redactor-fieldtype-settings', () => import('./components/Fieldtypes/Redactor/Settings'))
Vue.component('redactor', require('./components/Fieldtypes/Redactor/Redactor').default)

// Replicator
Vue.component('replicator-fieldtype', () => import('./components/Fieldtypes/Replicator/Field'))
Vue.component('replicator-fieldtype-settings', () => import('./components/Fieldtypes/Replicator/Settings'))

// Select
Vue.component('select-fieldtype', () => import('./components/Fieldtypes/Select/Field'))
Vue.component('select-fieldtype-settings', () => import('./components/Fieldtypes/Select/Settings'))

// Taxonomy
Vue.component('taxonomy-fieldtype', () => import('./components/Fieldtypes/Taxonomy/Field'))
Vue.component('taxonomy-fieldtype-settings', () => import('./components/Fieldtypes/Taxonomy/Settings'))

Vue.component('textarea-fieldtype', () => import('./components/Fieldtypes/Textarea/Field'))
Vue.component('textarea-fieldtype-settings', () => import('./components/Fieldtypes/Textarea/Settings'))

Vue.component('toggle-fieldtype', () => import('./components/Fieldtypes/Toggle/Field'))
Vue.component('toggle-fieldtype-settings', () => import('./components/Fieldtypes/Toggle/Settings'))

Vue.component('us-state-fieldtype', () => import('./components/Fieldtypes/USState/Field'))
Vue.component('us-state-fieldtype-settings', () => import('./components/Fieldtypes/USState/Settings'))

Vue.component('user-fieldtype', () => import('./components/Fieldtypes/User/Field'))
Vue.component('user-fieldtype-settings', () => import('./components/Fieldtypes/User/Settings'))
