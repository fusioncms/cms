<template>
    <ui-field-group
        :name="field.handle"
        :fieldId="`${field.handle}-field`"
        :label="field.name"
        :required="field.required"
        :help="field.help"
        :hasError="hasError(field.handle)"
            :errorMessage="errorMessage(field.handle)">

        <div class="input-group" :id="`flatpickr_${field.handle}`">
            <ui-input
                data-input
                class="field-input field"
                :name="field.handle"
                :help="field.help"
                :placeholder="field.settings.placeholder"
                :aria-describedby="field.help"
                :hasError="hasError(field.handle)"
                v-model="model">
            </ui-input>

            <ui-button icon data-toggle>
                <fa-icon icon="calendar-alt"></fa-icon>
                <span class="sr-only">Launch date picker</span>
            </ui-button>

            <ui-button icon data-clear>
                <fa-icon icon="calendar-times"></fa-icon>
                <span class="sr-only">Clear date</span>
            </ui-button>
        </div>
    </ui-field-group>
</template>

<script>
    import flatpickr from 'flatpickr'
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'datetime-fieldtype',

        mixins: [FieldMixin],
        
        data() {
            return {
                inst: null
            }
        },

        computed: {
            model: {
                get() {
                    return this.value
                },

                set(value) {
                    this.$emit('input', value == '' ? null : value)
                }
            }
        },

        mounted() {
            this.inst = flatpickr(this.$el.querySelector(`#flatpickr_${this.field.handle}`), {
                altFormat: this.field.settings.format,
                altInput: true,
                dateFormat: 'Y-m-d H:i:S',
                defaultDate: this.model,
                enableTime: (this.field.settings.time == 1),
                wrap: true,
                onChange: (selected, value, inst) => this.model = value
            })
        }
    }
</script>