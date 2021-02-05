<template>
    <div class="disk-page">
        <portal to="title">
			<page-title icon="hdd">Create Disk</page-title>
		</portal>

        <shared-form :form="form"></shared-form>
    </div>
</template>

<script>
    import Form       from '@/services/Form'
    import SharedForm from '@/pages/Disks/SharedForm'

    export default {
        auth() {
            return {
                permission: 'disks.create',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Create Disk'
                }
            }
        },

        data() {
            return {
                form: new Form({
                    name: '',
                    handle: '',
                    driver: 'local',
                    configurations: {}
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.post('/api/disks')
                    .then((response) => {
                        toast('Disk successfully saved', 'success')

                        this.$router.push('/disks')
                    }).catch((response) => {
                        toast(response.message, 'failed')
                    })
            }
        }
    }
</script>