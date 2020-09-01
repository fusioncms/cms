<template>
    <div class="field-password">
        <input
            class="field field--input"
            :class="{'font-mono': monospaced, 'field--danger': hasError, 'field--success': hasSuccess}"
            :id="formattedId"
            :name="name"
            :type="type"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :value="value"
            :autocomplete="autocomplete"
            :autofocus="autofocus"
            :required="required"
            :aria-required="required" 
            :aria-describedby="message ? formattedId + '_message' : null"
            @input="$emit('input', $event.target.value)"
            v-model="value"/>

        <ui-button icon size="small" class="field-password__button" @click="toggleVisibility()">
            <fa-icon v-if="revealed" icon="eye-slash"></fa-icon>
            <fa-icon v-else icon="eye"></fa-icon>

            <span v-if="revealed" class="sr-only">{{ hideText }}</span>
            <span v-else class="sr-only">{{ showText }}</span>
        </ui-button>
    </div>
</template>

<script>
    export default {
        name: 'ui-password',

        mixins: [
            require('../../mixins/fields').default
        ],

        data() {
            return {
                revealed: false,
                type: 'password'
            }
        },

        props: {
            name:  {
                required: true,
                type: String
            },
            id: String,
            placeholder: String,
            label: String,
            help: String,
            value: {
                type: String,
                default: '',
            },
            required: {
                type: Boolean,
                default: false,
            },
            readonly: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            monospaced: {
                type: Boolean,
                default: false,
            },
            neverShow: {
                required: false,
                type: Boolean,
                default: false,
            },
            showText: {
                required: false,
                type: String,
                default: 'Show Password',
            },
            hideText: {
                required: false,
                type: String,
                default: 'Hide Password',
            },
            hasError: {
                required: false,
                type: Boolean,
                default: false,
            },
            hasSuccess: {
                required: false,
                type: Boolean,
                default: false,
            },
            message: {
                required: false,
                type: Boolean,
                defaut: false
            },
            autocomplete: {
                required: false,
                type: String,
                default: '',
            },
            autofocus: {
                required: false,
                type: Boolean,
                default: false,
            },
        },

        methods: {
            toggleVisibility() {
                this.type = this.type === 'password' ? 'text' : 'password'
                this.revealed = ! this.revealed
            }
        }
    }
</script>
