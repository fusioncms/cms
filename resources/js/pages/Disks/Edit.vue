<template>
    <div class="disk-page">
        <portal to="title">
	    <page-title icon="hdd">Edit Disk</page-title>
	</portal>

        <shared-form v-if="form" :loading="loading" :form="form"></shared-form>
    </div>
</template>

<script>
    import Form       from '@/services/Form'
    import SharedForm from '@/pages/Disks/SharedForm'

    export default {
        auth() {
            return {
                permission: 'disks.update',
            }
        },

        head: {
            title() {
                return {
                    inner: _.has(this.form, 'name') ? this.form.name : 'Loading...'
                }
            }
        },

        data() {
            return {
                disk: null,
                form: null,
                loading: false
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            isLocked(handle) {
                return _.includes(['public','local'], handle)
            },

            submit() {
                this.loading = true;
                this.form.patch(`/api/disks/${this.disk.id}`)
                    .then(() => {
                        toast('Disk successfully saved', 'success')

                        this.$router.push('/disks')
                    }).catch((response) => {
                        toast(response.message, 'failed')
                        this.loading = false;
                    })
            }
        },

        beforeRouteEnter(to, from, next) {
            getModel(to.params.disk, (error, disk) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/disks')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        if (vm.isLocked(disk.handle)) {
                            vm.$router.push('/disks')
                        } else {
                            vm.disk = disk
                            vm.form = new Form({
                                name:           disk.name,
                                handle:         disk.handle,
                                driver:         disk.driver,
                                configurations: disk.configurations,
                            }, true)

                            vm.$nextTick(() => {
                                vm.$emit('updateHead')
                            })
                        }
                    })
                }
            })
        },
    }

    export function getModel(disk, callback) {
        axios.get(`/api/disks/${disk}`).then((response) => {
            callback(null, response.data.data)
        }).catch((error) => {
            callback(new Error('The requested disk could not be found'))
        })
    }
</script>