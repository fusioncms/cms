<template>
    <ui-textarea-group
        :name="field.handle"
        :label="field.name"
        :help="field.help"
        :placeholder="field.settings.placeholder"
        :has-error="hasError(field.handle)"
        :error-message="errorMessage(field.handle)"
        v-model="model">
    </ui-textarea-group>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'
    import EasyMDE from 'easymde'

    export default {
        name: 'markdown-fieldtype',

        mixins: [FieldMixin],

        data() {
            return {
                easymde: null,
            }
        },

        mounted() {
            this.easymde = new EasyMDE({
                element: document.getElementById(`${this.field.handle}-field`),
                hideIcons: ['fullscreen'],  // TODO: <-- fix fullscreen toggle
                initialValue: this.value,
                renderingConfig: {
                    codeSyntaxHighlighting: true,
                }
            })

            this.easymde.codemirror.on('change', (instance, change) => {
                this.model = this.easymde.value()
            })
        },

        destroyed() {
            this.easymde = null
        }
    }
</script>