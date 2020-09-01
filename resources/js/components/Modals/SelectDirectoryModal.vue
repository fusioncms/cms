<template>
    <ui-modal v-model="open" title="Move to directory" name="select directory" no-footer>
        <ui-treeview
                v-model="selectedDirectory"
                :items="directories"
        ></ui-treeview>

        <div class="text-right">
            <ui-button @click="close">Cancel</ui-button>
            <ui-button @click="select" theme="primary">Move</ui-button>
        </div>
    </ui-modal>
</template>

<script>
export default {
    data() {
        return {
            open: false,
            callback: null,
            selectedDirectory: null,
            directories: [],
        }
    },

    mounted() {
        bus().$on('openSelectDirectoryModal', (callback) => {
            this.open = true
            this.callback = callback

            axios.get('/api/directories?recursive=true').then(({data}) => {
                this.directories = data.data
            })
        })
    },

    methods: {
        select() {
            this.callback(this.selectedDirectory)

            this.close()
        },

        close() {
            this.open = false
            this.callback = null
            this.selectedDirectory = null
        },
    },
}
</script>

<style scoped>

</style>
