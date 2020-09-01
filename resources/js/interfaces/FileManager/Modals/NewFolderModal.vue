<template>
    <ui-modal name="new-folder" title="Create New Folder">
        <form @submit.prevent="submit">
            <ui-input
                name="name"
                label="Name this folder"
                placeholder="Folder name"
                autocomplete="off"
                autofocus
                :has-error="form.errors.has('name')"
                :error-message="form.errors.get('name')"
                v-model="form.name">
            </ui-input>
        </form>

        <template v-slot:footer>
            <ui-button v-modal:new-folder>Close</ui-button>
            <ui-button theme="primary" @click="submit" class="mr-1">Save</ui-button>
        </template>
    </ui-modal>
</template>

<script>
    import Form from '../../../services/Form'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'new-folder-modal',

        watch: {
            currentDirectory(value) {
                this.form.parent_id = this.currentDirectory
            }
        },

        data() {
            return {
                form: new Form({
                    parent_id: 0,
                    name: '',
                })
            }
        },

        computed: {
            ...mapGetters({
                currentDirectory: 'filemanager/getCurrentDirectory',
            })
        },

        methods: {
            ...mapActions({
                fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
            }),

            submit() {
                this.form.post('/api/directories').then((response) => {
                    this.form.name = ""
                    this.fetchFilesAndDirectories()
                    this.$children[0].isActive = false

                    toast('A new directory was successfully created.', 'success')
                }).catch((error) => {
                    toast(error.response.data.message, 'danger')
                })
            },
        }
    }
</script>
