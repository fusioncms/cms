<template>
    <ui-modal name="confirm" title="Changes not saved" key="confirm_modal" v-model="modalVisible">
        <p>Are you sure you want to leave this page? Any unsaved changes will be discarded.</p>
        <template slot="footer">
            <ui-button @click="closeModal" variant="primary">Cancel and Stay</ui-button>
            <ui-button @click="runCallback" variant="secondary" class="mr-3">Leave and Discard Changes</ui-button>
        </template>
    </ui-modal>
</template>

<script>
    import store from '../../store'
    export default {
        name: 'confirm-modal',
        computed: {
            modalVisible: {
                get() {
                    return store.state.form.confirmModalVisible
                },
                set(value) {
                    store.commit('form/setConfirmModalVisible', value)
                }
            }
        },

        methods: {
            closeModal() {
                this.modalVisible = false
            },

            runCallback() {
                store.state.form.confirmModalCallback()
                this.closeModal()
            }
        }
    }
</script>
