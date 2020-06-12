import router from './router'
import store from './store'
import Vue from 'vue'
import VueMq from 'vue-mq'
import VueHead from 'vue-head'

import * as Directives from './directives'
import * as Plugins from './plugins'

import forms from './mixins/forms'
import setting from './mixins/setting'

export default class Fusion {
  constructor (config) {
    this.config = config
    this.router = router
    this.store = store
    this.vue = null

    Vue.use(require('vue-moment'))
    Vue.use(VueHead)
    Vue.use(VueMq, {
      breakpoints: {
        sm: 767,
        md: 991,
        lg: 1199,
        xl: 1599,
        xxl: Infinity
      }
    })

    Vue.mixin(forms)
    Vue.mixin(setting)

    Object.values(Directives).forEach((Directive) => {
      Vue.use(Directive)
    })

    Object.values(Plugins).forEach((Plugin) => {
      Vue.use(Plugin)
    })

    this.bootingCallbacks = []
    this.bootedCallbacks = []
  }

  booting (callback) {
    this.bootingCallbacks.push(callback)
  }

  boot () {
    this.bootingCallbacks.forEach((callback) => {
      callback(this.router, this.store)
    })

    this.vue = new Vue({
      el: '#gravity',

      router: this.router,

      store: this.store
    })

    this.bootedCallbacks.forEach((callback) => {
      callback(this.vue)
    })
  }

  booted (callback) {
    this.bootedCallbacks.push(callback)
  }
}
