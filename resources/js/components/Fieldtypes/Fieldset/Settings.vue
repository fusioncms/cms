<template>
    <div class="row">
        <ui-select-group
            class="col w-full sm:w-1/2"
            name="fieldset"
            label="Fieldset"
            help="The fieldset from which to integrate fields."
            autocomplete="off"
            :options="options"
            :has-error="errors.has('settings.fieldset')"
            :error-message="errors.get('settings.fieldset')"
            v-model="settings.fieldset">
        </ui-select-group>
    </div>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'fieldset-fieldtype-settings',

        mixins: [fieldtype],

        data() {
            return {
                fieldsets: []
            }
        },

        computed: {
            options() {
                return _.map(this.fieldsets, (fieldset) => {
                    return {
                        label: fieldset.name,
                        value: fieldset.id
                    }
                })
            }
        },

        created() {
            axios.get('/api/fieldsets').then((response) =>
                this.fieldsets = response.data.data)
        }
    }
</script>