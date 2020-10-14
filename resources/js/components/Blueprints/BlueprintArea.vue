<template>
    <div class="blueprint-area" @dragover.prevent @dragenter.prevent>
        <div v-for="(section, index) in sections" class="blueprint-area__draggable" 
            :key="section.name" 
            :draggable="!! move"
            @dragstart="onDragStart(index)"
            @dragend="onDragEnd(index)"
            @dragenter="onDragEnter(index)"
            @dragleave="onDragLeave(index)"
            @drop="onDrop(index)">

            <div :class="{ 'bg-gray-300': section.isDropzone }">
                <blueprint-section
                    :key="area + '-' + index"
                    :name="section.name"
                    :subtitle="`${section.placement}, ${ fieldCount(section.fields.length)}`"
                    :remove="sections.length > 1 ? remove : null">

                    <!-- <blueprint-editor
                        :section="section"
                        :sections="sections">
                    </blueprint-editor> -->
                </blueprint-section>
            </div>
        </div>

        <ui-button class="blueprint-area__btn" @click.prevent="add(area)" size="large">Add Section <fa-icon icon="plus" class="ml-3"></fa-icon></ui-button>
    </div>
</template>

<script>
    export default {
        name: 'blueprint-area',

        data() {
            return {
                dragIndex: false
            }
        },

        props: {
            sections: {
                type: [Object,Array]
            },

            replace: {
                type: Boolean,
                default: false
            },

            area: {
                type: String,
                default: 'body'
            },

            add: {
                type: [Function,Boolean],
                default: false
            },

            move: {
                type: [Function,Boolean],
                default: false
            },
            
            remove: {
                type: [Function,Boolean],
                default: false
            }
        },

        computed: {
            dragSection() {
                return this.sections.find((section) => section.isDragging)
            }
        },

        methods: {
            onDragStart(index) {
                this.dragIndex = index
                this.sections[index].isDragging = true
            },

            onDragEnd(index) {
                this.dragIndex = false
                this.sections[index].isDragging = false
            },

            onDragEnter(index) {
                this.sections[index].isDropzone =
                    ! this.sections[index].isDragging
            },

            onDragLeave(index) {
                this.sections[index].isDropzone = false
            },

            onDrop(index) {
                if (this.move && this.dragIndex != index) {
                    this.move(this.dragIndex, index)
                }
            },

            fieldCount(count) {
                return `${count >= 0 ? count : 1} field`
            }
        }
    }
</script>

<style>
    .no-pointer-events * {
        pointer-events: none;
    }
</style>
