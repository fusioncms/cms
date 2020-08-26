<template>
    <li class="treeview__item">
        <div class="treeview__node" :class="{ 'treeview__node--folder': isFolder, 'treeview__node--selected': selected }">
            <a class="treeview__toggle" href="#" @click.prevent="toggle" v-if="isFolder">
                <span class="treeview__icon" v-if="open">
                    - <span class="sr-only">Close</span>
                </span>

                <span class="treeview__icon" v-else>
                    + <span class="sr-only">Open</span>
                </span>
            </a>

            <a class="treeview__link" href="#" @click.prevent="onClick(node)">
                <slot name="prepend" :node="node" :open="open"></slot>

                <span class="treeview__label">
                    <slot name="label" :node="node" :open="open">
                        {{ node.name }}
                    </slot>
                </span>

                <slot name="append" :node="node" :open="open"></slot>
            </a>
        </div>
        <p-treeview :items="node.children" :value="value" :key="index" v-if="isFolder"></p-treeview>
    </li>
</template>

<script>
    export default {
        name: 'p-treeview-node',

        props: {
            node: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
            },

            onClick: {
                required: true,
                type: Function
            },
        },

        data() {
            return {
                open: false,
            }
        },

        computed: {
            isFolder() {
                return this.node.children && this.node.children.length
            },

            selected() {
                return this.value === this.node
            }
        },

        methods: {
            toggle() {
                if (this.isFolder) {
                    this.open = ! this.open
                }
            },

            onClick(node) {
                this.$emit('click', node)
                this.computedValue = node
            }
        },
    }
</script>
