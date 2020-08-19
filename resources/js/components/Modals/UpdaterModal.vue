<template>
    <p-modal
        key="updater_modal"
        name="updater"
        :title="`Update to ${version.title}`"
        v-model="!! this.version">

        <p>Are you sure you want to switch to version {{ version.title }}?</p>
        
        <template slot="footer">
            <p-button @click="confirm" type="button" class="button button--primary">Confirm</p-button>
            <p-button @click="close" type="button" class="mr-3">Cancel</p-button>
        </template>
    </p-modal>
</template>

<script>
    export default {
        name: 'updater-modal',

        props: {
            value: {
                type: [Object,Boolean],
                required: true
            }
        },

        computed: {
            version: {
                get() {
                    return this.value
                },

                set(value) {
                    this.$emit('input', value)
                }
            }
        },

        methods: {
            confirm() {
                //
                
                this.close()
            },

            close() {
                this.version = false
            }
        }
    }
</script>
