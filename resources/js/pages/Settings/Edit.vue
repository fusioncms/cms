<template>
    <div>
        <portal to="title">
            <app-title icon="cog">{{ group.name }} Settings</app-title>
        </portal>

        <shared-form v-if="form" :form="form" :group="group"></shared-form>
    </div>
</template>

<script>
    import Form from '../../services/Form'
    import SharedForm from './SharedForm.vue'

    export default {
        head: {
            title() {
                return {
                    inner: this.group.name + ' Settings' || 'Loading...'
                }
            }
        },

        data() {
            return {
                group: {},
                form: null
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.patch(`/api/settings/${this.group.handle}`)
                    .then((response) => {
                        toast('Settings saved successfully', 'success')

                        this.$router.go()
                    }).catch((response) => {
                        toast(response.response.data.message, 'failed')
                    })
            },
        },

        beforeRouteEnter(to, from, next) {
            getSettings(to.params.group, (error, group) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/settings')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.group  = group
                        vm.form   = new Form(group.settings)

                        vm.$emit('updateHead')
                    })
                }
            })
        },
    }

    export function getSettings(group, callback) {
        axios.get(`/api/settings/${group}`)
            .then((response) => {
                callback(null, response.data.data)
            }).catch((error) => {
                callback(new Error('The requested settings could not be found'))
            })
    }
</script>