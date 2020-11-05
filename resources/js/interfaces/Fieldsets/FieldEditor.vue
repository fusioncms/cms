<template>
    <ui-modal name="edit-field" title="Edit Field" noCloseButton noEscClose extra-large v-model="modalOpen">
        <form-container v-if="form">
            <div class="row mb-6">
                <div class="col w-1/2">
                    <ui-input-group
                        name="name"
                        label="Name"
                        help="What this field will be called."
                        autocomplete="off"
                        autofocus
                        required
                        :has-error="form.errors.has('name')"
                        :error-message="form.errors.get('name')"
                        v-model="form.name">
                    </ui-input-group>
                </div>

                <div class="col w-1/2">
                    <ui-slug-group
                        name="handle"
                        label="Handle"
                        help="A developer-friendly variant of the field's name."
                        autocomplete="off"
                        required
                        delimiter="_"
                        :force-watch="value.prototype"
                        :watch="form.name"
                        :has-error="form.errors.has('handle')"
                        :error-message="form.errors.get('handle')"
                        v-model="form.handle">
                    </ui-slug-group>
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

                <ui-field-group
                    name="validation"
                    fieldId="field-validation"
                    label="Validation Rules">
                    
                    <div class="row">
                        <ui-input-group
                            class="col md:w-1/2"
                            v-for="(rule, key) in form.validation"
                            :key="key"
                            :name="`validation.${key}`"
                            :placeholder="key"
                            hide-label
                            monospaced
                            v-model="form.validation[key]">
                        </ui-input-group>
                    </div>
                </ui-field-group>

                <hr>

                <component
                    :is="form.type.id + '-fieldtype-settings'"
                    v-model="form">
                </component>
            </template>
        </form-container>

        <template slot="footer">
            <ui-button variant="primary" @click="submit">Save</ui-button>
            <ui-button variant="secondary" class="mr-2" @click="close">Close</ui-button>
        </template>
    </ui-modal>
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