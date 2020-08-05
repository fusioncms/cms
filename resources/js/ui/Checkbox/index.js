import CheckboxComponent from './Checkbox'
import CheckboxGroupComponent from './CheckboxGroup'
import CheckboxSingleComponent from './CheckboxSingle'

export default Vue => {
    Vue.component(CheckboxComponent.name, CheckboxComponent)
    Vue.component(CheckboxGroupComponent.name, CheckboxGroupComponent)
    Vue.component(CheckboxSingleComponent.name, CheckboxSingleComponent)
}