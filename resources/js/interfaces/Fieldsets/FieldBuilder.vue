<template>
    <div>
        <ui-field-group
            fieldId="field-builder"
            name="field-builder"
            label="Fields">

            <table class="table" v-if="fields && fields.length > 0">
                <ui-sortable-list v-model="fields" class="sortable-list`">
                    <tbody>
                        <ui-sortable-item v-for="(field, index) in fields" :key="field.handle">
                            <tr>
                                <td class="w-8">
                                    <ui-sortable-handle class="cursor-move inline-block">
                                        <fa-icon icon="grip-vertical" class="handle fa-fw text-gray-400 mr-3"></fa-icon>
                                    </ui-sortable-handle>
                                </td>
                                <td class="w-16">
                                    <fa-icon :icon="['fas', field.type.icon]" class="fa-fw mr-3"></fa-icon>
                                </td>
                                <td>
                                    <strong>{{ field.name }}</strong>
                                </td>
                                <td>
                                    <code>{{ field.handle }}</code>
                                </td>
                                <td>
                                    <span class="font-mono text-xs uppercase">{{ field.type.name }}</span>
                                </td>
                                <td class="w-16">
                                    <ui-table-actions :id="field.handle + '_actions'">
                                        <ui-dropdown-link @click.prevent="set('edit', index)">Edit</ui-dropdown-link>
                                        <ui-dropdown-link v-if="sections.length > 1" @click.prevent="set('move', index)">Move to...</ui-dropdown-link>
                                        <ui-dropdown-divider></ui-dropdown-divider>
                                        <ui-dropdown-link @click.prevent="remove(index)">Delete</ui-dropdown-link>
                                    </ui-table-actions>
                                </td>
                            </tr>
                        </ui-sortable-item>
                    </tbody>
                </ui-sortable-list>
            </table>

            <div v-else class="help">Add a field to get started.</div>
        </ui-field-group>

        <div class="row">
            <div class="col w-full">
                <ui-button href="#" @click.prevent="field.add = true">Add Field</ui-button>
            </div>
        </div>

        <portal to="modals">
            <ui-modal name="add-field" title="Add Field" v-model="field.add" extra-large>
                <fieldtype-picker
                    :structure="structure"
                    @click="add">
                </fieldtype-picker>

                <template slot="footer">
                    <ui-button @click.prevent="field.add = false">Close</ui-button>
                </template>
            </ui-modal>

            <ui-modal name="move-field" title="Move Field" v-model="!! field.move">
                <ui-select-group
                    name="move_to"
                    label="Move to"
                    hide-label
                    v-model="moveTo"
                    placeholder="Please select a location..."
                    :options="moveOptions">
                </ui-select-group>

                <template slot="footer">
                    <ui-button variant="primary" @click.prevent="move">Move</ui-button>
                    <ui-button variant="secondary" class="mr-2" @click.prevent="field.move = false">Cancel</ui-button>
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
                moveTo: false,
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

            handle: {
                type: String,
                required: true
            },

            structure: {
                type: String,
                required: true
            },

            sections: {
                type: Array,
                required: false,
                default: () => []
            }
        },

        computed: {
            fields: {
                get() {
                    return this.value || []
                },

                set(value) {
                    this.$emit('input', value)
                }
            },

            moveOptions() {
                let options = _.map(this.sections, (item) => {
                    return {
                        label: item.name,
                        value: item.handle
                    }
                })

                return _.reject(options, (option) => this.handle == option.handle)
            }
        },

        watch: {
            fields: {
                deep: true,
                handler(value) {
                    this.$emit('input', value)
                }
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
                    validation: data.validation ? _.cloneDeep(data.validation, true) : _.cloneDeep(type.validation, true),
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
                if (this.moveTo && this.moveTo != this.handle) {
                    bus().$emit(`add-field-${this.moveTo}`, this.field.move)
                    bus().$emit(`remove-field-${this.handle}`,
                        'handle', this.field.move.handle)

                    this.moveTo     = false
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
            bus().$on(`add-field-${this.handle}`, (field) => {
                if (this.findBy('handle', field.handle) == -1) {
                    this.add(field.type, field, false)
                }
            })

            bus().$on(`remove-field-${this.handle}`, (path, value) => {
                let index = this.findBy(path, value)

                if (index != -1) {
                    this.remove(index)
                }
            })
        },

        beforeDestroy() {
            bus().$off(`add-field-${this.handle}`)
            bus().$off(`remove-field-${this.handle}`)
        }
    }
</script>
