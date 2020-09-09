<template>
    <ui-modal name="replace-file" title="Replace current file with another">
        <ui-upload
            ref="upload"
            name="file"
            label="Replace"
            :multiple="false"
            @input="uploadFile">
        </ui-upload>

        <template v-slot:footer>
            <ui-button v-modal:replace-file>Close</ui-button>
            <ui-button variant="primary" @click="submit" v-modal:replace-file class="mr-1">Replace</ui-button>
        </template>
    </ui-modal>
</template>

<script>
    export default {
        name: 'replace-file-modal',

        data() {
            return {
                uploadForm: null
            }
        },

        props: {
            file: {
                required: true,
            },
        },

        methods: {
            uploadFile(files) {
                this.uploadForm = new FormData()
                this.uploadForm.append('_method', 'POST')
                this.uploadForm.append('file', files)
            },

            submit() {
                if (this.uploadForm) {
                    axios.post(`/api/files/replace/${this.file.id}`, this.uploadForm).then((response) => {
                        this.uploadForm = null
                        this.$refs.upload.remove()
                        this.$emit('replaced', response.data.data)

                        toast('File has been replaced successfully!', 'success')
                    })
                } else {
                    toast('No replacement specified.', 'failed')
                }
            }
        }
    }
</script>
