<template>
    <div>
        <portal to="title">
            <page-title icon="list">Edit Blueprint</page-title>
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
        auth() {
            return {
                permission: 'blueprints.update',
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
                id: null,
                resource: null,
                form: null
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.patch(`/api/blueprints/${this.resource.id}`)
                    .then(() => {
                        axios.post(`/api/blueprints/${this.resource.id}/sections`, { sections: this.form.sections })
                            .then(() => {
                                toast('Blueprint successfully updated', 'success')

                                this.$router.push('/blueprints')
                            }).catch((response) => {
                                toast(response.message, 'failed')
                            })
                    }).catch((response) => {
                        toast(response.response.data.message, 'failed')
                    })
            }
        },

        beforeRouteEnter(to, from, next) {
            getBlueprint(to.params.blueprint, (error, blueprint) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/blueprints')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.resource = blueprint

                        vm.form = new Form({
                            name: blueprint.name,
                            sections: blueprint.sections
                        }, true)

                        vm.$nextTick(() => {
                            vm.$emit('updateHead')
                        })
                    })
                }
            })
        }
    }

    export function getBlueprint(blueprint, callback) {
        axios.get('/api/blueprints/' + blueprint).then((response) => {
            callback(null, response.data.data)
        }).catch(function(error) {
            callback(new Error('The requested blueprint could not be found'))
        })
    }
</script>