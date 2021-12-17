<template>
    <div class="row">
        <ui-select-group
            class="col w-full sm:w-1/2"
            name="settings.syntax"
            label="Syntax"
            help="What language should the syntax highlighter use?"
            autocomplete="off"
            v-model="settings.syntax"
            :options="options"
            :has-error="errors.has('settings.syntax')"
            :error-message="errors.get('settings.syntax')">
        </ui-select-group>
    </div>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'code-fieldtype-settings',

        mixins: [fieldtype],

        data() {
            return {
                modes: [
                    'CSharp',
                    'CSS',
                    'HTML',
                    'Java',
                    'JavaScript',
                    'JSON',
                    'Lua',
                    'Markdown',
                    'PHP',
                    'Python',
                    'Ruby',
                    'SCSS',
                    'sh',
                    'Text',
                    'XML',
                    'YAML',
                ]
            }
        },

        computed: {
            options() {
                return this.modes.map(mode => ({'value' : mode.toLowerCase(), 'label' : mode}));
            }
        },

        created() {
            if (_.isEmpty(this.settings.syntax)) {
                this.settings.syntax = 'text'
            }
        }
    }
</script>
