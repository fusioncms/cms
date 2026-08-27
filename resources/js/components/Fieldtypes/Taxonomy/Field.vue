<template>
    <div>
        <ui-checkbox-group :label="field.name" :help="field.help" v-if="taxonomy.terms && taxonomy.terms.length > 0">
            <ui-checkbox
                v-for="term in taxonomy.terms"
                :key="term.id"
                :name="field.handle"
                :id="field.handle + '_' + term.id"
                :native-value="term.id"
                v-model="model">
                <template>
                    {{ term.name }}
                </template>
            </ui-checkbox>
        </ui-checkbox-group>

        <p v-else class="text-sm leading-none">Add a {{ singular }} below.</p>

        <div class="border-t pt-6" v-if="form">
            <ui-input-group
                class="mb-2"
                :name="term + '_name'"
                :placeholder="'New ' + singular + ' name...'"
                @keyup.enter.native="submit"
                required
                :has-error="form.errors.has('name')"
                :error-message="form.errors.get('name')"
                v-model="form.name">
            </ui-input-group>
            <ui-button @click.prevent="submit">Add {{ singular }}</ui-button>
        </div>
    </div>
</template>

<script>
    import pluralize from 'pluralize'
    import Form from '@/services/Form'
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'taxonomy-fieldtype',

        mixins: [FieldMixin],

        data() {
            return {
                taxonomy: {},
                form: false,
            }
        },

        computed: {
            term() {
                if (this.taxonomy.name) {
                    return this.taxonomy.name.toLowerCase()
                } else {
                    return 'terms'
                }
            },

            singular() {
                return pluralize.singular(this.term)
            }
        },

        methods: {
            submit() {
                this.form.post(`/api/taxonomies/${this.taxonomy.id}/terms`).then((response) => {
                    toast('Term saved successfully', 'success')

                    this.fetchTaxonomy()
                    this.resetForm()
                }).catch((response) => {
                    toast(response.message, 'failed')
                })
            },

            resetForm() {
                this.form = new Form({
                    name: '',
                    slug: '',
                    status: 1,
                })
            },

            fetchTaxonomy() {
                axios.get(`/api/taxonomies/${this.field.settings.taxonomy}`).then((response) => {
                    this.taxonomy = response.data.data
                })
            }
        },

        mounted() {
            this.fetchTaxonomy()
            this.resetForm()

            this.model = _.map(this.value, 'id') || []
        }
    }
</script>