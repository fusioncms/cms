<template>
    <div class="blueprint-area" @dragover.prevent @dragenter.prevent>
        <div v-for="(section, index) in sections" 
            class="blueprint-area__draggable"
            :key="`${area}-${index}`"
            :draggable="!! move"
            @dragstart="onDragStart(index)"
            @dragend="onDragEnd(index)"
            @dragenter="onDragEnter(index)"
            @dragleave="onDragLeave(index)"
            @drop="onDrop(index)">

            <blueprint-section
                :key="`${area}-${index}-section`"
                :id="`${area}-${index}-section`"
                :parent-index="index"
                :section="section"
                :subtitle="`${section.placement}, ${ fieldCount(section.fields.length)}`"
                :remove="remove">

                <blueprint-editor
                    :section="section"
                    :sections="sections">
                </blueprint-editor>
            </blueprint-section>
        </div>

        <ui-button class="blueprint-area__btn" @click.prevent="add(area)" size="large">Add {{ area }} section <fa-icon icon="plus" class="ml-3"></fa-icon></ui-button>
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
