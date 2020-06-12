import * as RenderlessComponents from '../ui/renderless'
import * as Components from '../ui/components'

Object.values(RenderlessComponents).forEach((RenderlessComponent) => {
    Vue.use(RenderlessComponent)
})

Object.values(Components).forEach((Component) => {
    Vue.use(Component)
})