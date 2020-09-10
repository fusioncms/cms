<template>
    <ui-modal
        key="updater_modal"
        name="updater"
        :title="`Update to ${version.title}`"
        v-model="!! this.version">

        <p>Are you sure you want to update to version {{ version.title }}?</p>
        
        <template slot="footer">
            <p-button @click="confirm" type="button" class="button button--primary">Confirm</p-button>
            <p-button @click="close" type="button" class="mr-3">Cancel</p-button>
        </template>
    </ui-modal>
</template>

<script>
    export default {
        name: 'updater-modal',

        props: {
            value: {
                type: [Object,Boolean],
                required: true,
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
                axios.post('/api/updater')
                    .then((response) => {
                        console.log(response)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },

            close() {
                this.version = false
            }
        }
    }
</script>
