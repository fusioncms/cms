<template>
    <div>
        <portal to="title">
	    <page-title icon="anchor">Create Link</page-title>
	</portal>

        <shared-form
            :loading="loading"
            :form="form"
            :submit="submit"
            :navigation="navigation"
            :links="links">
        </shared-form>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import SharedForm from './SharedForm'

    export default {
        auth() {
            return {
                permission: 'links.update',
            }
        },

        components: {
            'shared-form': SharedForm
        },

        data() {
            return {
                navigation: {},
                links: [],
                form: new Form({
                    name: '',
                    url: '',
                    new_window: false,
                    parent_id: 0,
                    order: 0,
                    status: false,
                }, true),
                loading: false
            }
        },

        methods: {
            submit() {
                this.loading = true;
                this.form.post('/api/navigation/' + this.navigation.id + '/links').then((response) => {
                    toast('Link saved successfully', 'success')

                    this.$router.push('/navigation/' + this.navigation.id + '/links')
                }).catch((response) => {
                    toast(response.message, 'failed')
                    this.loading = false;
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getNavigation(to.params.navigation, (error, navigation, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/navigation')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.navigation = navigation
                        vm.form = new Form(fields, true)

                        vm.links = _.map(navigation.links, function(parent) {
                            return {
                                'label': parent.name,
                                'value': parent.id
                            }
                        })

                        vm.links.unshift({
                            'label': 'None',
                            'value': 0
                        })

                        vm.$emit('updateHead')
                    })
                }
            })
        },
    }

    export function getNavigation(navigation, callback) {
        axios.all([
            axios.get('/api/navigation/' + navigation),
        ]).then(axios.spread(function (navigation) {
            navigation = navigation.data.data

            let fields = {
                name: '',
                url: '',
                new_window: 0,
                parent_id: 0,
                order: null,
                status: 1,
            }

            _.forEach(navigation.blueprint.sections, function(section) {
                _.forEach(section.fields, function(field) {
                    fields[field.handle] = field.default
                })
            })

            callback(null, navigation, fields)
        }))
    }
</script>