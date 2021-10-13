<template>
    <div class="roles-page">
        <portal to="title">
            <page-title icon="user-shield">Create Role</page-title>
        </portal>

        <shared-form :loading="loading" :form="form" :submit="submit"></shared-form>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import SharedForm from './SharedForm'

    export default {
        auth() {
            return {
                permission: 'roles.create',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Create a Role'
                }
            }
        },

        data() {
            return {
                form: new Form({
                    name: '',
                    description: '',
                    level: null,
                    permissions: []
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
                this.form.post('/api/roles').then((response) => {
                    toast('Role successfully created', 'success')

                    this.$router.push('/roles')
                }).catch((response) => {
                    toast(response.message, 'failed')
                    this.loading = false;
                })
            },
        }
    }
</script>