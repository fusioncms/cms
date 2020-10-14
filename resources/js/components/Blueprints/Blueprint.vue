<template>
    <div class="blueprint">
        <div class="row">
            <div class="col w-full md:w-1/2 lg:w-full xl:w-2/3">
                <h5>Body</h5>
                <blueprint-area :sections="body" :remove="remove" :add="add" :move="move" area="body"></blueprint-area>
            </div>

            <div class="col w-full md:w-1/2 lg:w-full xl:w-1/3">
                <h5>Sidebar</h5>
                <blueprint-area :sections="sidebar" :remove="remove" :add="add" :move="move" area="sidebar"></blueprint-area>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'

    export default {
        name: 'blueprint',

        props: {
            value: {
                type: Array,
                default: () => []
            }
        },

        computed: {
            sections() {
                return this.value
            },

            body() {
                let sections = _.groupBy(this.value, 'placement')
                let body = sections.body

                return body
            },

            sidebar() {
                let sections = _.groupBy(this.value, 'placement')
                let sidebar = sections.sidebar

                return sidebar
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
            add(area, name = 'Section', prototype = true) {
                name = this.uniqName(name)

                this.sections.push({
                    name: name,
                    handle: _.snakeCase(name),
                    description: '',
                    placement: area,
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