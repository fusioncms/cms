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
                options: []
            }
        },

        mounted() {
            axios.get('/api/fieldsets').then((response) => {
                this.options = _.map(response.data.data, (item) => {
                    return {
                        label: item.name,
                        value: item.id
                    }
                })

                this.options.unshift({
                    label: 'None',
                    value: null
                })
            })
        }
    }
</script>