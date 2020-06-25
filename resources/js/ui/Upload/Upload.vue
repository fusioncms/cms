<template>
    <div class="form__group">
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <div
            @dragover.prevent="enter"
            @dragenter.prevent="enter"
            @dragleave.prevent="leave"
            @dragend.prevent="leave"
            @drop.prevent="onFileChange"
            class="upload__container"
            :class="{'upload__container--dragged': isDraggedOver}"
        >
            <input
                class="upload__control"
                type="file"
                ref="input"
                :name="name"
                :id="name"
                :multiple="multiple"
                :required="required"
                @change="onFileChange"
            >
            
            <label :for="name" class="upload__label">
                <strong>Drag files here</strong> or click to select
            </label>
        </div>

        <div v-if="files.length" class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul>
                <li v-for="(file, index) in files" :key="`file.${index}`">
                    <div class="p-2 sm:px-4">
                        <div class="flex items-start">
                            <div class="upload__file--name flex-1 text-sm" v-text="file.name" />

                            <div class="upload__file--size text-sm">
                                {{ file.bytes || file.size | bytes }}
                            </div>
                            
                            <div class="upload__file--actions pl-4">
                                <p-button class="button--danger button--small" @click.prevent="remove(index)">Remove</p-button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="form__control--meta" v-if="help || error">
            <div class="form__help">
                <span v-if="help" v-html="help"></span>
                <span v-if="error" class="form__error--message" v-html="error"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-upload',

        mixins: [
            require ('../../mixins/filehelper').default
        ],

        data() {
            return {
                files: this.value,
                isDraggedOver: false,
                error: '',
            }
        },

        props: {
            name: String,
            placeholder: String,
            label: String,
            help: String,
            multiple: Boolean,
            required: Boolean,
            value: {
                type: Array,
                required: false,
                default: () => []
            },
            errors: {
                type: Array,
                required: false,
                default: () => []
            }
        },

        watch: {
            errors(value) {
                let errors = []

                _.each(value, (error) => {
                    errors = errors.concat(_.isArray(error) ? error : [error])
                })
                
                this.error = _.uniq(errors).join("\n")
            }
        },

        methods: {
            enter() {
                this.isDraggedOver = true
            },

            leave() {
                this.isDraggedOver = false
            },

            drop(event) {
                this.leave()

                this.onFileChange(event)
            },

            onFileChange(event) {
                this.error = ''

                let files = Array.from(event.target.files || event.dataTransfer.files)

                files = _.filter(files, (file) => {
                    let isValid = this.validExtension(file)

                    if (! isValid) {
                        this.error += `Each file must be a file of type: ${this.accept}\n`
                    }

                    return isValid
                })

                if (! this.multiple && files.length > 0) {
                    files.length = 1
                }

                this.files.unshift(...files)

                this.$emit('input', this.files)
            },

            remove(index) {
                this.files.splice(index, 1)

                this.$emit('input', this.files)
            }
        }
    }
</script>
