<template>
    <ui-field-group
        :name="field.handle"
        :fieldId="field.handle"
        :label="field.name"
        :help="field.help"
        :has-error="hasError(field.handle)"
        :error-message="errorMessage(field.handle)">

        <div class="input-group">
            <ui-input
                class="field-input field"
                :id="field.handle"
                :name="field.handle"
                :help="field.help"
                :aria-describedby="field.help"
                v-model="model">
            </ui-input>

            <ui-button icon :class="pickrClass" :style="`color: ${this.model};`">
                <fa-icon v-if="this.model == ''" :icon="['far', 'square']"></fa-icon>
                <fa-icon v-else :icon="['fas', 'square']"></fa-icon>
                <span class="sr-only">Choose an existing audio file</span>
            </ui-button>

            <ui-button icon @click="clear">
                <fa-icon :icon="['fas', 'times']" class="mr-1"></fa-icon>
                <span class="sr-only">Clear field</span>
            </ui-button>
        </div>
    </ui-field-group>
</template>

<script>
    import Pickr from '@simonwep/pickr'
    import FieldMixin from '@/mixins/fieldtypes/field'

    export default {
        name: 'color-picker-fieldtype',

        mixins: [FieldMixin],

        data() {
            return {
                pickr: null
            }
        },

        computed: {
            pickrClass() {
                return `${this.field.handle}-pickr`
            },
        },

        watch: {
            model(value) {
                if (this.pickr.setColor(value)) {
                    this.pickr.applyColor()
                }
            }
        },

        methods: {
            clear() {
                this.model = ''
            }
        },

        mounted() {
            this.pickr = Pickr.create({
                el: `.${this.pickrClass}`,
                theme: 'monolith',
                default: _.isNull(this.value) ? this.field.settings.default : this.value,
                useAsButton: true,
                swatches: [
                    '#000000',
                    '#FFFFFF',
                    
                    '#F7FAFC',
                    '#EDF2F7',
                    '#E2E8F0',
                    '#CBD5E0',
                    '#A0AEC0',
                    '#718096',
                    '#4A5568',
                    '#2D3748',
                    
                    '#F56565',
                    '#F98C12',
                    '#F6E05E',
                    '#BF7E32',
                    '#48BB78',
                    '#38B2AC',
                    '#4299E1',
                    '#667EEA',
                    '#9F7AEA',
                    '#ED64A6',
                ],
                comparison: true,
                components: {
                    opacity: (this.field.settings.transparency == '1'),
                    hue: true,
                }
            })

            .on('change', (color, instance) => {
                this.model = color.toHEXA().toString()
            })
        }
    }
</script>

