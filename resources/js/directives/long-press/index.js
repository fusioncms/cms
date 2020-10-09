import directive from './v-long-press'

const Plugin = {
    install(Vue) {
        Vue.directive('long-press', directive)
    },
    directive,
}

export default Plugin