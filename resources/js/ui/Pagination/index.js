import PaginationComponent from './Pagination'
import PaginationStatusComponent from './PaginationStatus'
import PaginationSelectComponent from './PaginationSelect'

export default Vue => {
    Vue.component(PaginationComponent.name, PaginationComponent)
    Vue.component(PaginationStatusComponent.name, PaginationStatusComponent)
    Vue.component(PaginationSelectComponent.name, PaginationSelectComponent)
}