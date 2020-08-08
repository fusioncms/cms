import AdminLayout from './Admin'
import BlankLayout from './Blank'
import DefaultLayout from './Default'
import ErrorLayout from './Error'

export default Vue => {
    Vue.component(AdminLayout.name, AdminLayout)
    Vue.component(BlankLayout.name, BlankLayout)
    Vue.component(DefaultLayout.name, DefaultLayout)
    Vue.component(ErrorLayout.name, ErrorLayout)
}