<template>
    <ui-fieldset
        :label="field.name"
        :help="field.help">
        <div class="row">
            <ui-input-group
                class="col md:w-1/3"
                label="Link Text"
                hide-label
                :name="field.handle + '_text'"
                placeholder="Link Text"
                v-model="data.text"
                @input="updateValue($event, 'text')">
            </ui-input-group>
            <ui-input-group
                class="col md:w-1/3"
                label="Link URL"
                hide-label
                :name="field.handle + '_link'"
                placeholder="Link URL"
                v-model="data.link"
                @input="updateValue($event, 'link')">
            </ui-input-group>
            <ui-select-group
                class="col md:w-1/3"
                label="Open Link"
                hide-label
                :name="field.handle + '_target'"
                autocomplete="off"
                v-model="data.target"
                @input="updateValue($event, 'target')"
                :options="[
                    {
                        label: 'Open in Same Window',
                        value: '_self',
                    },
                    {
                        label: 'Open in New Window',
                        value: '_blank',
                    }
                ]">
            </ui-select-group>
        </div>
    </ui-fieldset>
</template>

<script>
    export default {
        name: 'link-fieldtype',

        data() {
            let data = {}
            let value = this.value
            if (this.value) {
                data = {
                    text: value.text || '',
                    link: value.link || '',
                    target: value.target || '_self'
                }
            } else {
                data = {
                    text: '',
                    link: '',
                    target: '_self',
                }
            }

            return {
                data: data
            }
        },

        props: {
            field: {
                type: Object,
                required: true
            },

            value: {
                default: null
            },
        },

        methods: {
            updateValue(event, handle) {
                this.data[handle] = event
                this.$emit('input', this.data)
            },
        }
    }
</script>

