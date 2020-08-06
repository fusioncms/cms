<template>
    <p-field-group
        :name="name"
        :fieldId="formattedId"
        :label="label"
        :required="required"
        :hasError="hasError"
        :errorMessage="errorMessage"
        :hasSuccess="hasSuccess"
        :successMessage="successMessage"
        :help="help">
        <input
            class="field field--input"
            :class="{'font-mono': monospaced, 'field--danger': hasError, 'field--success': hasSuccess}"
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
            :aria-required="required" 
            :aria-describedby="hasMessage ? formattedId + '_message' : null"
            v-model.lazy="model"
            ref="input">
    </p-field-group>
</template>

<script>
    export default {
        name: 'p-slug',

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
            }
        },

        data() {
            return {
                inSync: true,
                isLocked: _.endsWith(this.$route.name, '.edit')
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

            hasMessage() {
                return this.help || this.errorMessage || this.successMessage
            },

            formattedId() {
                return this.id ? this.id : this.name + '_field'
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
