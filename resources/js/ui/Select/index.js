import SelectComponent from './Select'
import SelectGroupComponent from './SelectGroup'

export default Vue => {
    Vue.component(SelectComponent.name, SelectComponent)
    Vue.component(SelectGroupComponent.name, SelectGroupComponent)
}