<template>
    <p-modal
        name="replace-file"
        title="Replace current file with another"
        no-footer
        v-model="open"
    >
        <p-upload
            name="file"
            help="Select a file to replace current file."
            :multiple="false"
            @input="upload"
        ></p-upload>
    </p-modal>
</template>

<script>
    export default {
        name: 'replace-file-modal',

        data() {
            return {
                open: false
            }
        },

        props: {
            file: {
                type: Object,
                required: true
            }
        },

        methods: {
            upload(files) {
                let form = new FormData()
                form.append('_method', 'POST')
                form.append('file', files.shift())

                axios.post(`/api/files/replace/${this.file.id}`, form)
                    .then((response) => {
                        this.$emit('replaced', response.data.data)
                        this.open = false

                        toast('File has been replaced successfully!', 'success')
                    })
            }
        }
    }
</script>
