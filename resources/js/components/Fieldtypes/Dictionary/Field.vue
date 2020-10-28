<template>
    <list-sortable
        :name="field.handle"
        :label="field.name"
        :help="field.help"
        :value="value"
        :has-error="hasError"
        :error-message="errorMessage"
        @input="$emit('input', $event)">
    </list-sortable>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'
    import ListSortable from '@/components/ListSortable'

    export default {
        name: 'dictionary-fieldtype',

        mixins: [FieldMixin],

        components: {
            'list-sortable': ListSortable
        }
    }
</script>