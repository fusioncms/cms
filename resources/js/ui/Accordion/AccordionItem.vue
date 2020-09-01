<template>
    <div :class="{'border-b border-gray-300': active}">
        <dt>
            <button @click.prevent="toggle" class="simple-button flex justify-between items-center p-3 border-b border-gray-300 text-left w-full text-gray-700 hover:bg-gray-100 leading-none">
                <span>{{ title }}</span>
                <span><fa-icon :icon="['fas', active ? 'caret-up' : 'caret-down']" class="fa-fw"></fa-icon></span>
            </button>
        </dt>

        <transition
            name="accordion-item"
            @enter="startTransition"
            @after-enter="endTransition"
            @before-leave="startTransition"
            @after-leave="endTransition">
            <dd v-if="active">
                <slot></slot>
            </dd>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'ui-accordion-item',

        data() {
            return {
                active: false,
            }
        },

        props: {
            title: {
                type: String,
                required: true,
            },
        },

        methods: {
            toggle() {
                if (this.$parent.multiple) {
                    this.active = !this.active
                }
            },

            startTransition(el) {
                el.style.height = el.scrollHeight + 'px'
            },

            endTransition(el) {
                el.style.height = ''
            },
        },
    }
</script>