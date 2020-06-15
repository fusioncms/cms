function bind(el, binding, vnode) {
    el.addEventListener('click', (e) => {
        vnode.context.$bus.$emit('toggle-modal-' + binding.arg, binding.value)
    })
}

const directive = {
    bind
}

export default (typeof window !== 'undefined' ? directive : {})