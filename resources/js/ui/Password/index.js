import PasswordComponent from './Password'
import PasswordGroupComponent from './PasswordGroup'

export default Vue => {
    Vue.component(PasswordComponent.name, PasswordComponent)
    Vue.component(PasswordGroupComponent.name, PasswordGroupComponent)
}