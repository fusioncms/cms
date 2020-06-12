function bind(el, binding, vnode) {
    el.addEventListener('click', (e) => {
        vnode.context.$bus.$emit('toast', { level: (binding.arg || 'default'), message: binding.value })
    })
}

const directive = {
    bind
}

export default (typeof window !== 'undefined' ? directive : {})