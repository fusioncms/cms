<template>
    <div class="row">
        <ui-input-group
            class="col w-full sm:w-1/2"
            name="settings.placeholder"
            label="Placeholder"
            help="Text that will appear inside the input element's content area when empty."
            autocomplete="off"
            v-model="settings.placeholder"
            :has-error="errors.has('settings.placeholder')"
            :error-message="errors.get('settings.placeholder')">
        </ui-input-group>

        <ui-toggle
            class="col w-full sm:w-1/2"
            name="settings.time"
            label="Enable Time?"
            help="Should this also include time?"
            :has-error="errors.has('settings.time')"
            :error-message="errors.get('settings.time')"
            v-model="settings.time">
        </ui-toggle>
        
        <ui-input-group
            class="col w-full sm:w-1/2"
            name="settings.format"
            label="Display Format"
            help='<a href="https://flatpickr.js.org/formatting/" target="_blank">Flatpickr date format reference</a>'
            placeholder="Y-m-d"
            v-model="format"
            :has-error="errors.has('settings.format')"
            :error-message="errors.get('settings.format')">
        </ui-input-group>
    </div>
</template>

<script>
    import fieldtype from '@/mixins/fieldtype'

    export default {
        name: 'datetime-fieldtype-settings',

        mixins: [fieldtype],

        computed: {
            format: {
                get() {
                    let value  = _.trim(this.settings.format)
                    let tokens = /[H|h|G|i|S|s|K|:]/g

                    if (this.settings.time) {
                        if (! new RegExp(tokens).test(this.settings.format)) {
                            value = _.trim(this.settings.format) + ' h:iK'
                        }
                    } else {
                        value = this.settings.format.replace(tokens, '')
                    }

                    return value
                },

                set(value) {
                    this.settings.format = value
                }
            }
        },

        watch: {
            format: function (val) {
                this.settings.format = val;
            }
        }
    }
</script>