import InputComponent from './Input'
import InputGroupComponent from './InputGroup'

export default Vue => {
    Vue.component(InputComponent.name, InputComponent)
    Vue.component(InputGroupComponent.name, InputGroupComponent)
}