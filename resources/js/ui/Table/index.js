import TableComponent from './Table'
import TableActionsComponent from './TableActions'

export default Vue => {
    Vue.component(TableComponent.name, TableComponent)
    Vue.component(TableActionsComponent.name, TableActionsComponent)
}