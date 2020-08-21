<template>
        <p-input
            monospaced
            :id="formattedId"
            :name="name"
            :type="type"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :value="value"
            :autocomplete="autocomplete"
            :autofocus="autofocus"
            :required="required"
            :hasError="hasError"
            :hasSuccess="hasSuccess"
            :message="message"
            v-model.lazy="model"
            ref="input">
        </p-input>
</template>

<script>
    export default {
        name: 'p-slug',

        mixins: [
            require('../../mixins/fields').default
        ],

        props: {
            name:  {
                required: true,
                type: String
            },
            id: String,
            placeholder: String,
            label: String,
            help: String,
            value: {
                type: [String, Number],
                default: '',
            },
            type: {
                type: String,
                default: 'text',
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
            monospaced: {
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
            autocomplete: {
                required: false,
                type: String,
                default: '',
            },
            autofocus: {
                required: false,
                type: Boolean,
                default: false,
            },
            delimiter: {
                required: false,
                type: String,
                default: '-',
            },
            watch: {
                required: false,
                type: String,
                default: '',
            },
            forceWatch: {
                required: false,
                type: Boolean,
                default: false,
            }
        },

        data() {
            return {
                inSync: true
            }
        },

        watch: {
            watch(value) {
                if (this.inSync && ! this.isLocked) {
                    this.model = value
                }
            },

            model(value) {
                this.inSync = ! this.isLocked && (value === '' || value === this.slugify(this.watch))
            }
        },

        computed: {
            model: {
                get() {
                    return this.value
                },

                set(value) {
                    this.$emit('input', this.slugify(value))
                }
            },

            isLocked() {
                return !this.forceWatch &&
                       _.endsWith(this.$route.name, '.edit')
            }
        },

        methods: {
            slugify(value) {
                const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿỳýœæŕśńṕẃǵǹḿǘẍźḧ'
                const b = 'aaaaeeeeiiiioooouuuuncsyyyoarsnpwgnmuxzh'
                const p = new RegExp(a.split('').join('|'), 'g')
                const d = new RegExp(this.delimiter + '{2,}', 'g')

                return value
                    .toString()
                    .toLowerCase()
                    .trim()
                    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
                    .replace(/&+/gi, 'and')                  // Replace 1 or more & characters with the word 'and'
                    .replace(/([^\w\s]|_)+/g, ' ')           // Remove all non-word chars
                    .replace(/\s+/g, this.delimiter)         // Convert spaces with delimiter
                    .replace(d, this.delimiter)              // Replace multiple delimiters with a single one
            }
        }
    }
</script>
