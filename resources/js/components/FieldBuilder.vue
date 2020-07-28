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
                                <p-dropdown-link @click.prevent="setEditing(index)">Edit</p-dropdown-link>
                                <p-dropdown-link v-if="sections.length > 1" @click.prevent="setMoving(index)">Move to...</p-dropdown-link>
                                <p-dropdown-divider></p-dropdown-divider>
                                <p-dropdown-link @click.prevent="remove(index)"><span class="text-danger-500">Delete</span></p-dropdown-link>
                            </p-actions>
                        </div>
                    </p-sortable-item>
                </div>
            </p-sortable-list>
        </div>

        <div class="row">
            <div class="col w-full">
                <a class="button" href="#" @click.prevent="openModal('add')">Add Field</a>
            </div>
        </div>

        <portal to="modals">
            <p-modal name="add-field" title="Add Field" v-model="opened.add" extra-large>
                <div class="row -mb-6">
                    <div class="col w-1/2 lg:w-1/6" v-for="fieldtype in fieldtypes" :key="'add-' + fieldtype.handle">
                        <p-button class="w-full items-center justify-start" @click.prevent="add(fieldtype)">
                            <fa-icon :icon="fieldtype.icon" class="icon"></fa-icon> {{ fieldtype.name }}
                        </p-button>
                    </div>
                </div>

                <template slot="footer">
                    <p-button @click.prevent="closeModal('add')">Close</p-button>
                </template>
            </p-modal>

            <p-modal name="move-field" title="Move Field" v-model="opened.move">
                <p-select name="move_to" v-model="section" placeholder="Please select a section..." :options="sectionOptions"></p-select>

                <template slot="footer">
                    <p-button class="button--primary" @click.prevent="move">Move</p-button>
                    <p-button class="button--secondary mr-2" @click.prevent="resetMove">Cancel</p-button>
                </template>
            </p-modal>

            <field-editor
                ref="editField"
                v-model="field"
                @save="save"
                @cancel="cancel">
            </field-editor>
        </portal>
    </div>
</template>

<script>
    export default {
        name: 'field-builder',

        data() {
            return {
                fieldtypes: {},
                editing: false,
                moving: false,
                section: false,
                opened: {
                    add: false,
                    move: false,
                },
            }
        },

        props: {
            value: {
                type: Array,
                required: true
            },
            id: {
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
                    return this.value || []
                },

                set(value) {
                    this.$emit('input', value)
                }
            },

            field: {
                get() {
                    return _.find(this.fields, (field) => field.handle == this.editing) || {}
                },

                set(value) {
                    this.editing = value.handle || false
                }
            },

            sectionOptions() {
                let vm = this

                let sections = _.map(this.sections, function(section) {
                    return {
                        label: section.name,
                        value: section.handle
                    }
                })

                return _.reject(sections, function(section) {
                    return section.value == vm.id
                })
            },

            total() {
                return this.fields.length
            },

            nextId() {
                return this.total + 1
            }
        },

        watch: {
            editing(value) {
                this.$refs.editField.modalOpen = _.isString(value)
            },

            moving(value) {
                if (_.isString(value)) {
                    this.openModal('move')
                } else {
                    this.closeModal('move')
                }
            }
        },

        methods: {
            add(type, field = {}, external = false) {
                this.closeModal('add')

                this.push(type, field)

                if (! external) {
                    let editing = _.last(this.fields)

                    this.editing         = editing.handle
                    editing['prototype'] = true
                }
            },

            push(type, field) {
                this.fields.push({
                    type:     type,
                    name:     field.name || 'Field ' + this.nextId,
                    handle:   field.handle || 'field_' + this.nextId,
                    help:     field.help || '',
                    settings: field.settings ? _.cloneDeep(field.settings, true) : _.cloneDeep(type.settings, true),
                    order:    this.total,
                })
            },

            move() {
                let field = _.find(this.fields, (f) => f.handle == this.moving) || {}
                let index = _.findIndex(this.fields, (f) => f.handle == this.moving)

                delete field.id

                this.$bus.$emit('move-field-' + this.section, field)
                this.remove(index)

                this.resetMove()
            },

            resetMove() {
                this.moving = false
                this.section = false
            },

            remove(index) {
                this.fields.splice(index, 1)
            },

            setEditing(index) {
                let field = this.fields[index]

                this.editing = field.handle
            },

            setMoving(index) {
                let field = this.fields[index]

                this.moving = field.handle
            },

            save(handle, value) {
                let index = _.findIndex(this.fields, (field) => field.handle == handle)

                delete value['prototype']

                this.fields.splice(index, 1, value)
                this.field = {}
            },

            cancel(handle) {
                if (this.field.prototype) {
                    this.remove(
                        _.findIndex(this.fields, (field) => field.handle == handle)
                    )
                }

                this.field = {}
            },

            openModal(modal) {
                this.opened[modal] = true
            },

            closeModal(modal) {
                this.opened[modal] = false
            },
        },

        mounted() {
            axios.all([
                axios.get('/api/fieldtypes'),
            ]).then(axios.spread((fieldtypes) => {
                this.fieldtypes = fieldtypes.data.data
            }))
        },

        created() {
            bus().$on('add-field-' + this.id, (adding) => {
                let index = _.findIndex(this.fields, (field) => field.handle == adding.handle)

                if (index == -1) {
                    this.add(adding.fieldtype, adding, true)
                }
            })

            bus().$on('move-field-' + this.id, (moving) => {
                let index = _.findIndex(this.fields, (field) => field.handle == moving.handle)

                if (index == -1) {
                    moving.order = this.total
                    this.fields.push(moving)
                }
            })

            bus().$on('remove-field-' + this.id, (handle) => {
                let index = _.findIndex(this.fields, (field) => field.handle == handle)

                if (index > -1) {
                    this.remove(index)
                }
            })
        },

        beforeDestroy() {
            bus().$off('add-field-' + this.id)
            bus().$off('remove-field-' + this.id)
        }
    }
</script>