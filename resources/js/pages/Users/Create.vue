<template>
    <div class="user-page">
        <portal to="title">
            <page-title icon="user-alt">Create User</page-title>
        </portal>

        <shared-form :loading="loading" :form="form" :roles="roles" :submit="submit"></shared-form>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import SharedForm from './SharedForm'

    export default {
        auth() {
            return {
                permission: 'users.create',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Create a User'
                }
            }
        },

        data() {
            return {
                roles: [],
                form: new Form({
                    name: '',
                    email: '',
                    role: "user",
                    password: '',
                    password_confirmation: '',
                    email_verified_at: this.$moment().format('X'),
                    subscriptions: [],
                    status: 1,
                }, true),
                loading: false
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.loading = true;
                this.form.post('/api/users').then((response) => {
                    toast('User successfully created', 'success')

                    this.$router.push('/users')
                }).catch((response) => {
                    toast(response.message, 'failed')
                    this.loading = false;
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getRoles((error, roles) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/users')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.roles = roles

                        vm.$emit('updateHead')
                    })
                }
            })
        },
    }

    export function getRoles(callback) {
        axios.get('/api/roles').then((response) => {
            callback(null, response.data.data)
        }).catch(function(error) {
            callback(new Error('Roles could not be found'))
        })
    }
</script>