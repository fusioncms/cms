import ToolbarComponent from './Toolbar'
import ToolbarGroupComponent from './ToolbarGroup'

export default Vue => {
    Vue.component(ToolbarComponent.name, ToolbarComponent)
    Vue.component(ToolbarGroupComponent.name, ToolbarGroupComponent)
}