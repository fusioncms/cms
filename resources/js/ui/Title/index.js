import TitleComponent from './Title'
import TitleGroupComponent from './TitleGroup'

export default Vue => {
    Vue.component(TitleComponent.name, TitleComponent)
    Vue.component(TitleGroupComponent.name, TitleGroupComponent)
}