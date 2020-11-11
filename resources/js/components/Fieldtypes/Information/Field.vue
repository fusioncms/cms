<template>
    <div class="row">
        <div class="col w-full">
            <p v-html="field.help"></p>
        </div>
    </div>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'information-fieldtype',

        mixins: [FieldMixin],
    }
</script>
