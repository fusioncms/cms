<template>
    <div>
        <ui-select
            :name="field.handle"
            :label="field.name"
            :help="field.help"
            :value="value"
            @input="$emit('input', $event)"
            :options="options"
            :multiple="multiple"
            :showControls="showControls"
            :filterable="filterable"
        ></ui-select>
    </div>
</template>

<script>
    export default {
        name: 'select-fieldtype',

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: null,
            },
        },

        computed: {
            options() {
                return this.field.settings.options
            },

            filterable() {
                return this.field.settings.filterable == '1' ? true : false
            },

            multiple() {
                return this.field.settings.multiple == '1' ? true : false
            },

            showControls() {
                return this.field.settings.showControls == '1' ? true : false
            },
        },

        created() {
            let index = _.findIndex(this.options, function(option) {
                return option.checked == true
            })

            if (index !== -1 && ! this.value) {
                this.$emit('input', this.options[index].value)
            }
        }
    }
</script>

