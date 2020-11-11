<template>
    <div class="row">
        <ui-select-group
            class="col w-full sm:w-1/2"
            name="taxonomy"
            label="Taxonomy"
            help="The taxonomy from which to show terms."
            autocomplete="off"
            :options="options"
            :has-error="errors.has('settings.taxonomy')"
            :error-message="errors.get('settings.taxonomy')"
            v-model="settings.taxonomy">
        </ui-select-group>
    </div>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'taxonomy-fieldtype-settings',

        mixins: [fieldtype],

        data() {
            return {
                taxonomies: []
            }
        },

        computed: {
            options() {
                return _.map(this.taxonomies, (taxonomy) => {
                    return {
                        label: taxonomy.name,
                        value: taxonomy.id
                    }
                })
            }
        },

        created() {
            axios.get('/api/taxonomies').then((response) =>
                this.taxonomies = response.data.data)
        }
    }
</script>