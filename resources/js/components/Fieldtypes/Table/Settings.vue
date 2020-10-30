<template>
    <div class="row">
        <ui-number-group
            class="col w-full sm:w-1/2"
            name="settings.initRows"
            label="Rows"
            help="Starting rows in a new table."
            autocomplete="off"
            v-model="settings.initRows || 1"
            min="1"
            :has-error="errors.has('settings.initRows')"
            :error-message="errors.get('settings.initRows')">
        </ui-number-group>

        <ui-number-group
            class="col w-full sm:w-1/2"
            name="settings.initcols"
            label="Columns"
            help="Starting columns in a new table."
            autocomplete="off"
            v-model="settings.initCols || 1"
            min="1"
            :has-error="errors.has('settings.initCols')"
            :error-message="errors.get('settings.initCols')">
        </ui-number-group>
    </div>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'table-fieldtype-settings',

        mixins: [fieldtype]
    }
</script>
