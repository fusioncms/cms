<template>
    <div class="matrix-page">
        <portal to="title">
            <page-title icon="code">Edit Script</page-title>
        </portal>

        <shared-form
            v-if="form"
            :form="form"
            :resource="resource">
        </shared-form>
    </div>
</template>

<script>
    import Form       from '@/services/Form'
    import SharedForm from '@/pages/Scripts/SharedForm'

    export default {
        auth() {
            return {
                permission: 'scripts.update',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Edit Script'
                }
            }
        },

        data() {
            return {
                resource: {},
                form: null
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.patch(`/api/scripts/${this.resource.id}`).then((response) => {
                    toast('Script successfully updated', 'success')

                    this.$router.push('/scripts')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getModels(to.params.script, (error, script) => {
                if (error) {
                    next((vm) => {
                        toast(error.toString(), 'danger')

                        vm.$router.push('/scripts')
                    })
                } else {
                    next((vm) => {
                        vm.resource  = script.data.data

                        vm.form = new Form({
                            name: script.data.data.name,
                            description: script.data.data.description,
                            code: script.data.data.code,
                            location: script.data.data.location,
                            trigger_on: script.data.data.trigger_on,
                            trigger_where: script.data.data.trigger_where,
                            type: script.data.data.type,
                            order: script.data.data.order,
                            status: script.data.data.status,
                        }, true)
                    })
                }
            })
        }
    }

    export function getModels(script, callback) {
        axios.all([
            axios.get(`/api/scripts/${script}`),
        ]).then(axios.spread((script) => {
            callback(null, script)
        })).catch((error) => {
            callback(new Error('The requested script could not be found'))
        })
    }
</script>