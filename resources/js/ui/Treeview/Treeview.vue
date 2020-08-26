<template>
    <ul class="treeview" :class="{'treeview--nested' : nested }" :role="nested ? 'group' : 'tree'">
        <li v-for="(node, index) in nodes" :key="index" class="treeview__item" :role="isFolder(node) ? 'treeitem' : 'none'" :aria-expanded="isOpen(node) ? 'true' : 'false'">
            <div class="treeview__node" :class="{ 'treeview__node--file': !isFolder(node) }">
                <button class="treeview__toggle" @click.prevent="toggle(node)" v-if="isFolder(node)">
                    <span v-if="isOpen(node)">
                        - <span class="sr-only">Close {{ node.name }}</span>
                    </span>

                    <span v-else>
                        + <span class="sr-only">Open {{ node.name }}</span>
                    </span>
                </button>

                <a class="treeview__link" :class="{ 'selected' : value == node }" href="#" @click.prevent="onClick(node)">
                    <slot name="prepend" :node="node" :open="isOpen(node)"></slot>

                    <span v-if="showIcons" class="treeview__icon">
                        <template v-if="value === node">
                            <fa-icon icon="check" class="fa-fw"></fa-icon>
                        </template>

                        <template v-else>
                            <fa-icon icon="folder" class="fa-fw" v-if="!node.file && !isOpen(node)"></fa-icon>
                            <fa-icon icon="folder-open" class="fa-fw" v-else-if="!node.file && isOpen(node)"></fa-icon>
                            <fa-icon icon="file-alt" class="fa-fw" v-else></fa-icon>
                        </template>
                    </span>

                    <span class="treeview__label">
                        <slot name="label" :node="node" :open="isOpen(node)">{{ node.name }}</slot>
                    </span>

                    <slot name="append" :node="node" :open="isOpen(node)"></slot>
                </a>
            </div>

            <p-treeview v-show="isOpen(node)" :key="index" :nodes="node.children" :depth="depth + 1" v-model="computedValue" v-if="isFolder(node)" :nested="true">
                <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope"><slot :name="slot" v-bind="scope"/></template>
            </p-treeview>
        </li>
    </ul>
</template>

<script>
    import TreeviewNode from './TreeviewNode'
    import _ from 'lodash'

    export default {
        name: 'p-treeview',

        data() {
            return {
                model: this.value,
            }
        },

        props: {
            nodes: {
                type: Array,
                required: true,
            },
            value: {
                type: Object,
                required: false
            },
            depth: {
                type: Number,
                default: 0
            },
            showIcons: {
                type: Boolean,
                default: true
            },
            nested: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                open: [],
                selected: null
            }
        },

        computed: {
            computedValue: {
                get() {
                    return this.value
                },

                set(value) {
                    this.model = value
                    this.$emit('input', value)
                }
            }
        },

        watch: {
            value(value) {
                this.model = value
            }
        },

        methods: {
            toggle(node) {
                this.open = _.xor(this.open, [node.id])
            },

            isFolder(node) {
                return node.children && node.children.length
            },

            onClick(node) {
                // this.$emit('click', node)
                this.computedValue = node
            },

            isOpen(node) {
                return this.open.includes(node.id)
            }
        }
    }
</script>
