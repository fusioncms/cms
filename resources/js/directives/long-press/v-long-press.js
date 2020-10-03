function bind(el, binding, vnode) {
    if (typeof binding.value !== 'function') {
        const componentName = vnode.context.name

        let warning = `[long-press:] provided expression '${binding.expression}' must be a function.`

        if (componentName) {
            warning += `Found in component '${componentName}'`
        }

        console.warn(warning)
    }

    let pressTimer = null

    let start = (e) => {
        if (e.type === 'click' && e.button !== 0) {
            return
        }

        if (pressTimer === null) {
            pressTimer = setInterval(() => {
                handler();
            }, 125)
        }
    }

    let cancel = (e) => {
        if (pressTimer !== null) {
            clearInterval(pressTimer)
            pressTimer = null
        }
    }

    const handler = (e) => {
        binding.value(e)
    }

    el.addEventListener('mousedown', start)
    el.addEventListener('touchstart', start)
    el.addEventListener('click', cancel)
    el.addEventListener('mouseout', cancel)
    el.addEventListener('touchend', cancel)
    el.addEventListener('touchcancel', cancel)
}

const directive = {
    bind
}

export default (typeof window !== 'undefined' ? directive : {})