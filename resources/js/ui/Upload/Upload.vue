<template>
    <ui-field-group
        :name="name"
        :fieldId="formattedId"
        :required="required"
        :hasError="hasError"
        :errorMessage="errorMessage"
        :hasSuccess="hasSuccess"
        :successMessage="successMessage"
        :help="help">

        <span class="label" :class="{'label--required': required}">{{ label }}</span>
        
        <div class="field-upload">
            <input
                class="field-upload__input"
                :class="{'field--danger': hasError, 'field--success': hasSuccess}"
                :id="formattedId"
                :name="name"
                type="file"
                ref="input"
                :placeholder="placeholder"
                :readonly="readonly"
                :disabled="disabled"
                :required="required"
                :multiple="multiple"
                :accept="accept"
                :aria-required="required" 
                :aria-describedby="hasMessage ? formattedId + '_message' : null"
                @change="onFileChange">
            <label class="field-upload__label button button--primary button--large" :for="formattedId">
                <fa-icon icon="upload" class="mr-2"></fa-icon>
                <span>{{ buttonText }}</span>
            </label>
        </div>
            
        <template v-slot:bottom>
            <ul v-if="files.length" class="field-upload-list">
                <li v-for="(file, index) in files" :key="file.name" class="field-upload-list__item">
                    <ui-button @click.prevent="remove(index)" class="button--small button--icon">
                        <fa-icon icon="trash-alt"></fa-icon>
                        <span class="sr-only">Remove File</span>
                    </ui-button>
                    <span class="field-upload-list__file">{{ file.name }} - {{ file.size | bytes }}</span>
                </li>
            </ul>
        </template>
    </ui-field-group>
</template>

<script>
    export default {
        name: 'ui-upload',
        
        mixins: [
            require ('../../mixins/filehelper').default
        ],

        data() {
            return {
                files: [],
                isDraggedOver: false,
                error: '',
            }
        },

        props: {
            name:  {
                required: true,
                type: String
            },
            id: String,
            placeholder: String,
            label: String,
            help: String,
            multiple: Boolean,
            accept: String,
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
            errorMessage: {
                required: false,
                type: String,
                default: '',
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
            resetError() {
                this.error = ''
            },

            setError(message) {
                this.hasError = true
                this.errorMessage = message
            },

            onFileChange(event) {
                this.resetError()

                let files = Array.from(event.target.files || event.dataTransfer.files)

                files = _.filter(files, (file) => this.validExtension(file))

                if (! this.multiple && files.length > 1) {
                    files.length = 1
                }

                this.files = files

                this.emitInput()
            },

            remove(index) {
                this.files.splice(index, 1)

                this.emitInput()
            },

            emitInput() {
                if (this.multiple) {
                    this.$emit('input', this.files)
                } else {
                    this.$emit('input', this.files[0])
                }
            }
        },
        
        computed: {
            hasMessage() {
                return this.help || this.errorMessage || this.successMessage
            },

            formattedId() {
                return this.id ? this.id : this.name + '_field'
            },

            buttonText() {
                let text = this.multiple ? 'Select files' : 'Select a file'

                if (this.placeholder) {
                    text = this.placeholder
                }

                if (this.files.length) {
                    text = this.files.length > 1 ? this.files.length + ' files selected' : '1 file selected'
                }

                return text
            } 
        }
    }
</script>
