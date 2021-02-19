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
                fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
            }),
        },

        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.setDisk(to.params.disk)
                vm.fetchFilesAndDirectories()
            })
        },
    }
</script>