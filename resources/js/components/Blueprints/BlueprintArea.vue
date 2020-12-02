<template>
    <div class="blueprint-area blueprint__col col" @dragover.prevent @dragenter.prevent>
        <h5 v-if="title">{{ title }}</h5>
        <template v-for="(section, index) in sections">
            <div v-if="section.placement === area"
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
                    :remove="remove"
                    :placements="placements">

                    <field-builder
                        v-model="section.fields"
                        :structure="structure"
                        :sections="sections"
                        :handle="section.handle">
                    </field-builder>
                </blueprint-section>
            </div>
        </template>

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
            value: {
                type: Array,
                default: () => []
            },

            title: {
                type: String
            },

            area: {
                type: String,
                default: 'body'
            },

            placements: {
                type: Array
            },

            structure: {
                type: String,
                required: true
            }
        },

        computed: {
            sections() {
                return this.value
            },

            dragSection() {
                return this.sections.find((section) => section.isDragging)
            }
        },

        watch: {
            sections: {
                deep: true,
                handler(value) {
                    this.$emit('input', value)
                }
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

            add(area, name = 'Section', prototype = true) {
                name = this.uniqName(name)

                this.sections.push({
                    name: name,
                    handle: _.snakeCase(name),
                    description: '',
                    placement: this.area ? this.area : 'body',
                    fields: [],
                    prototype: prototype
                })
            },

            uniqName(orig, count = 0) {
                let name  = orig + (count ? ` ${count}` : '')
                let index = _.findIndex(this.sections, (item) => item.name == name)

                if (index != -1) {
                    return this.uniqName(orig, ++count)
                }

                return name
            },

            move(fromIndex, toIndex) {
                this.sections.splice(toIndex, 0,
                    this.sections.splice(fromIndex, 1)[0])
            },

            remove(index) {
                if (this.sections.length > 0)
                    this.sections.splice(index, 1)
            },

            fieldCount(count) {
                return `${count >= 0 ? count : 1} field`
            }
        },

         mounted() {
            if (this.value.length == 0)
                this.add('General')
        }
    }
</script>

<style>
    .no-pointer-events * {
        pointer-events: none;
    }
</style>
