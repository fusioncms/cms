<template>
    <ui-checkbox-group
        :label="field.name"
        :help="field.help"
        :inline="field.settings.display == 'row'"
        :hasError="hasError(field.handle)"
        :errorMessage="errorMessage(field.handle)">

        <ui-checkbox
            v-for="(option, index) in field.settings.options"
            :key="`${field.handle}.${index}`"
            :id="`${field.handle}.${index}`"
            :name="field.handle"
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

        created() {
            if (_.isEmpty(this.value)) {
                this.model = []
            }
        }
    }
</script>
