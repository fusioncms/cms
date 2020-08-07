<template>
    <p-modal name="edit-field" title="Edit Field" noCloseButton noEscClose extra-large v-model="modalOpen">
        <form-container v-if="form">
            <div class="row mb-6">
                <div class="col w-1/2">
                    <p-input
                        name="name"
                        label="Name"
                        help="What this field will be called."
                        autocomplete="off"
                        autofocus
                        required
                        :has-error="form.errors.has('name')"
                        :error-message="form.errors.get('name')"
                        v-model="form.name">
                    </p-input>
                </div>

                <div class="col w-1/2">
                    <p-slug
                        name="handle"
                        label="Handle"
                        help="A developer-friendly variant of the fieldset's name."
                        autocomplete="off"
                        required
                        delimiter="_"
                        :watch="form.name"
                        :has-error="form.errors.has('handle')"
                        :error-message="form.errors.get('handle')"
                        v-model="form.handle">
                    </p-slug>
                </div>
            </div>

            <template v-if="form.type.id == 'replicator'">
                <hr>

                <component
                    is="replicator-fieldtype-settings"
                    v-model="form">
                </component>
            </template>

            <template v-else>
                <div class="row mb-6">
                    <div class="col w-full">
                        <redactor name="field-help" label="Help Instructions" v-model="form.help"></redactor>
                    </div>
                </div>

                <div class="row">
                    <div class="col w-full">
                        <p-input name="validation" label="Validation Rules" v-model="form.validation" monospaced></p-input>
                    </div>
                </div>

                <hr>

                <component
                    :is="form.type.id + '-fieldtype-settings'"
                    v-model="form">
                </component>
            </template>
        </form-container>

        <template slot="footer">
            <p-button theme="button--primary" @click="submit">Save</p-button>
            <p-button class="button--secondary mr-2" @click="close">Close</p-button>
        </template>
    </p-modal>
</template>

<script>
    import Form from '../../services/Form'

    export default {
        name: 'field-editor',

        data() {
            return {
                form: false,
                modalOpen: false
            }
        },

        props: {
            value: {
                type: [Boolean,Object],
                required: true
            }
        },

        watch: {
            value(value) {
                this.modalOpen = !! value
                this.form      = value ? new Form(_.cloneDeep(value)) : false
            }
        },

        methods: {
            submit() {
                this.form.post('/api/fields/validate')
                    .then((response) => this.$emit('save', this.value.handle, this.form.data()))
                    .catch((error)   => {})
            },

            close() {
                this.modalOpen = false
                this.$emit('close')
            }
        }
    }
</script>