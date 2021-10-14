<template>
    <div class="collection-page">
        <portal to="title">
            <page-title :icon="collection.icon || 'pencil-alt'" :subtitle="collection.description">Edit {{ collection.name }}</page-title>
        </portal>

        <shared-form
            v-if="form"
            :loading="loading"
            :form="form"
            :entry="entry"
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
                    inner: _.has(this.form, 'name') ? this.form.name : 'Loading...'
                }
            }
        },

        data() {
            return {
                collection: {},
                entry: {},
                form: null,
                loading: false
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.loading = true;
                this.form.patch('/api/collections/' + this.collection.slug + '/' + this.entry.id).then((response) => {
                    toast('Entry saved successfully', 'success')

                    this.$router.push('/collection/' + this.collection.slug)
                }).catch((response) => {
                    toast(response.message, 'failed')
                    this.loading = false;
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getEntry(to.params.collection, to.params.id, (error, entry, matrix, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/collection/' + vm.$router.currentRoute.params.collection)

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.collection = matrix
                        vm.entry = entry
                        vm.form = new Form(fields, true)

                        vm.$emit('updateHead')
                    })
                }
            })
        },

        beforeRouteUpdate(to, from, next) {
            getEntry(to.params.collection, to.params.id, (error, entry, matrix, fields) => {
                if (error) {
                    this.$router.push('/collection/' + this.$router.currentRoute.params.collection)

                    toast(error.toString(), 'danger')
                } else {
                    this.collection = matrix
                    this.entry = entry
                    this.form = new Form(fields, true)

                    this.$emit('updateHead')
                }
            })

            next()
        }
    }

    export function getEntry(collection, id, callback) {
        axios.get('/api/collections/' + collection + '/' + id).then((response) => {
            let matrix = response.data.data.matrix
            let entry = response.data.data.entry
            let fields = {
                name: entry.name,
                slug: entry.slug,
                status: entry.status,
                publish_at: entry.publish_at,
                expire_at: entry.expire_at,
            }

            _.forEach(matrix.blueprint.sections, function(section) {
                _.forEach(section.fields, function(field) {
                    fields[field.handle] = entry[field.handle]
                })
            })

            callback(null, entry, matrix, fields)
        }).catch(function(error) {
            callback(new Error('The requested entry could not be found'))
        })
    }
</script>