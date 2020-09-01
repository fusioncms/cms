<template>
    <div>
        <div class="row">
            <div class="col mb-6 w-full">
                <h3>Fields</h3>
                <p v-if="fields.length == 0">Add a field to get started.</p>
            </div>
        </div>

        <div class="row" v-if="fields.length > 0">
            <ui-sortable-list v-model="fields" class="sortable-list">
                <div class="col mb-6 w-full">
                    <ui-sortable-item v-for="(field, index) in fields" :key="field.handle" class="mb-3 w-full">
                        <div class="section__field">
                            <div>
                                <ui-sortable-handle class="cursor-move inline-block">
                                    <fa-icon icon="grip-vertical" class="handle fa-fw text-gray-400 mr-3"></fa-icon>
                                </ui-sortable-handle>

                                <fa-icon :icon="['fas', field.type.icon]" class="fa-fw mr-3"></fa-icon>
                                <span class="mr-6 font-bold">{{ field.name }}</span>
                                <span class="mr-6 font-mono text-xs">{{ field.handle }}</span>
                                <span class="font-mono text-xs uppercase">{{ field.type.name }}</span>
                            </div>

                            <ui-table-actions :id="field.handle + '_actions'">
                                <ui-dropdown-link @click.prevent="set('edit', index)">Edit</ui-dropdown-link>
                                <ui-dropdown-link v-if="sections.length > 1" @click.prevent="set('move', index)">Move to...</ui-dropdown-link>
                                <ui-dropdown-divider></ui-dropdown-divider>
                                <ui-dropdown-link @click.prevent="remove(index)">Delete</ui-dropdown-link>
                            </ui-table-actions>
                        </div>
                    </ui-sortable-item>
                </div>
            </ui-sortable-list>
        </div>

        <div class="row">
            <div class="col w-full">
                <a class="button" href="#" @click.prevent="field.add = true">Add Field</a>
            </div>
        </div>

        <portal to="modals">
            <ui-modal name="add-field" title="Add Field" v-model="field.add" extra-large>
                <fieldtype-picker @click="add"></fieldtype-picker>

                <template slot="footer">
                    <ui-button @click.prevent="field.add = false">Close</ui-button>
                </template>
            </ui-modal>

            <ui-modal name="move-field" title="Move Field" v-model="!! field.move">
                <ui-select name="move_to" v-model="section" placeholder="Please select a section..." :options="sectionOptions"></ui-select>

                <template slot="footer">
                    <ui-button class="button--primary" @click.prevent="move">Move</ui-button>
                    <ui-button class="button--secondary mr-2" @click.prevent="field.move = false">Cancel</ui-button>
                </template>
            </ui-modal>

            <field-editor
                v-model="field.edit"
                @save="save"
                @close="close">
            </field-editor>
        </portal>
    </div>
</template>

<script>
    export default {
        name: 'field-builder',

        data() {
            return {
                section: false,
                field: {                
                    edit: false,
                    add: false,
                    move: false
                }
            }
        },

        props: {
            value: {
                type: Array,
                required: false,
                default: () => []
            },

            sectionHandle: {
                type: String,
                required: true
            },

            sections: {
                type: Array,
                required: false,
            }
        },

        computed: {
            fields: {
                get() {
                    return this.value
                },

                set(value) {
                    this.$emit('input', value)
                }
            },

            sectionOptions() {
                let options = _.map(this.sections, (section) => {
                    return {
                        label: section.name,
                        value: section.handle
                    }
                })

                return _.reject(options, (option) => this.sectionHandle == option.handle)
            }
        },

        methods: {
            add(type, data = {}, prototype = true) {
                let name   = data.name || this.uniqName(data.name || type.name)
                let field  = {
                    type,
                    name,
                    handle:     data.handle || _.snakeCase(name),
                    help:       data.help || '',
                    settings:   data.settings ? _.cloneDeep(data.settings, true) : _.cloneDeep(type.settings, true),
                    validation: data.validation || '',
                    prototype:  prototype
                }
                
                if (prototype) {
                    this.field.add  = false
                    this.field.edit = field
                }

                this.fields.push(field)
            },

            remove(index) {
                this.fields.splice(index, 1)
            },

            set(action, index) {
                this.field[action] = this.fields[index]
            },

            move() {
                if (this.section && this.section != this.sectionHandle) {
                    bus().$emit(`add-field-${this.section}`, this.field.move)
                    bus().$emit(`remove-field-${this.sectionHandle}`,
                        'handle', this.field.move.handle)

                    this.section    = false
                    this.field.move = false
                }
            },

            save(handle, field) {
                delete field.prototype
                
                this.fields.splice(this.findBy('handle', handle), 1, field)
                this.field.edit = false
            },

            close() {
                if (this.field.edit.prototype) {
                    this.remove(this.findBy('handle', this.field.edit.handle))
                }

                this.field.edit = false
            },

            findBy(path, value) {
                return _.findIndex(this.fields, (field) =>
                    _.get(field, path) && _.get(field, path) == value)
            },

            uniqName(original, name, count = 0) {
                name = original + (count ? ` ${count}` : '')

                if (this.findBy('name', name) != -1) {
                    return this.uniqName(original, name, ++count)
                }

                return name
            },
        },

        created() {
            bus().$on(`add-field-${this.sectionHandle}`, (field) => {
                if (this.findBy('handle', field.handle) == -1) {
                    this.add(field.type, field, false)
                }
            })

            bus().$on(`remove-field-${this.sectionHandle}`, (path, value) => {
                let index = this.findBy(path, value)

                if (index != -1) {
                    this.remove(index)
                }
            })
        },

        beforeDestroy() {
            bus().$off(`add-field-${this.sectionHandle}`)
            bus().$off(`remove-field-${this.sectionHandle}`)
        }
    }
</script>
