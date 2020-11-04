<template>
    <ui-checkbox-group
        :label="field.name"
        :help="field.help"
        :inline="field.settings.display == 'row'">
            <ui-checkbox
                v-for="option in field.settings.options"
                :key="option.value"
                :name="field.name"
                :id="option.value"
                :native-value="option.value"
                v-model="model">
                {{option.label}}
            </ui-checkbox>
    </ui-checkbox-group>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'checkbox-fieldtype',

        mixins: [FieldMixin],

        computed: {
            model: {
                get() {
                    return this.value || []
                },

                set(value) {
                    this.$emit('input', value)
                }
            }
        }
    }
</script>
