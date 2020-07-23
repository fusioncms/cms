<template>
    <field-builder
    	v-model="fields"
    	@input="reorder(fields)">
    </field-builder>
</template>

<script>
    import fieldtype from '../../mixins/fieldtype'

    export default {
        name: 'replicator-fieldtype-settings',

        mixins: [fieldtype],

        data() {
        	return {
        		replicator: {},
                fields: []
        	}
        },

        methods: {
            reorder(fields) {
                _.each(fields, (field, order) => field.order = order)
            }
        },

        created() {
            if (! _.has(this.settings, 'fields')) {
                this.settings.fields = []
            }

            this.fields = this.settings.fields

        	if (this.settings.replicator) {
        		axios.get(`/api/replicator/${this.settings.replicator}`)
        			.then((response) => {
        				this.replicator = response.data.data
                        this.fields     = response.data.data.fields
        			})
            }
        }
    }
</script>

