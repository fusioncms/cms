<template>
    <div class="matrix-page">
        <portal to="title">
            <page-title icon="layer-group">Edit Fieldset</page-title>
        </portal>

        <shared-form
            v-if="form"
            :loading="loading"
            :form="form"
            :submit="submit">
        </shared-form>
    </div>
</template>

<script>
    import Form       from '@/services/Form'
    import SharedForm from '@/pages/Fieldsets/SharedForm'

    export default {
        auth() {
            return {
                permission: 'fieldsets.update',
            }
        },

        head: {
            title() {
                return {
                    inner: _.has(this.form, 'name') ? this.form.name : 'Loading...'
                }
            }
        },

        data() {
            return {
                fieldset: {},
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
                this.form.patch(`/api/fieldsets/${this.fieldset.id}`).then((response) => {
                    this.$store.dispatch('navigation/fetchAdminNavigation')

                    toast('Fieldset successfully updated', 'success')

                    this.$router.push('/fieldsets')
                    this.loading = false;
                }).catch((response) => {
                    toast(response.message, 'failed')
                    this.loading = false;
                })
            }
        },

        beforeRouteEnter(to, from, next) {
            getModels(to.params.fieldset, (error, fieldset) => {
                if (error) {
                    next((vm) => {
                        toast(error.toString(), 'danger')

                        vm.$router.push('/fieldsets')
                    })
                } else {
                    next((vm) => {
                        vm.fieldset = fieldset.data.data

                        vm.form = new Form({
                            name:   vm.fieldset.name,
                            handle: vm.fieldset.handle,
                            status: vm.fieldset.status ? '1' : '0',
                            fields: vm.fieldset.fields
                        }, true)

                        vm.$nextTick(() => {
                            vm.$emit('updateHead')
                        })
                    })
                }
            })
        }
    }

    export function getModels(fieldset, callback) {
        axios.all([
            axios.get(`/api/fieldsets/${fieldset}`)
        ]).then(axios.spread((fieldset) => {
            callback(null, fieldset)
        })).catch((error) => {
            callback(new Error('The requested fieldset could not be found'))
        })
    }
</script>