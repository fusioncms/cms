<template>
    <div>
        <ui-toggle
            :name="field.handle"
            :label="field.name"
            :help="field.help"
            :value="checked"
            @input="$emit('input', Boolean($event))"
        ></ui-toggle>
    </div>
</template>

<script>
    export default {
        name: 'toggle-fieldtype',

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                type: Boolean,
                required: false,
                default: false
            },
        },

        computed: {
            checked() {
                return this.value || this.field.settings.default
            }
        }
    }
</script>

