<template>
    <div class="user-page">
        <portal to="title">
            <page-title icon="users">User - {{ user.name }}</page-title>
        </portal>

        <portal to="actions">
            <ui-button key="edit-user-btn" :to="{ name: 'users.edit', params: {user: user.id} }" variant="secondary">Edit User</ui-button>
            <ui-button key="delete-user-btn" v-if="currentUser.id != user.id" v-modal:delete-user variant="danger">Delete User</ui-button>
        </portal>

        <portal to="modals">
            <ui-modal v-if="currentUser.id != user.id" name="delete-user" title="Delete User">
                <p>Are you sure you want to permenantly delete this user?</p>

                <template slot="footer">
                    <ui-button v-modal:delete-user @click="destroy(user.id)" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-user variant="secondary">Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                currentUser: 'auth/getUser'
            })
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
                roles: []
            }
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

                        vm.$emit('updateHead')
                    })
                }
            })
        },

        methods: {
            destroy(id) {
                axios.delete('/api/users/' + id).then((response) => {
                    toast('User successfully deleted.', 'success')

                    this.$router.push('/users')
                })
            }
        }
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
                role: user.roles[0].name,
                password: '',
                password_confirmation: '',
            })
        }))
    }
</script>

