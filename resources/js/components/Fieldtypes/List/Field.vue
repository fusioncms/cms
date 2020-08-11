<template>
    <div>
        <div class="field">
            <label
                class="field__label"
                :for="field.handle"
                v-if="field.name"
                v-html="field.name">
            </label>

            <div class="field__control">
                <p-sortable-list
                    v-model="items"
                    v-if="items.length"
                    @input="$emit('input', normalizedItems)"
                >
                    <div slot-scope="{ items: items }" class="bg-white border border-gray-300 rounded">
                        <p-sortable-item v-for="(item, index) in items" :key="item._id">
                            <div class="flex">
                                <div class="flex flex-1 items-center">
                                    <p-sortable-handle class="cursor-move inline-block ml-2 text-gray-500">
                                        <menu-icon size=".975x"></menu-icon>
                                    </p-sortable-handle>

                                    <input
                                        class="w-full px-3 py-2"
                                        v-model="items[index].value"
                                    >

                                    <button class="p-2 text-gray-500 hover:text-danger-500 focus:outline-none" @click.prevent="destroy(index)">
                                        <x-icon size=".975x"></x-icon>
                                    </button>
                                </div>
                            </div>
                        </p-sortable-item>
                    </div>
                </p-sortable-list>

                <div v-else class="text-sm">
                    Your list is empty.
                </div>
            </div>
        </div>

        <div class="-mt-3">
            <div class="flex rounded">
                <div class="relative flex-grow focus-within:z-10">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <list-icon size=".975x" class="text-gray-400"></list-icon>
                    </div>

                    <input type="text" @keyup.enter.prevent="add" v-model="newItem" class="field__input block w-full rounded-none rounded-l pl-10 transition ease-in-out duration-150" placeholder="Add an item...">
                </div>

                <button @click.prevent="add" class="rounded-r -ml-px inline-flex items-center text-gray-500 text-sm border border-gray-300 px-3 py-2 hover:border-gray-400 hover:bg-gray-100 focus:outline-none focus:shadow-focus">
                    <plus-icon size=".975x"></plus-icon>
                </button>
            </div>
        </div>

        <!-- <input type="text"  placeholder="Add an item..." class="field__input -mt-3"> -->
    </div>
</template>

<script>
    import uniqid from 'uniqid'
    import fieldtype from '@/mixins/fieldtype'
    import {XIcon, MenuIcon, ListIcon, PlusIcon} from 'vue-feather-icons'

    export default {
        name: 'list-fieldtype',

        components: {
            'x-icon': XIcon,
            'menu-icon': MenuIcon,
            'list-icon': ListIcon,
            'plus-icon': PlusIcon,
        },

        data() {
            return {
                newItem: '',
                items: [],
            }
        },

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                type: Array,
                default: function() {
                    return []
                },
            },
        },

        computed: {
            normalizedItems() {
                return _.map(this.items, 'value')
            },
        },

        methods: {
            add() {
                if (this.newItem) {
                    this.items.push(this.new(this.newItem))
                }

                this.$emit('input', this.normalizedItems)
                this.newItem = ''
            },

            destroy(index) {
                this.items.splice(index, 1)
                this.$emit('input', this.normalizedItems)
            },

            new(item) {
                return {
                    _id: uniqid(),
                    value: item
                }
            }
        },

        mounted() {
            if(!this.value) {
                this.$emit('input', [])
            }

            _.each(this.value, (item) => {
                this.items.push(this.new(item))
            })
        }
    }
</script>