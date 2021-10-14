<template>
    <div>
        <portal to="title">
	    <page-title icon="anchor">Edit Link</page-title>
	</portal>

        <shared-form
            :loading="loading"
            :form="form"
            :submit="submit"
            :navigation="navigation"
            :link="link"
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
                link: {},
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
                this.form.patch('/api/navigation/' + this.navigation.id + '/links/' + this.link.id).then((response) => {
                    toast('Link saved successfully', 'success')

                    this.$router.push('/navigation/' + this.navigation.id + '/links')
                }).catch((response) => {
                    toast(response.message, 'failed')
                    this.loading = false;
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getLink(to.params.navigation, to.params.link, (error, link, navigation, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/navigation')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.navigation = navigation
                        vm.link = link
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

    export function getLink(navigation, id, callback) {
        axios.all([
            axios.get('/api/navigation/' + navigation + '/links/' + id),
            axios.get('/api/navigation/' + navigation),
        ]).then(axios.spread(function (link, navigation) {
            link = link.data.data
            navigation = navigation.data.data

            let fields = {
                name: link.name,
                url: link.url,
                new_window: Number(link.new_window).toString(),
                parent_id: link.parent_id,
                order: link.order,
                status: link.status,
            }

            _.forEach(navigation.blueprint.sections, function(section) {
                _.forEach(section.fields, function(field) {
                    fields[field.handle] = link[field.handle]
                })
            })

            callback(null, link, navigation, fields)
        }))
    }
</script>