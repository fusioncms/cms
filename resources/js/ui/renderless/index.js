import RenderlessAutocompleteComponent from './Autocomplete'
import RenderlessCheckboxComponent from './Checkbox'
import RenderlessDropdownComponent from './Dropdown'
import RenderlessButtonComponent from './Button'
import RenderlessTableComponent from './Table'
import RenderlessRadioComponent from './RenderlessRadio'

export default Vue => {
    Vue.component(RenderlessAutocompleteComponent.name, RenderlessAutocompleteComponent)
    Vue.component(RenderlessCheckboxComponent.name, RenderlessCheckboxComponent)
    Vue.component(RenderlessDropdownComponent.name, RenderlessDropdownComponent)
    Vue.component(RenderlessButtonComponent.name, RenderlessButtonComponent)
    Vue.component(RenderlessTableComponent.name, RenderlessTableComponent)
    Vue.component(RenderlessRadioComponent.name, RenderlessRadioComponent)
}