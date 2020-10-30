<template>
    <ui-field-group
        :name="field.handle"
        :fieldId="`${field.handle}-field`"
        :label="field.name"
        :help="field.help"
        :has-error="hasError"
        :error-message="errorMessage">

        <div class="table-wrapper" v-if="model">
            <table :id="`${field.handle}-table`" class="table table-auto" aria-live="polite">
                <thead>
                    <tr>
                        <th class="w-8"></th>
                        <th v-for="c in numCols" :key="`head-${c}`">
                            <span class="buttons__group">
                                <ui-button icon size="small" @click="addCol(c-1)">
                                    <fa-icon icon="plus" class="icon"></fa-icon>
                                    <span class="sr-only">Add column</span>
                                </ui-button>
                                <ui-button icon size="small" :disabled="c == 1" @click="removeCol(c-1)">
                                    <fa-icon icon="times" class="icon"></fa-icon>
                                    <span class="sr-only">Remove column</span>
                                </ui-button>
                            </span>
                        </th>
                        <th class="w-32"></th>
                    </tr>
                </thead>

                <ui-sortable-list v-model="model.rows" :class="`${field.handle}-sortable-list`">
                    <tbody>
                        <ui-sortable-item v-for="(row, rIdx) in model.rows" :key="row._id">
                            <tr>
                                <td>
                                    <ui-sortable-handle class="cursor-move inline-block">
                                        <fa-icon icon="grip-vertical" class="handle fa-fw text-gray-400"></fa-icon>
                                        <span class="sr-only">Move row</span>
                                    </ui-sortable-handle>
                                </td>

                                <td v-for="(col, cIdx) in row.cols" :key="`${col._id}-${cIdx}`">
                                    <ui-input :name="`cell-${col._id}`" v-model="col.value"></ui-input>
                                </td>

                                <td>
                                    <div class="buttons__group">
                                        <ui-button size="small" icon @click="addRow(rIdx)">
                                            <fa-icon icon="plus" class="icon"></fa-icon>
                                            <span class="sr-only">Add row</span>
                                        </ui-button>

                                        <ui-button size="small" icon :disabled="rIdx == 0" @click="removeRow(rIdx)">
                                            <fa-icon icon="times" class="icon"></fa-icon>
                                            <span class="sr-only">Remove row</span>
                                        </ui-button>
                                    </div>
                                </td>
                            </tr>
                        </ui-sortable-item>
                    </tbody>
                </ui-sortable-list>
            </table>
        </div>
    </ui-field-group>
</template>

<script>
    import uniqid from 'uniqid'
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'table-fieldtype',

        mixins: [FieldMixin],

        data() {
            return {
                initRows: this.field.settings.initRows || 1,
                initCols: this.field.settings.initCols || 2,
            }
        },

        computed: {
            model: {
                get() {
                    let model = this.value || []

                    return model.length == 0 ? this.newTable() : model
                },

                set(value) {
                    this.$emit('input', value)
                }
            },

            numRows() {
                return this.model.rows.length
            },

            numCols() {
                return _.defaultTo(this.getRow(0).cols, []).length
            },
        },

        watch: {
            model: {
                deep: true,
                handler(value) {
                    this.$emit('input', value)
                }
            }
        },

        methods: {
            newTable() {
                this.model = {
                    rows: new Array(this.initRows)
                        .fill({})
                        .map(row => this.newRow(this.initCols))
                }
            },

            addRow(index) {
                this.model.rows.splice((index || 0) + 1, 0, this.newRow())
            },

            removeRow(index) {
                this.model.rows.splice(index || this.numRows, 1)
            },

            newRow(cols) {
                return {
                    _id: uniqid(),
                    cols: new Array(cols || this.numCols).fill({}).map(col => this.newCell()) }
            },

            getRow(index) {
                return this.model.rows[index] || []
            },

            addCol(index) {
                this.model.rows.forEach(row =>
                    row.cols.splice((index || 0) + 1, 0, this.newCell()))
            },

            removeCol(index) {
                this.model.rows.forEach(row =>
                    row.cols.splice(index || this.numCols, 1))
            },

            newCell(value) {
                return { _id: uniqid(), value }
            }
        }
    }
</script>
