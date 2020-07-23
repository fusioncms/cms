<template>
    <div>
        <div class="row">
            <div class="col mb-6 w-full">
                <h3>Fields</h3>
                <p v-if="fields.length == 0">Add a field to get started.</p>
            </div>
        </div>

        <div class="row" v-if="fields.length > 0">
            <p-sortable-list v-model="fields" class="sortable-list">
                <div class="col mb-6 w-full">
                    <p-sortable-item v-for="(field, index) in fields" :key="field.handle" class="mb-3 w-full">
                        <div class="section__field">
                            <div>
                                <p-sortable-handle class="cursor-move inline-block">
                                    <fa-icon icon="grip-vertical" class="handle fa-fw text-gray-400 mr-3"></fa-icon>
                                </p-sortable-handle>

                                <fa-icon :icon="['fas', field.type.icon]" class="fa-fw mr-3"></fa-icon>
                                <span class="mr-6 font-bold">{{ field.name }}</span>
                                <span class="mr-6 font-mono text-xs">{{ field.handle }}</span>
                                <span class="font-mono text-xs uppercase">{{ field.type.name }}</span>
                            </div>

                            <p-actions :id="field.handle + '_actions'">
                                <p-dropdown-link @click.prevent="edit(index)">Edit</p-dropdown-link>
                                <p-dropdown-link @click.prevent="remove(index)">Delete</p-dropdown-link>
                            </p-actions>
                        </div>
                    </p-sortable-item>
                </div>
            </p-sortable-list>
        </div>

        <div class="row">
            <div class="col w-full">
                <a class="button" href="#" @click.prevent="open = true">Add Field</a>
            </div>
        </div>

        <portal to="modals">
            <p-modal name="add-field" title="Add Field" v-model="open" extra-large>
                <div class="row -mb-6">
                    <div class="col w-1/2 lg:w-1/6" v-for="fieldtype in fieldtypes" :key="'add-' + fieldtype.handle">
                        <p-button class="w-full items-center justify-start" @click.prevent="add(fieldtype, {}, true)">
                            <fa-icon :icon="fieldtype.icon" class="icon"></fa-icon> {{ fieldtype.name }}
                        </p-button>
                    </div>
                </div>

                <template slot="footer">
                    <p-button @click.prevent="open = false">Close</p-button>
                </template>
            </p-modal>

            <field-editor
                v-model="field"
                @save="save"
                @close="close">
            </field-editor>
        </portal>
    </div>
</template>

<script>
    export default {
        name: 'field-builder',

        components: {
            'field-editor': require('./FieldEditor').default
        },

        data() {
            return {
                fieldtypes: {},
                field: false,
                open: false
            }
        },

        props: {
            value: {
                type: Array,
                required: false,
                default: () => []
            }
        },

        computed: {
            fields: {
                get() {
                    return this.value
                },
                set(value) {
                    console.log('FieldBuilder::fields')
                    this.$emit('input', value)
                }
            },

            options() {
                let options = _.map(this.fieldtypes, (item) => {
                    return { label: item.name, value: item.handle }
                })

                options.unshift({ label: 'Select a fieldtype..', value: '' })

                return options
            }
        },

        methods: {
            add(type, extra = {}, prototype) {
                let name   = this.rename(extra.name || type.name)
                let handle = _.snakeCase(name)
                
                this.open = false
                this.field = {
                    type,
                    name,
                    handle,
                    help:       extra.help || '',
                    settings:   extra.settings ? _.cloneDeep(extra.settings, true) : _.cloneDeep(type.settings, true),
                    order:      this.fields.length,
                    validation: extra.validation || '',
                    proto:      prototype
                }

                this.fields.push(this.field)
            },

            remove(index) {
                this.fields.splice(index, 1)
            },

            edit(index) {
                this.field = this.fields[index]
            },

            save(handle, field) {
                delete field.proto
                
                this.fields.splice(this.findBy('handle', handle), 1, field)
                this.field = false
            },

            close() {
                if (this.field.proto) {
                    this.remove(
                        _.findIndex(this.fields, (field) => field.handle == this.field.handle)
                    )
                }

                this.field = false
            },

            findBy(key, value) {
                return _.findIndex(this.fields, (field) => field[key] == value)
            },

            rename(original, name, count = 0) {
                name = original + (count ? ` ${count}` : '')

                if (this.findBy('name', name) != -1) {
                    return this.rename(original, name, ++count)
                }

                return name
            },
        },

        mounted() {
            axios.get('/api/fieldtypes')
                .then((response) =>
                    this.fieldtypes = response.data.data)
        },

        created() {
            bus().$on('add-field', (field) => {
                if (this.findBy('handle', field.handle) != -1) {
                    this.add(field.fieldtype, field, false)
                }
            })

            bus().$on('remove-field', (handle) => {
                let index = this.findBy('handle', handle)

                if (index > -1) {
                    this.remove(index)
                }
            })
        },

        beforeDestroy() {
            bus().$off('add-field')
            bus().$off('remove-field')
        }
    }
</script>
