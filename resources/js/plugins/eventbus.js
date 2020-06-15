let EventBusPlugin = {}

EventBusPlugin.install = function(Vue) {
    let EventBus = new Vue

    Object.defineProperty(Vue.prototype, '$bus', {
        get() {
            return EventBus
        },
    })
}

export default EventBusPlugin