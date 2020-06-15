import * as UI from '../ui'

Object.values(UI).forEach((Component) => {
    Vue.use(Component)
})