<template>
    <div>
        <portal to="title">
            <page-title icon="images">File Manager</page-title>
        </portal>

        <file-manager></file-manager>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        auth() {
            return {
                permission: 'files.viewAny',
            }
        },

        head: {
            title() {
                return {
                    inner: 'File Manager'
                }
            }
        },

        methods: {
            ...mapActions({
                fetchDisk: 'filemanager/fetchDisk',
            }),
        },

        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.fetchDisk(to.params.disk)
            })
        },

        beforeRouteUpdate (to, from, next) {
            this.fetchDisk(to.params.disk)
            next()
        }
    }
</script>