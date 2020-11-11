<template>
    <ui-field-group
        :name="field.handle"
        :fieldId="`${field.handle}-field`"
        :label="field.name"
        :help="field.help"
        :hasError="hasError(field.handle)"
        :errorMessage="errorMessage(field.handle)">

        <table class="table" v-if="model && model.length > 0">
            <ui-sortable-list v-model="model" :class="`${field.handle}-sortable-list`">
                <tbody>
                    <ui-sortable-item v-for="item in model" :key="item._id">
                        <tr>
                            <td class="w-8">
                                <ui-sortable-handle class="cursor-move inline-block">
                                    <fa-icon icon="grip-vertical" class="handle fa-fw text-gray-400 mr-3"></fa-icon>
                                </ui-sortable-handle>
                            </td>
                            <td>
                                <ui-input-group name="key" v-model="item.key"></ui-input-group>
                            </td>
                            <td>
                                <ui-input-group name="value" v-model="item.value"></ui-input-group>
                            </td>
                            <td class="w-16">
                                <ui-button icon @click.prevent="remove(item._id)">
                                    <fa-icon icon="times"></fa-icon>
                                    <span class="sr-only">Destroy</span>
                                </ui-button>
                            </td>
                        </tr>
                    </ui-sortable-item>
                </tbody>
            </ui-sortable-list>
        </table>

        <div v-else class="help">Your list is empty.</div>

        <table class="table mt-3">
            <tbody>
                <tr>
                    <td class="w-8"></td>
                    <td>
                        <ui-input-group
                            name="key"
                            placeholder="New key"
                            @keyup.native.enter="add"
                            v-model="newKey">
                        </ui-input-group>
                    </td>
                    <td>
                        <ui-input-group
                            name="value"
                            placeholder="New value"
                            @keyup.native.enter="add"
                            v-model="newValue">
                        </ui-input-group>
                    </td>
                    <td class="w-16">
                        <ui-button icon @click.prevent="add">
                            <fa-icon icon="plus"></fa-icon>
                            <span class="sr-only">Add</span>
                        </ui-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </ui-field-group>
</template>

<script>
    import uniqid from 'uniqid'
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'dictionary-fieldtype',

        mixins: [FieldMixin],

        data() {
            return {
                newKey: '',
                newValue: ''
            }
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
            new(key, value) {
                return { _id: uniqid(), key, value }
            },

            add() {
                if (this.newKey && this.newValue) {
                    this.model.push(
                        this.new(this.newKey, this.newValue))

                    // reset..
                    this.newKey   = ''
                    this.newValue = ''
                }
            },

            remove(id) {
                this.model = _.filter(this.model, (item) => item._id !== id)
            },
        },

        created() {
            if (_.isEmpty(this.value)) {
                this.model = []
            }
        }
    }
</script>