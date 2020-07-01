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
        
        <table v-if="files.length" class="upload__files">
            <tbody>
                <tr v-for="(file, index) in files" :key="file.name" class="upload__file">
                    <td class="upload__file--name">{{ file.name }}</td>
                    <td class="upload__file--size">{{ file.size | bytes }}</td>
                    <td class="upload__file--actions"><p-button @click.prevent="remove(index)">Remove</p-button></td>
                </tr>
            </tbody>
        </table>

        <div class="form__control--meta" v-if="help || errorMessage || error">
            <div class="form__help">
                <span v-if="help" v-html="help"></span>
                <span v-if="errorMessage" class="form__error--message" v-html="errorMessage"></span>
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
                files: [],
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
            accept: String,
            required: Boolean,
            errorMessage: {
                required: false,
                type: String,
                default: '',
            },
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

            resetError() {
                this.error = ''
            },

            setError(message) {
                this.error = message
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
        }
    }
</script>
