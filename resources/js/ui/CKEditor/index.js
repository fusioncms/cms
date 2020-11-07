import CKEditorComponent from './CKEditor'
import CKEditorGroupComponent from './CKEditorGroup'

export default Vue => {
    Vue.component(CKEditorComponent.name, CKEditorComponent)
    Vue.component(CKEditorGroupComponent.name, CKEditorGroupComponent)
}