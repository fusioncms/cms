<template>
    <ui-input-group
        type="hidden"
        :name="field.handle"
        :value="value">
    </ui-input-group>
</template>

<script>
	import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'hidden-fieldtype',

        mixins: [FieldMixin],

        created() {
        	this.$emit('input', this.field.settings.value)
        }
    }
</script>
