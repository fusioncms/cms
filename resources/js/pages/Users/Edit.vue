<template>
    <div class="user-page">
        <portal to="title">
            <page-title icon="user-alt">Edit User</page-title>
        </portal>

        <shared-form
            v-if="form"
            :loading="loading"
            :form="form"
            :roles="roles"
            :user="user"
            :submit="submit">
        </shared-form>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import SharedForm from './SharedForm'

    export default {
        auth() {
            return {
                permission: 'users.update',
                level: this.getAuthLevel(),
            }
        },

        head: {
            title() {
                return {
                    inner: this.user.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                user: {},
                roles: [],
                form: null,
                loading: false
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            getAuthLevel() {
                if (this.$user.id == this.user.id) return false

                if (this.user.role) return this.user.role.level

                return false
            },

            submit() {
                this.loading = true;
                this.form.patch(`/api/users/${this.user.id}`).then((response) => {
                    toast('User successfully updated', 'success')

                    this.$router.push('/users')
                }).catch((response) => {
                    toast(response.message, 'failed')
                    this.loading = false;
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getUserAndRoles(to.params.user, (error, user, roles, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/users')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.user = user
                        vm.roles = roles
                        vm.form = new Form(fields, true)

                        vm.$emit('updateHead')
                        vm.$emit('updateAuth')
                    })
                }
            })
        },
    }

    export function getUserAndRoles(userId, callback) {
        axios.all([
            axios.get('/api/roles'),
            axios.get('/api/users/' + userId),
        ])
        .then(axios.spread((roles, user) => {
            user  = user.data.data
            roles = roles.data.data

            callback(null, user, roles, {
                name: user.name,
                email: user.email,
                status: user.status,
                role: user.role.handle,
                password: '',
                password_confirmation: '',
                subscriptions: user.subscriptions,
            })
        }))
    }
</script>