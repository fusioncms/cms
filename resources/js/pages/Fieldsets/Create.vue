<template>
    <div class="fieldset-page">
        <portal to="title">
            <page-title icon="layer-group">Create Fieldset</page-title>
        </portal>

        <shared-form :loading="loading" :form="form" :submit="submit"></shared-form>
    </div>
</template>

<script>
    import Form       from '@/services/Form'
    import SharedForm from '@/pages/Fieldsets/SharedForm'

    export default {
        auth() {
            return {
                permission: 'fieldsets.create',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Create a Fieldset'
                }
            }
        },

        data() {
            return {
                form: new Form({
                    name: '',
                    handle: '',
                    status: '1',
                    fields: [],
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
                this.form.post('/api/fieldsets').then((response) => {
                    this.$store.dispatch('navigation/fetchAdminNavigation')

                    toast('Fieldset successfully created', 'success')

                    this.$router.push('/fieldsets')
                    this.loading = false;
                }).catch((response) => {
                    toast(response.message, 'failed')
                    this.loading = false;
                })
            }
        }
    }
</script>