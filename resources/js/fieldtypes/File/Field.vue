<template>
    <div class="field">
    	<p-upload
            ref="upload"
            name="file"
            :label="field.name"
            :help="field.help"
            :placeholder="placeholder"
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
				errors: []
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

        computed: {
            placeholder() {
                return _.defaultTo(this.field.settings.placeholder, '')
            },

            limit() {
                return _.defaultTo(this.field.settings.limit, false)
            },

            count() {
                return this.model.length
            }
        },

        methods: {
            upload(files) {
                let uploadForm = new FormData()
                let fileCount  = 0
                let values     = []

                // reset..
                this.errors = []

                // limit..
                if (this.limit && files.length > this.limit) {
                    files = _.drop(files, files.length - this.limit)
                    this.errors.push(`File limit of ${this.limit} has been reached.`)
                }

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
                            _.each(error.response.data.errors, (value, key) => {
                                this.errors.push(value)
                                this.model.splice(key, 1)
                            })
                        })
                }

                this.$emit('input', values)
            }
        }
	}
</script>