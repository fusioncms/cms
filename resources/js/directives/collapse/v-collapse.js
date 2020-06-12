function bind(el, binding, vnode) {
    el.addEventListener('click', (e) => {
        vnode.context.$bus.$emit('toggle-collapse-' + binding.arg)
    })
}

const directive = {
    bind
}

export default (typeof window !== 'undefined' ? directive : {})