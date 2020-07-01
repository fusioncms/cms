function bind(el, binding, vnode) {
    el.addEventListener('click', (e) => {
        vnode.context.$bus.$emit('toggle-modal-' + binding.arg, binding.value)
    })
}

function unbind(el, binding, vnode) {
    el.removeEventListener('click', (e) => {
        vnode.context.$bus.$emit('toggle-modal-' + binding.arg, binding.value)
    })
}

const directive = {
    bind, unbind
}

export default (typeof window !== 'undefined' ? directive : {})