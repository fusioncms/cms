<template>
    <div class="input-group" ref="flatpickr">
        <ui-input class="field-input field" :name="name" :id="id" v-model="model" autocomplete="off" data-input></ui-input>

        <ui-button icon data-toggle>
            <fa-icon icon="calendar-alt"></fa-icon>
            <span class="sr-only">Launch date picker</span>
        </ui-button>

        <ui-button icon data-clear>
            <fa-icon icon="calendar-times"></fa-icon>
            <span class="sr-only">Clear date</span>
        </ui-button>
    </div>
</template>

<script>
    import Flatpickr from 'flatpickr'

    export default {
        name: 'ui-flatpickr',

        data() {
            return {
                instance: null,
            }
        },

        props: {
            name: {
                type: String,
                required: true,
            },
            id: {
                type: String,
                required: true,
            },
            value: {
                required: false,
                default: null,
            },
            config: {
                type: Object,
                default: () => ({
                    wrap: true,
                    defaultDate: null,
                })
            },
            withTime: {
                type: Boolean,
                default: false,
            },
        },

        computed: {
            model: {
                get() {
                    return this.value
                },

                set(value) {
                    this.$emit('input', value)
                }
            }
        },

        mounted() {
            if (this.instance) return

            let config = {
                ...this.config,
                enableTime: this.withTime,
            }

            this.instance = new Flatpickr(this.$refs['flatpickr'], config)
        }
    }
</script>
<style>
 @import '../../../../node_modules/flatpickr/dist/flatpickr.min.css';
</style>
