<template>
    <ui-toggle
        :name="field.handle"
        :label="field.name"
        :help="field.help"
        v-model="model">
    </ui-toggle>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'toggle-fieldtype',

        mixins: [FieldMixin],

        created() {
            if (_.isNull(this.value)) {
                this.model = this.field.settings.default
            }
        }
    }
</script>

