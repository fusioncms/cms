<template>
    <div>
        <portal to="title">
			<page-title icon="code">Create Script</page-title>
		</portal>

        <shared-form :form="form"></shared-form>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import SharedForm from './SharedForm'

    export default {
        auth() {
            return {
                permission: 'scripts.create',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Create a Script'
                }
            }
        },

        data() {
            return {
                form: new Form({
                    name: '',
                    description: '',
                    code: '',
                    location: 'head',
                    trigger_on: 'all',
                    trigger_where: '',
                    type: 'user',
                    order: 0,
                    status: true,
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.post('/api/scripts')
                    .then((response) => {
                        toast('Script successfully saved', 'success')

                        this.$router.push('/scripts')
                    }).catch((response) => {
                        toast(response.message, 'failed')
                    })
            }
        },
    }
</script>