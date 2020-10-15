<template>
    <div class="collection-page">
        <portal to="title">
            <page-title :icon="collection.icon || 'pencil-alt'" :subtitle="collection.description">Create {{ collection.reference_singular }}</page-title>
        </portal>

        <shared-form
            v-if="form"
            :form="form"
            :collection="collection">
        </shared-form>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: this.collection.reference_singular || 'Loading...'
                }
            }
        },

        data() {
            return {
                collection: {},
                form: null
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.post(`/api/collections/${this.collection.slug}`).then((response) => {
                    toast('Entry saved successfully', 'success')

                    this.$router.push(`/collection/${this.collection.slug}`)
                }).catch((response) => {
                    toast(response.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.get(`/api/matrices/slug/${to.params.collection}`)
                .then(response => {
                    next(vm => {
                        let collection = response.data.data
                        let form     = {
                            name: '',
                            slug: '',
                            status: 1,
                        }

                        _.each(collection.blueprint.sections, (section) => {
                            _.each(section.fields, (field) => {
                                form[field.handle] = field.default
                            })
                        })

                        vm.collection = collection
                        vm.form = new Form(form, true)

                        vm.$emit('updateHead')
                    })
                })
                .catch(() => {
                    vm.$router.push(`/collection/${vm.$router.currentRoute.params.collection}`)

                    toast('Requested entry could not be found.', 'danger')
                })
        }
    }
</script>