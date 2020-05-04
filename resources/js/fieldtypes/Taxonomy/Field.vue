<template>
    <div>
        <label
            class="form__label"
            :for="field.handle"
            v-html="field.name">
        </label>

        <p-checkbox-group :help="field.help" v-if="taxonomy.terms && taxonomy.terms.length > 0">
            <p-checkbox
                v-for="term in taxonomy.terms"
                :key="term.id"
                :name="field.handle"
                :id="term.id"
                :native-value="term.id"
                v-model="values">
                <template>
                    {{ term.name }}
                </template>
            </p-checkbox>
        </p-checkbox-group>

        <p v-else class="text-sm leading-none">Add a {{ singular }} below.</p>

        <div class="border-t pt-6" v-if="form">
            <p-input
                class="mb-2"
                :name="term + '_name'"
                :placeholder="'New ' + singular + ' name...'"
                @keyup.enter.native="submit"
                required
                :has-error="form.errors.has('name')"
                :error-message="form.errors.get('name')"
                v-model="form.name">
            </p-input>
            <p-button @click.prevent="submit">Add {{ singular }}</p-button>
        </div>
    </div>
</template>

<script>
    import pluralize from 'pluralize'
    import Form from '../../forms/Form'

    export default {
        name: 'taxonomy-fieldtype',

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
            },

            values: {
                get() {
                    return this.value || []
                },

                set(value) {
                    this.$emit('input', value)
                }
            }
        },

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: function() {
                    return []
                },
            },
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

            this.values = _.map(this.value, 'id') || []
        }
    }
</script>