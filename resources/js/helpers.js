import Vue from 'vue'

window.bus = function() {
    return Vue.prototype.$bus
}

window.toast = function (message, level) {
    bus().$emit('toast', {
        message,
        level
    })
}