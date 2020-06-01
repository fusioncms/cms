<template>
	<div class="form__group">
		<label v-if="label" :for="name" class="form__label" v-html="label"></label>

        <div class="form__select" :class="{ 'form__select--open': isOpen }" v-click-outside="close">
            <button
                type="button"
                ref="button"
                class="form__select-button"
                :disabled="disabled"
                @click="toggle">

                <div v-if="selectedOptions.length > 0">
                    <div v-if="multiple" v-for="(option, index) in selectedOptions" :key="index" class="badge">
                        {{ option.label || option }}
                        <button @click.stop="removeSelection(index)" class="w-6 h-6 inline-block align-middle text-gray-500 hover:text-gray-600 focus:outline-none">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
                        </button>
                    </div>

                    <span v-else v-html="selectedOptions[0].label || selectedOptions[0]"></span>
                </div>

                <span v-else class="form__select-placeholder" v-html="placeholder"></span>

                <div class="form__select-arrow">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </button>

            <div
                v-show="isOpen"
                class="form__select-dropdown"
                ref="dropdown"
                @keydown.down="highlightNext"
                @keydown.up="highlightPrevious"
                @keydown.enter.prevent="selectHighlighted"
                @keydown.esc="close">
                <input
                    v-if="filterable"
                    type="search"
                    ref="search"
                    class="form__select-search"
                    v-model="search"
                    placeholder="Search for option..."/>

                <div class="form__select-controls" v-if="showControls">
                    <span>Press enter to select</span>
                    <span>↑ ↓ to navigate</span>
                    <span>esc to dismiss</span>
                </div>

                <div v-if="filteredOptions.length > 0">
                    <p-checkbox-group ref="options" v-if="multiple" class="form__select-options">
                        <p-checkbox
                            v-for="(option, index) in filteredOptions"
                            :id="index"
                            :key="index"
                            :native-value="option.value"
                            :class="{ 'form__select-option--highlighted': isHighlighted(index) }"
                            name="selection"
                            v-model="selection">
                            {{ option.label }}
                        </p-checkbox>
                    </p-checkbox-group>

                    <ul ref="options" v-else v-show="filteredOptions.length > 0" class="form__select-options">
                        <li v-for="(option, index) in filteredOptions"
                            :key="index"
                            class="form__select-option"
                            :class="{
                                'form__select-option--selected': inSelection(option),
                                'form__select-option--highlighted': isHighlighted(index)
                            }"
                            @click="addSelection(option)">
                            {{ option.label }}
                        </li>
                    </ul>
                </div>

                <div v-else class="form__select-search-empty">
                    No results found for "{{ search }}"
                </div>
			</div>
        </div>

        <div class="form__control--meta" v-if="help || errorMessage">
            <div class="form__help">
                <span v-if="help" v-html="help"></span>
                <span v-if="errorMessage" class="form__error--message" v-html="errorMessage"></span>
            </div>
        </div>
	</div>
</template>

<script>
    import Popper from 'popper.js'

    export default {
        name: 'p-select',

        data() {
            return {
                isOpen: false,
                search: '',
                highlighted: 0,
                selection: []
            }
        },

        props: {
        	name: {
                required: true,
                type: String,
            },

            value: {
                required: false,
                default: null,
            },

            label: {
                required: false,
                type: String,
            },

            help: {
                required: false,
                type: String,
            },

            placeholder: {
                required: false,
                type: String,
                default: 'Please select an option...',
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

            errorMessage: {
                required: false,
                type: String,
                default: '',
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
            selection(value) {
                this.$emit('input', _.isArray(value) ? _.join(value, ',') : value)
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

            removeSelection(index) {
                this.selection.splice(index, 1)
            },

            toggleSelection(option) {
                if (this.inSelection(option)) {
                    this.removeSelection(_.indexOf(this.selection, option))
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

                this.toggleSelection(value)
            },

            resetHighlighted() {
                this.highlighted = 0
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
            if (_.isString(this.value)) {
                this.selection = this.value.split(',')
            } else if (_.isNumber(this.value)) {
                this.selection = [ _.toString(this.value) ]
            }
        },

        beforeDestroy() {
            if (this.popper) {
                this.popper.destroy()
            }
        }
    }
</script>