import Vue from 'vue'

import store from '@/store'
import router from '@/router'
import auth from '@/mixins/auth'
import forms from '@/mixins/forms'
import setting from '@/mixins/setting'

import * as Directives from '@/directives'

export default class Fusion {
    constructor (config) {
        this.config = config
        this.router = router
        this.store = store
        this.vue = null

        // Mixins
        Vue.mixin(auth)
        Vue.mixin(forms)
        Vue.mixin(setting)

        // Directives
        Object.values(Directives).forEach((Directive) => {
            Vue.use(Directive)
        })

        // Callbacks
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
