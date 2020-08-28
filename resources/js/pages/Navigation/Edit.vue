<template>
    <div>
        <portal to="title">
			<page-title icon="anchor">Edit Navigation</page-title>
		</portal>

        <shared-form v-if="form" :form="form"></shared-form>
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
                form: null
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.patch(`/api/navigation/${this.id}`)
                    .then(() => {
                        axios.post(`/api/fieldsets/${this.form.fieldset.id}/sections`, { sections: this.form.sections })
                            .then(() => {
                                toast('Navigation successfully saved', 'success')

                                this.$router.push('/navigation')
                            }).catch((response) => {
                                toast(response.message, 'failed')
                            })
                    }).catch((response) => {
                        toast(response.message, 'failed')
                    })
            }
        },

        beforeRouteEnter(to, from, next) {
            getNavigation(to.params.navigation, (error, navigation) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/navigation')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.id   = navigation.id
                        vm.form = new Form({
                            name:        navigation.name,
                            handle:      navigation.handle,
                            description: navigation.description,
                            sections:    navigation.fieldset.sections,
                        }, true)

                        vm.$nextTick(() => {
                            vm.$emit('updateHead')
                        })
                    })
                }
            })
        },
    }

    export function getNavigation(navigation, callback) {
        axios.get(`/api/navigation/${navigation}`).then((response) => {
            callback(null, response.data.data)
        }).catch((error) => {
            callback(new Error('The requested navigation could not be found'))
        })
    }
</script>