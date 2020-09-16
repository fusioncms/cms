import DateComponent from './Date'
import TimeComponent from './Time'
import DateTimeComponent from './DateTime'

export default Vue => {
    Vue.component(DateComponent.name, DateComponent)
    Vue.component(DateTimeComponent.name, DateTimeComponent)
    Vue.component(TimeComponent.name, TimeComponent)
}