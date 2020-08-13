<template>
    <div class="tabs">
        <ul class="tab__list"
            @dragover.prevent
            @dragenter.prevent>

            <li v-for="(tab, index) in tabs"
                :key="tab.name"
                class="tab w-1/4"
                :class="{
                    'tab--active': tab.isActive,
                    'bg-primary-100': tab.isDropzone
                }"
                draggable
                @dragstart="onDragStart(index)"
                @dragend="onDragEnd(index)"
                @dragenter="onDragEnter(index)"
                @dragleave="onDragLeave(index)"
                @drop="onDrop(index)">

                <a
                    class="tab__link cursor-pointer flex justify-between items-center"
                    :class="{ 'no-pointer-events': tab.isDropzone }"
                    @mousedown="select(tab.hash)"
                    @focus="select(tab.hash)">

                    <span>
                        {{ tab.name }}
                        <span class="text-gray-600 text-xs">
                            {{ tab.subtitle }}
                        </span>
                    </span>

                    <span
                        v-if="tab.remove && tab.isActive"
                        @click.prevent="tab.remove(index)"
                        class="flex items-center justify-center w-6 h-6 rounded"
                        :class="{ 'hover:bg-gray-200 hover:text-gray-600': ! tab.isDropzone }">
                        
                        <fa-icon icon="times" class="fa-xs"></fa-icon>
                    </span>
                </a>
            </li>

             <li v-if="add" class="tab">
                <a class="tab__link cursor-pointer" @click.prevent="add()">
                    <fa-icon icon="plus" class="fa-fw text-xs text-gray-800"></fa-icon>
                </a>
            </li>
        </ul>

        <div class="tab__panel">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-tabs',

        data() {
            return {
                tabs: [],
                dragIndex: false
            }
        },

        props: {
            replace: {
                type: Boolean,
                default: false
            },

            add: {
                type: Function,
                default: false
            }
        },

        computed: {
            tab() {
                return this.tabs.find((tab) => tab.isActive)
            },

            dragTab() {
                return this.tabs.find((tab) => tab.isDragging)
            }
        },

        watch: {
            tabs(value) {
                if (! this.tab && value.length > 0) {
                    if (this.$route.hash)
                        this.select(this.$route.hash)
                    else
                        this.select(value[0].hash)
                }
            }
        },

        methods: {
            findBy(path, value) {
                return this.tabs.find((tab) =>
                    _.get(tab, path) && _.get(tab, path) == value)
            },

            select(hash) {
                const tab = this.findBy('hash', hash) || false

                this.reset()

                tab.activate()

                if (this.replace)
                    this.$router
                        .replace({ hash: tab.hash })
                        .catch(err => {})
            },

            reset() {
                this.tabs.forEach(tab => tab.reset())
            },

            onDragStart(index) {
                this.dragIndex = index
                this.tabs[index].isDragging = true
            },

            onDragEnd(index) {
                this.dragIndex = false
                this.tabs[index].isDragging = false
            },

            onDragEnter(index) {
                this.tabs[index].isDropzone =
                    ! this.tabs[index].isDragging
            },

            onDragLeave(index) {
                this.tabs[index].isDropzone = false
            },

            onDrop(index) {
                if (this.dragTab != this.tabs[index]) {
                    this.tabs.splice(index, 0,
                        this.tabs.splice(this.dragIndex, 1)[0])

                    this.reset()
                    this.tabs[index].activate()
                }
            }
        },

        created() {
            this.tabs = this.$children
        }
    }
</script>

<style>
    .no-pointer-events * {
        pointer-events: none;
    }
</style>
