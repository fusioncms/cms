<template>
    <div class="field">
    	<p-upload
            ref="upload"
            name="file"
            :label="field.name"
            :help="field.help"
            :placeholder="field.settings.placeholder"
            :multiple="true"
            :errors="errors"
            v-model="model"
            @input="upload">
        </p-upload>
    </div>
</template>

<script>
	export default {
		name: 'file-fieldtype',

		data() {
			return {
                model: this.value,
				errors: {}
			}
		},

		props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                type: Array,
                required: false,
                default: () => [],
            }
        },

        methods: {
            upload(files) {
                let uploadForm = new FormData()
                let fileCount  = 0
                let values     = []
                this.errors    = {}

                uploadForm.append('_method', 'POST')

                _.each(files, (file) => {
                    if (file instanceof File) {
                        fileCount += 1
                        uploadForm.append('file[]', file)
                    } else {
                        values.unshift(file)
                    }
                })

                if (fileCount > 0) {
                    axios.post('/api/fields/file', uploadForm)
                    	.then((response) => values.unshift(...response.data.files))
                    	.catch((error) => {
                            this.errors = error.response.data.errors

                            _.each(this.errors, (value, key) => {
                                this.model.splice(key, 1)
                            })
                        })
                }

                this.$emit('input', values)
            }
        }
	}
</script>