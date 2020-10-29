<template>
    <ui-field-group
        :name="field.handle"
        :fieldId="`${field.handle}-field`"
        :label="field.name"
        :required="field.srequired"
        :help="field.help"
        :hasError="hasError"
        :errorMessage="errorMessage">

        <table class="table" v-if="items.length">
            <ui-sortable-list v-model="items" :class="`${field.handle}-sortable-list`">
                <tbody>
                    <ui-sortable-item v-for="item in items" :key="item._id">
                        <tr>
                            <td class="w-2/12">
                                <ui-sortable-handle class="cursor-move inline-block">
                                    <fa-icon icon="grip-vertical" class="handle fa-fw text-gray-400 mr-3"></fa-icon>
                                </ui-sortable-handle>
                            </td>
                            <td class="w-4/12">
                                <ui-input-group name="key" v-model="item.key"></ui-input-group>
                            </td>
                            <td class="w-4/12">
                                <ui-input-group name="value" v-model="item.value"></ui-input-group>
                            </td>
                            <td class="w-2/12">
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
                    <td class="w-2/12"></td>
                    <td class="w-4/12">
                        <ui-input-group
                            name="key"
                            placeholder="New key"
                            @keyup.native.enter="add"
                            v-model="newKey">
                        </ui-input-group>
                    </td>
                    <td class="w-4/12">
                        <ui-input-group
                            name="value"
                            placeholder="New value"
                            @keyup.native.enter="add"
                            v-model="newValue">
                        </ui-input-group>
                    </td>
                    <td class="w-2/12">
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

        computed: {
            items: {
                get() {
                    return this.value || []
                },

                set(value) {
                    this.$emit('input', value)
                }
            },
        },

        watch: {
            items: {
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
                    this.items.push(
                        this.new(this.newKey, this.newValue))

                    // reset..
                    this.newKey   = ''
                    this.newValue = ''
                }
            },

            remove(id) {
                this.items = _.filter(this.items, (item) => item._id !== id)
            },
        }
    }
</script>