<template>
    <ui-input-group
        type="email"
        :name="field.handle"
        :label="field.name"
        :help="field.help"
        :placeholder="field.settings.placeholder"
        :hasError="hasError(field.handle)"
        :errorMessage="errorMessage(field.handle)"
        v-model="model">
    </ui-input-group>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'email-fieldtype',

        mixins: [FieldMixin],
    }
</script>
