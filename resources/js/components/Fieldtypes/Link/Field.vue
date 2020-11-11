<template>
    <ui-field-group
        :name="field.handle"
        :fieldId="`${field.handle}-field`"
        :label="field.name"
        :help="field.help">

        <div class="row">
            <div class="col w-full md:w-1/3">
                <ui-input-group
                    :name="`${field.handle}.text`"
                    autocomplete="off"
                    hide-label
                    placeholder="Link Text"
                    v-model="model.text"
                    :hasError="hasError(`${field.handle}.text`)"
                    :errorMessage="errorMessage(`${field.handle}.text`)">
                </ui-input-group>
            </div>

            <div class="col w-full md:w-1/3">
                <ui-input-group
                    :name="`${field.handle}.link`"
                    autocomplete="off"
                    hide-label
                    placeholder="Link URL"
                    v-model="model.link"
                    :hasError="hasError(`${field.handle}.link`)"
                    :errorMessage="errorMessage(`${field.handle}.link`)">
                </ui-input-group>
            </div>

            <div class="col w-full md:w-1/3">
                <ui-select-group
                    :name="`${field.handle}.target`"
                    autocomplete="off"
                    hide-label
                    :options="[
                        {
                            label: 'Open in Same Window',
                            value: '_self',
                        },
                        {
                            label: 'Open in New Window',
                            value: '_blank',
                        }
                    ]"
                    v-model="model.target"
                    :hasError="hasError(`${field.handle}.target`)"
                    :errorMessage="errorMessage(`${field.handle}.target`)">
                </ui-select-group>
            </div>
        </div>
        
    </ui-field-group>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'link-fieldtype',

        mixins: [FieldMixin],

        // computed: {
        //     model: {
        //         get() {
        //             return this.value || {}
        //         },

        //         set(value) {
        //             this.$emit('input', value)
        //         }
        //     }
        // },

        created() {
            if (_.isEmpty(this.value)) {
                this.model = {
                    text: '',
                    link: '',
                    target: '_self',
                }
            }
        }
    }
</script>

