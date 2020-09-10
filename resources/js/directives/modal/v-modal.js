function bind(el, binding, vnode) {
    el.addEventListener('click', (e) => {
        vnode.context.$bus.$emit('toggle-modal-' + binding.arg, {
            value: binding.value,
            element: e.target
        })
    })
}

function unbind(el, binding, vnode) {
    el.removeEventListener('click', (e) => {
        vnode.context.$bus.$emit('toggle-modal-' + binding.arg, {
            value: binding.value,
            element: e.target
        })
    })
}

const directive = {
    bind, unbind
}

export default (typeof window !== 'undefined' ? directive : {})