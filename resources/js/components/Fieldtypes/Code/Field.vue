<template>
    <ui-field-group
        :name="field.handle"
        :fieldId="field.handle"
        :label="field.name"
        :help="field.help"
        :has-error="hasError(field.handle)"
        :error-message="errorMessage(field.handle)">

        <div :ref="braceRef" class="border rounded"></div>
    </ui-field-group>
</template>

<script>
    import ace from 'brace'
    import 'brace/theme/chrome'
    import 'brace/mode/csharp'
    import 'brace/mode/css'
    import 'brace/mode/html'
    import 'brace/mode/java'
    import 'brace/mode/javascript'
    import 'brace/mode/json'
    import 'brace/mode/lua'
    import 'brace/mode/markdown'
    import 'brace/mode/php'
    import 'brace/mode/python'
    import 'brace/mode/ruby'
    import 'brace/mode/scss'
    import 'brace/mode/sh'
    import 'brace/mode/text'
    import 'brace/mode/xml'
    import 'brace/mode/yaml'
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'code-fieldtype',

        mixins: [FieldMixin],

        data() {
            return {
                editor: null,
            }
        },

        computed: {
            braceRef() {
                return `${this.field.handle}-brace`
            },

            syntax() {
                return this.field.settings.syntax || 'text'
            }
        },

        mounted() {
            this.editor = ace.edit(this.$refs[this.braceRef])
            this.editor.setOptions({
                showPrintMargin: false,
                minLines: 5,
                maxLines: Infinity,
                theme: 'ace/theme/chrome'
            })

            this.editor.$blockScrolling = Infinity
            this.editor.setValue(this.value || '', -1)

            this.editor.session.setUseWrapMode(true)
            this.editor.session.setMode(`ace/mode/${this.syntax}`)
            this.editor.session.on('change', (d) => {
                this.$emit('input', this.editor.getValue())
            })
        }
    }
</script>
