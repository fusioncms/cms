<template>
    <div>
        <portal to="title">
			<page-title icon="anchor">Edit Node</page-title>
		</portal>

        <shared-form :form="form" :submit="submit" :navigation="navigation" :node="node" :nodes="nodes"></shared-form>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: this.node.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                navigation: {},
                node: {},
                nodes: [],
                form: new Form({
                    name: '',
                    url: '',
                    new_window: false,
                    parent_id: 0,
                    status: false,
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.patch('/api/navigation/' + this.navigation.id + '/nodes/' + this.node.id).then((response) => {
                    toast('Node saved successfully', 'success')

                    this.$router.push('/navigation/' + this.navigation.id + '/nodes')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getNode(to.params.navigation, to.params.node, (error, node, navigation, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/navigation')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.navigation = navigation
                        vm.node = node
                        vm.form = new Form(fields, true)

                        vm.nodes = _.map(navigation.nodes, function(parent) {
                            return {
                                'label': parent.name,
                                'value': parent.id
                            }
                        })

                        vm.nodes.unshift({
                            'label': 'None',
                            'value': 0
                        })

                        vm.$emit('updateHead')
                    })
                }
            })
        },
    }

    export function getNode(navigation, id, callback) {
        axios.all([
            axios.get('/api/navigation/' + navigation + '/nodes/' + id),
            axios.get('/api/navigation/' + navigation),
        ]).then(axios.spread(function (node, navigation) {
            node = node.data.data
            navigation = navigation.data.data

            let fields = {
                name: node.name,
                url: node.url,
                new_window: node.new_window,
                parent_id: node.parent_id,
                status: node.status,
            }

            if (navigation.fieldset) {
                _.forEach(navigation.fieldset.sections, function(section) {
                    _.forEach(section.fields, function(field) {
                        fields[field.handle] = node[field.handle]
                    })
                })
            }

            callback(null, node, navigation, fields)
        }))
    }
</script>