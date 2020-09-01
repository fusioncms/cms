<template>
    <ui-modal v-model="open" class="directory-edit" name="directory-edit" title="Edit Directory" no-footer>
        <form @submit.prevent="updateDirectory" v-if="directory">
            <div class="p-4 bg-gray-800 text-center mb-4">
                <div class="py-8">
                    <fa-icon icon="folder" size="6x"></fa-icon>
                </div>
            </div>

            <ui-input label="Name" v-model="form.data.name"></ui-input>

            <div class="flex">
                <ui-button @click="deleteDirectory(directory)" type="button">Delete</ui-button>
                <div class="flex-grow"></div>
                <ui-button theme="primary" type="submit">Submit</ui-button>
            </div>
        </form>
    </ui-modal>
</template>

<script>
import Form from '../../services/Form'

export default {
    data() {
        return {
            open: false,
            directory: null,
            onChange: null,
            form: new Form({
                name: null,
            })
        }
    },

    mounted() {
        bus().$on('openEditDirectoryModal', ({directory, onChange}) => {
            this.open = true
            this.directory = directory
            this.onChange = onChange

            this.form.name = directory.name
        })
    },

    methods: {
        updateDirectory() {
            axios.patch(`/api/directories/${this.directory.id}`, this.form.data).then(() => {
                if (this.onChange) {
                    this.onChange()
                }

                toast('Directory updated')
            })
        },

        deleteDirectory() {
            axios.delete(`/api/directories/${this.directory.id}`).then(() => {
                if (this.onChange) {
                    this.onChange()
                }

                this.close()
            })
        },

        close() {
            this.open = false
            this.directory = null
            this.onChange = null
            this.form.reset()
        }
    }
}
</script>

<style scoped>

</style>