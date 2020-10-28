<template>
    <ui-field-group
        :name="name"
        :fieldId="`${this.name}-field`"
        :label="label"
        :hideLabel="hideLabel"
        :required="required"
        :hasError="hasError"
        :errorMessage="errorMessage"
        :hasSuccess="hasSuccess"
        :successMessage="successMessage"
        :help="help">

        <table class="table" v-if="items.length">
            <ui-sortable-list v-model="items" :class="`${name}-sortable-list`">
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
                            @keyup.enter.prevent="add"
                            v-model="newKey">
                        </ui-input-group>
                    </td>
                    <td class="w-4/12">
                        <ui-input-group
                            name="value"
                            placeholder="New value"
                            @keyup.enter.prevent="add"
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

    export default {
        name: 'list-sortable',

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

        props: {
            name:  {
                type: String,
                required: true
            },
            label:  {
                type: String,
                required: false
            },
            hideLabel: {
                type: Boolean,
                required: false,
                default: false
            },
            value: {
                required: false,
                type: Array
            },
            required: {
                type: Boolean,
                default: false,
            },
            help: {
                type: String,
                required: false
            },
            hasError: {
                required: false,
                type: Boolean,
                default: false,
            },
            errorMessage: {
                required: false,
                type: String,
                default: '',
            },
            hasSuccess: {
                required: false,
                type: Boolean,
                default: false,
            },
            successMessage: {
                required: false,
                type: String,
                default: '',
            }
        },

        methods: {
            add() {
                if (this.newKey && this.newValue) {
                    this.items.push({
                        _id: uniqid(),
                        key: this.newKey,
                        value: this.newValue
                    })

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