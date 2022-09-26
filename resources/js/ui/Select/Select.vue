<template>
    <div v-click-outside="close">
        <!-- Select Button -->
        <button
            class="field field-select"
            :class="{ 'field-select--open': isOpen, 'field-select--readonly': readonly, 'field--danger': hasError, 'field--success': hasSuccess}"
            type="button"
            ref="button"
            :disabled="disabled || readonly"
            @click="toggle"
            @keydown.down.prevent="highlightNext"
            @keydown.up.prevent="highlightPrevious"
            @keydown.enter="selectHighlighted"
            @keydown.esc="close">

            <!-- Selected Item/Items -->
            <div v-if="selectedOptions.length > 0" class="field-select__selected" :class="{'field-select__selected--multiple': multiple}">
                <ul v-if="multiple" class="field-select__list">
                    <li v-for="(option, index) in selectedOptions" :key="index" class="field-select__item">
                        <ui-tag
                            :value="option.label || option"
                            :label="'Unselect' + option.label || option"
                            @click="removeSelection(option)">
                        </ui-tag>
                    </li>
                </ul>

                <span v-else v-html="selectedOptions[0].label || selectedOptions[0]"></span>
            </div>

            <span v-else class="field-select__placeholder" v-html="placeholder"></span>

            <div class="field-select__arrow">
                <fa-icon icon="chevron-down" class="fa-fw"></fa-icon>
            </div>
        </button>

        <!-- Select Dropdown -->
        <div
            v-show="isOpen"
            class="field-dropdown"
            ref="dropdown">
            <!-- Search -->
            <div class="field-dropdown__search">
                <ui-label text="Search Options" :fieldId="'search_options_' + name" v-if="filterable"></ui-label>
                <ui-input
                    v-if="filterable"
                    :name="'search_options_' + name"
                    type="search"
                    ref="search"
                    v-model="search"
                    placeholder="Search for option...">
                </ui-input>
            </div>

            <p :id="formattedId + '_controls'" class="field-dropdown__controls" v-if="showControls">
                <span>Press enter to select,</span>
                <span>↑ ↓ to navigate,</span>
                <span>esc to dismiss</span>
            </p>

            <div class="field-dropdown__group" v-if="filteredOptions.length > 0">
                <!-- Multi-select -->
                <ui-checkbox-group
                    ref="options"
                    class="field-dropdown__options field-dropdown__options--check"
                    :aria-describedby="formattedId + '_controls'"
                    v-if="multiple">
                    <ui-checkbox
                        v-for="(option, index) in filteredOptions"
                        class="field-dropdown__option"
                        :id="formattedId + '_' + index"
                        :key="index"
                        :native-value="option.value"
                        :name="formattedId + '_option'"
                        v-model="selection">
                        {{ option.label }}
                    </ui-checkbox>
                </ui-checkbox-group>

                <!-- Single Select -->
                <ul ref="options" v-else v-show="filteredOptions.length > 0" class="field-dropdown__options field-dropdown__options--list">
                    <li v-for="(option, index) in filteredOptions"
                        tab-index="0"
                        :key="index"
                        class="field-dropdown__option"
                        :class="{'field-dropdown__option--selected': inSelection(option), 'field-dropdown__option--highlighted': isHighlighted(index)}"
                        @click="addSelection(option)">
                        {{ option.label }}
                    </li>
                </ul>
            </div>

            <!-- No Results -->
            <p v-else class="field-dropdown__empty">
                No results found for "{{ search }}"
            </p>
        </div>
    </div>
</template>

