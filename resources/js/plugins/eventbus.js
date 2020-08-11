import Vue from 'vue'

let EventBus = {}

EventBus.install = function (Vue) {
    let EventBus = new Vue

    Object.defineProperty(Vue.prototype, '$bus', {
        get() {
            return EventBus
        },
    })
}

Vue.use(EventBus)