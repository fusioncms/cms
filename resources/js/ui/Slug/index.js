import SlugComponent from './Slug'
import SlugGroupComponent from './SlugGroup'

export default Vue => {
    Vue.component(SlugComponent.name, SlugComponent)
    Vue.component(SlugGroupComponent.name, SlugGroupComponent)
}