<template>
    <ckeditor :editor="editor" v-model="model" :config="config"></ckeditor>
</template>

<script>
    import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block'

    export default {
        name: 'ui-ckeditor',

        data() {
            return {
                editor: BalloonBlockEditor,
                editorData: '',
            }
        },

        computed: {
            model: {
                get() {
                    return this.value
                },

                set(value) {
                    this.$emit('input', value)
                }
            },

            config() {
                return {
                    placeholder: this.placeholder || '',
                    blockToolbar: [
                        'heading', '|', 'bold', 'italic', 'link', '|', 'bulletedList', 'numberedList', '|', 'outdent', 'indent', '|', 'blockquote', '|', 'undo', 'redo',
                    ]
                }
            }
        },

        props: {
            name:  {
                required: false,
                type: String
            },
            id: String,
            placeholder: String,
            value: {
                type: String,
                default: '',
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
        },

        // watch: {
        //     value(value) {
        //         this.editorData = value
        //     },
        // },

        mounted() {
            // this.editorData = this.value
        }
    }
</script>
