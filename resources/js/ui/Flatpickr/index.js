import FlatpickrComponent from './Flatpickr'
import FlatpickrGroupComponent from './FlatpickrGroup'

export default Vue => {
    Vue.component(FlatpickrComponent.name, FlatpickrComponent)
    Vue.component(FlatpickrGroupComponent.name, FlatpickrGroupComponent)
}