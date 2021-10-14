<template>
    <div class="navigation-page">
        <portal to="title">
	    <page-title icon="anchor">Edit Navigation</page-title>
	</portal>

        <shared-form v-if="form" :loading="loading" :form="form"></shared-form>
    </div>
</template>

<script>
    import Form       from '@/services/Form'
    import SharedForm from '@/pages/Navigation/SharedForm'

    export default {
        auth() {
            return {
                permission: 'navigation.update',
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
                navigation: null,
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
                this.form.patch(`/api/navigation/${this.navigation.id}`)
                    .then(() => {
                        axios.post(`/api/blueprints/${this.navigation.blueprint.id}/sections`, { sections: this.form.sections })
                            .then(() => {
                                toast('Navigation successfully saved', 'success')

                                this.$router.push('/navigation')
                            }).catch((response) => {
                                toast(response.message, 'failed')
                                this.loading = false;
                            })
                    }).catch((response) => {
                        toast(response.message, 'failed')
                        this.loading = false;
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
                        vm.navigation = navigation
                        vm.form = new Form({
                            name:        navigation.name,
                            handle:      navigation.handle,
                            description: navigation.description,
                            sections:    navigation.blueprint.sections,
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