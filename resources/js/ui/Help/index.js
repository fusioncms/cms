import HelpComponent from './Help'
import HelpDangerComponent from './HelpDanger'
import HelpSuccessComponent from './HelpSuccess'

export default Vue => {
    Vue.component(HelpComponent.name, HelpComponent)
    Vue.component(HelpDangerComponent.name, HelpDangerComponent)
    Vue.component(HelpSuccessComponent.name, HelpSuccessComponent)
}