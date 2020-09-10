import NumberComponent from './Number'
import NumberGroupComponent from './NumberGroup'

export default Vue => {
    Vue.component(NumberComponent.name, NumberComponent)
    Vue.component(NumberGroupComponent.name, NumberGroupComponent)
}