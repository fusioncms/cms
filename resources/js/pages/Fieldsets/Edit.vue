<template>
    <div>
        <portal to="title">
            <page-title icon="list">Edit Fieldset</page-title>
        </portal>

        <shared-form
            v-if="form"
            :form="form"
            :resource="resource">
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
                id: null,
                resource: null,
                sections: [],
                form: null
            }
        },

        components: {
            'shared-form': SharedForm
        },

        watch: {
            sections: {
                deep: true,
                handler(value) {
                    if (! this.hasChanges) {
                        this.form.onFirstChange()
                    }
                }
            }
        },

        methods: {
            submit() {
                this.form.patch(`/api/fieldsets/${this.resource.id}`)
                    .then(() => {
                        axios.post(`/api/fieldsets/${this.resource.id}/sections`, { sections: this.sections })
                            .then(() => {
                                toast('Fieldset successfully updated', 'success')

                                this.$router.push('/fieldsets')
                            }).catch((response) => {
                                toast(response.message, 'failed')
                            })
                    }).catch((response) => {
                        toast(response.response.data.message, 'failed')
                    })
            }
        },

        beforeRouteEnter(to, from, next) {
            getFieldset(to.params.fieldset, (error, fieldset) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/fieldsets')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.resource = fieldset
                        vm.sections = fieldset.sections
                        vm.form = new Form({
                            name: fieldset.name,
                            handle: fieldset.handle,
                        }, true)

                        vm.$nextTick(() => {
                            vm.$emit('updateHead')
                            vm.form.resetChangeListener()
                        })
                    })
                }
            })
        }
    }

    export function getFieldset(fieldset, callback) {
        axios.get('/api/fieldsets/' + fieldset).then((response) => {
            callback(null, response.data.data)
        }).catch(function(error) {
            callback(new Error('The requested fieldset could not be found'))
        })
    }
</script>