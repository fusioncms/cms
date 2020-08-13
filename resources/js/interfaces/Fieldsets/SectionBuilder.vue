<template>
    <p-tabs
        :add="add"
        @move="move">

        <p-tab
            v-for="(section, index) in sections"
            :key="index"
            :name="section.name"
            :subtitle="`${section.placement}, ${ fieldCount(section.fields.length)}`"
            :remove="sections.length > 1 ? remove : null">

            <section-editor
                :section="section"
                :fieldtypes="fieldtypes"
                :sections="sections">
            </section-editor>
        </p-tab>
    </p-tabs>
</template>

<script>
    export default {
        name: 'section-builder',

        data() {
            return {
                fieldtypes: {},
            }
        },

        props: {
            value: {
                type: Array,
                default: () => []
            }
        },

        computed: {
            sections() {
                return this.value
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
            add(name = 'Section') {
                name = this.uniqName(name)

                this.sections.push({
                    name: name,
                    handle: _.snakeCase(name),
                    description: '',
                    placement: 'body',
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
            },
        },

        mounted() {
            if (this.value.length == 0)
                this.add('General')

            axios.get('/api/fieldtypes').then((response) => {
                this.fieldtypes = response.data.data
            })
        }
    }
</script>