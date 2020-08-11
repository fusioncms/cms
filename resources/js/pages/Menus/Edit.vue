<template>
    <div>
        <portal to="title">
			<page-title icon="anchor">Edit Menu</page-title>
		</portal>

        <shared-form v-if="form" :form="form"></shared-form>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: _.has(this.form, 'name') ? this.form.name : 'Loading...'
                }
            }
        },

        data() {
            return {
                id: null,
                sections: [],
                form: null
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
                this.form.patch(`/api/menus/${this.id}`)
                    .then(() => {
                        axios.post(`/api/fieldsets/${this.form.fieldset.id}/sections`, { sections: this.sections })
                            .then(() => {
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

        beforeRouteEnter(to, from, next) {
            getMenu(to.params.menu, (error, menu) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/menus')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.id       = menu.id
                        vm.sections = menu.fieldset.sections

                        vm.form = new Form({
                            name:        menu.name,
                            handle:      menu.handle,
                            description: menu.description,
                            fieldset:    menu.fieldset
                        }, true)

                        vm.$nextTick(() => {
                            vm.$emit('updateHead')
                            vm.form.resetChangeListener()
                        })
                    })
                }
            })
        },
    }

    export function getMenu(menu, callback) {
        axios.get(`/api/menus/${menu}`).then((response) => {
            callback(null, response.data.data)
        }).catch((error) => {
            callback(new Error('The requested menu could not be found'))
        })
    }
</script>