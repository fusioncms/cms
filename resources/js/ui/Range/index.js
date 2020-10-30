import RangeComponent from './Range'
import RangeGroupComponent from './RangeGroup'

export default Vue => {
    Vue.component(RangeComponent.name, RangeComponent)
    Vue.component(RangeGroupComponent.name, RangeGroupComponent)
}