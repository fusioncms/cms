<template>
    <div>
        <portal to="title">
			<app-title icon="anchor">Create Menu</app-title>
		</portal>

        <shared-form :form="form"></shared-form>
    </div>
</template>

<script>
    import Form from '../../forms/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: 'Create a Menu'
                }
            }
        },

        data() {
            return {
                sections: [],
                form: new Form({
                    name: '',
                    handle: '',
                    description: '',
                    fieldset: {},
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        watch: {
            sections: {
                deep: true,
                handler(value) {
                    if (! this.hasChanges) {
                        this.form.onFirstChange()
                    }
                }
            }
        },

        methods: {
            submit() {
                this.form.post('/api/menus')
                    .then((response) => {
                        axios.post(`/api/fieldsets/${response.data.fieldset.id}/sections`, { sections: this.sections })
                            .then((response) => {
                                toast('Menu successfully saved', 'success')
                                
                                this.$router.push('/menus')
                            }).catch((response) => {
                                toast(response.message, 'failed')
                            })
                    }).catch((response) => {
                        toast(response.message, 'failed')
                    })
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.form.resetChangeListener()
            })
        }
    }
</script>