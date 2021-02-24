<template>
    <ui-modal name="delete" title="Delete permanently?">
        <p>This file will be permanently deleted. <strong>Be advised this action can not be undone.</strong></p>

        <p>Any existing links to this file (if not removed) may result in errors.</p>

        <template v-slot:footer>
            <ui-button v-modal:delete>Cancel</ui-button>
            <ui-button variant="danger" @click="submit" class="mr-1" v-modal:delete>Delete</ui-button>
        </template>
    </ui-modal>
</template>

<script>
    export default {
        name: 'delete-file-modal',

        props: {
            disk: {
                required: true,
            },

            file: {
                required: true,
            },
        },

        methods: {
            submit() {
                let vm = this

                axios.delete(`/api/files/${this.disk.id}/${this.file.id}`).then(() => {
                    toast(vm.file.name + ' was successfully deleted.', 'success')

                    vm.$router.push({name: 'file-manager.index'})
                })
            },
        }
    }
</script>