<script>
    import Popper from 'popper.js'

    export default {
        name: 'ui-select',

        mixins: [
            require('../../mixins/fields').default
        ],

        data() {
            return {
                isOpen: false,
                search: '',
                highlighted: 0,
                // assuming selection is a string or a number only
                selection: _.isString(this.value) ? this.value.split(',') : (this.value ? this.value.toString() : null),
            }
        },

        props: {
        	name: {
                required: true,
                type: String
            },
            value: {
                required: false,
                default: null,
            },
            id: String,
            help: {
                required: false,
                type: String,
            },
            placeholder: {
                required: false,
                type: String,
                default: 'Please select an option...',
            },
            required: {
                type: Boolean,
                default: false,
            },
            readonly: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            hasError: {
                required: false,
                type: Boolean,
                default: false,
            },
            hasSuccess: {
                required: false,
                type: Boolean,
                default: false,
            },
            message: {
                required: false,
                type: Boolean,
                defaut: false
            },
            options: {
                required: false,
                type: Array,
                default: () => {
                    return []
                },
            },
            filterable: {
                required: false,
                type: Boolean,
                default: false,
            },
            dark: {
                required: false,
                type: Boolean,
                default: false,
            },
            showControls: {
                required: false,
                type: Boolean,
                default: false,
            },
            multiple: {
                required: false,
                type: Boolean,
                default: false
            }
        },

        computed: {
            availOptions() {
                return _.map(this.options, (option) => {
                    let label = _.has(option, 'label') ? option['label'] : option
                    let value = _.has(option, 'value') ? option['value'] : option

                    // Note:
                    //  All option values are saved as strings
                    //  therefore we will immediately convert
                    //  all numbers to strings.
                    if (_.isNumber(value)) {
                        value = _.toString(value)
                    }

                    return { label, value }
                })
            },

            filteredOptions() {
                return this.availOptions.filter((option) => {
                    const label = _.has(option, 'label') ? option['label'] : option

                    return label.toLowerCase().startsWith(this.search.toLowerCase())
                })
            },

            selectedOptions() {
                return this.availOptions.filter((option) => {
                    return this.inSelection(option)
                })
            },

            highlight() {
                if (this.multiple) {
                    return this.$refs.options.$children[this.highlighted].$el
                } else {
                    return this.$refs.options.children[this.highlighted]
                }
            }
        },

        watch: {
            value(value) {
                this.selection = _.isString(value) ? value.split(',') : value
                this.resetHighlighted();
            },

            selection(value) {
                if (!this.multiple) {
                    this.$emit('input', value.length ? value[0] : null)
                } else {
                    this.$emit('input', value)
                }
            },

            search(value) {
                if (value == '') {
                    this.resetHighlighted()
                }
            }
        },

		methods: {
            toggle() {
                this.isOpen ? this.close() : this.open()
            },

            open() {
                this.isOpen = true

                this.$nextTick(() => {
                    if (this.filterable) {
                        this.$refs.search.focus()
                    }

                    this.setupPopper()
                })
            },

            close() {
                if (this.isOpen) {
                    this.resetSearch()
                    this.resetHighlighted()

                    this.isOpen = false
                    this.$refs.button.focus()
                }
            },

            setupPopper() {
                if (this.popper === undefined) {
                    this.popper = new Popper(this.$refs.button, this.$refs.dropdown, {
                        placement: 'bottom'
                    })
                } else {
                    this.popper.scheduleUpdate()
                }
            },

            addSelection(option) {
                if (this.multiple) {
                    this.selection.push(option.value)
                } else {
                    this.selection = [ option.value ]
                    this.close()
                }
            },

            removeSelection(option) {
                let index = _.findIndex(this.selection, (item) => {
                    return option.value == item
                })
                console.log('remove', index, this.selection, option)
                this.selection.splice(index, 1)
            },

            toggleSelection(option) {
                if (this.inSelection(option)) {
                    this.removeSelection(option)
                } else {
                    this.addSelection(option)
                }
            },

            inSelection(option) {
                return _.includes(this.selection, option.value)
            },

            resetSearch() {
                this.search = ''
            },

            isHighlighted(index) {
                return (index === this.highlighted)
            },

            selectHighlighted() {
                let option = this.filteredOptions[this.highlighted]
                let value  = option.value || option

                this.toggleSelection(option);
            },

            resetHighlighted() {
                this.highlighted = this.filteredOptions.findIndex(option => option.value === this.value);
            },

            setHighlight(index) {
                this.highlighted = index

                if (this.highlighted > (this.filteredOptions.length - 1)) {
                    this.highlighted = 0
                }

                if (this.highlighted < 0) {
                    this.highlighted = this.filteredOptions.length - 1
                }

                this.highlight.scrollIntoViewIfNeeded()
            },

            highlightNext() {
                this.setHighlight(this.highlighted + 1)

                this.highlight.scrollIntoViewIfNeeded()
            },

            highlightPrevious() {
                this.setHighlight(this.highlighted - 1)

                this.highlight.scrollIntoViewIfNeeded()
            }
        },

        mounted() {
            this.resetHighlighted();
        },

        beforeDestroy() {
            if (this.popper) {
                this.popper.destroy()
            }
        }
    }
</script>