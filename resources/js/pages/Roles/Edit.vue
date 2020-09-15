<template>
    <div>
        <portal to="title">
            <page-title icon="user-shield">Edit Role</page-title>
        </portal>

        <shared-form :form="form" :role="role" :submit="submit"></shared-form>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: this.role.label || 'Loading...'
                }
            }
        },

        data() {
            return {
                role: {},
                form: new Form,
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.patch(`/api/roles/${this.role.id}`).then((response) => {
                    toast('Role successfully updated', 'success')

                    this.$router.push('/roles')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getRole(to.params.role, (error, role, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/roles')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.role = role
                        vm.form = new Form(fields, true)

                        vm.$emit('updateHead')
                    })
                }
            })
        },
    }

    export function getRole(id, callback) {
        axios.get('/api/roles/' + id).then((response) => {
            let role = response.data.data
            let fields = {
                label: role.label,
                description: role.description,
                permissions: role.permissions,
            }

            callback(null, role, fields)
        }).catch(function(error) {
            callback(new Error('The requested role could not be found'))
        })
    }
</script>