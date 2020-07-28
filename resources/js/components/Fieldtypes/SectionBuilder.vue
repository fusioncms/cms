<template>
    <div class="tabs">
        <ul class="tab__list overflow-x-scroll">
            <li v-for="(section, index) in sections" :key="index" class="tab flex-shrink-0 flex-1 border-r border-gray-200" :class="{ 'tab--active': index == active }">
                <a href="#" class="tab__link flex justify-between items-center" @click.prevent="select(index)">
                    <span>
                        {{ section.name }}
                        <span class="text-xs">
                            ({{ section.placement }}, {{ fieldCount(section.fields.length) }})
                        </span>
                    </span>

                    <span @click.prevent="remove(index)" v-if="sections.length > 1" class="flex items-center justify-center w-6 h-6 rounded hover:bg-black hover:text-white">
                        <fa-icon icon="times" class="fa-xs"></fa-icon>
                    </span>
                </a>
            </li>

            <li class="tab">
                <a href="#" class="tab__link" @click.prevent="add()"><fa-icon icon="plus" class="fa-fw text-xs"></fa-icon></a>
            </li>
        </ul>

        <section-editor
            v-for="(section, index) in sections"
            v-show="index == active"
            :key="index"
            :section="section"
            class="tab__panel">
        </section-editor>
    </div>
</template>

<script>
    export default {
        name: 'section-builder',

        data() {
            return {
                fieldtypes: {},
                active: 0
            }
        },

        components: {
            'section-editor': require('./SectionEditor').default
        },

        props: {
            value: {
                type: Array,
                default: () => []
            }
        },

        computed: {
            sections: {
                get() {
                    return this.value
                },

                set(value) {
                    this.$emit('input', value)
                }
            }
        },

        methods: {
            add(newName = 'Section') {
                let name   = this.uniqName(newName)
                let handle = _.snakeCase(name)

                this.sections.push({
                    name: name,
                    handle: handle,
                    description: '',
                    placement: 'body',
                    order: this.sections.length,
                    fields: [],
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

            remove(index) {
                if (this.sections.length > 0) {
                    this.sections.splice(index, 1)
                    this.active = index === 0 ? 1 : 0
                }
            },

            select(index) {
                this.active = this.sections[index] ? index : 0
            },

            fieldCount(count) {
                return `${count >= 0 ? count : 1} field`
            },

            reorder(fields) {
                _.each(fields, (field, order) => field.order = order)
            }
        },

        mounted() {
            if (this.value.length == 0) {
                this.add('General')
            }

            axios.get('/api/fieldtypes')
                .then((response) => {
                    this.fieldtypes = response.data.data
                })
        }
    }
</script>