<template>
    <div>
        <ui-radio-group
            :name="field.name"
            :label="field.name"
            :help="field.help"
            :inline="field.settings.display == 'row'">
                <ui-radio :key="field.name + option.label"
                    v-for="option in field.settings.options"
                    :name="field.name"
                    :id="option.value"
                    :value="option.value"
                    :checked="option.value == value"
                    @input="$emit('input', option.value)">
                    {{option.label}}
                </ui-radio>
        </ui-radio-group>
    </div>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'
    export default {
        name: 'radio-fieldtype',

        mixins: [fieldtype],

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: null,
            },
        }
    }
</script>
