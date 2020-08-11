<template>
    <div>
        <portal to="title">
            <page-title icon="user-shield">Create Role</page-title>
        </portal>

        <shared-form :form="form" :submit="submit"></shared-form>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import SharedForm from './SharedForm'

    export default {
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
                    label: '',
                    description: '',
                    permissions: []
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.post('/api/roles').then((response) => {
                    toast('Role successfully created', 'success')

                    this.$router.push('/roles')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        mounted() {
            this.$nextTick(function(){
                this.form.resetChangeListener()
            })
        }
    }
</script>