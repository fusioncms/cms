<template>
    <div class="field">
        <label
            class="field__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <div class="field__control">
            <input
                class="field__input"
                :class="{'font-mono': monospaced, 'text-xs': monospaced, 'field__input--danger': hasError}"
                :id="id"
                :name="name"
                :type="type"
                :placeholder="placeholder"
                :readonly="readonly"
                :disabled="disabled"
                :autocomplete="autocomplete"
                :autofocus="autofocus"
                v-model.lazy="model"
                ref="input">
        </div>

        <p class="field__help" v-if="help" v-html="help"></p>
        <p class="field__help field__help--danger" v-if="errorMessage" v-html="errorMessage"></p>
    </div>
</template>

<script>
    export default {
        name: 'p-slug',

        data() {
            return {
                inSync: true
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

        props: {
            name: String,
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
            errorMessage: {
                required: false,
                type: String,
                default: '',
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
