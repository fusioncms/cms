<template>
    <ui-card class="blueprint-section">
        <div class="blueprint-section__header card__header">
            <fa-icon class="blueprint-section__grip" icon="grip-vertical"></fa-icon> {{ section.name }}
            <div class="blueprint-section__actions buttons">
                <ui-button icon size="small" v-modal:delete_section @click="setRemoveIndex" class="mr-1">
                    <span class="sr-only">Delete Section</span>
                    <fa-icon icon="trash-alt"></fa-icon>
                </ui-button>
                <ui-button ref="edit" icon size="small" @click.prevent="isActive ? deactivate() : activate()">
                    <span class="sr-only">Edit Section</span>
                    <fa-icon icon="edit"></fa-icon>
                </ui-button>
            </div>
        </div>

        <ui-card-body>
            <div v-if="isActive" class="blueprint-section__fields row">
                <div class="col w-full mb-2" :class="section.placement === 'body' ? 'md:w-1/2' : null">
                    <ui-label :field-id="`${id}-section-label`">Section Label</ui-label>
                    <ui-input
                        ref="input"
                        class="field--sm"
                        name="section-label"
                        label="Section Label"
                        :id="`${id}-section-label`"
                        v-model="section.name"
                        required>
                    </ui-input>
                </div>

                <div class="col w-full mb-2" :class="section.placement === 'body' ? 'md:w-1/2' : null">
                    <ui-label :field-id="`${id}-section-handle`">Section Handle</ui-label>
                    <ui-slug
                        class="field--sm"
                        name="section-handle"
                        label="Section Handle"
                        :id="`${id}-section-handle`"
                        autocomplete="off"
                        delimiter="_"
                        :force-watch="section.prototype"
                        :watch="section.name"
                        v-model="section.handle"
                        required>
                    </ui-slug>
                </div>

                <div class="col w-full mb-2">
                    <ui-label :field-id="`${id}-section-description`">Section Description</ui-label>
                    <ui-input
                        class="field--sm"
                        name="section-description"
                        label="Section Description"
                        :id="`${id}-section-description`"
                        v-model="section.description">
                    </ui-input>
                </div>

                <select class="hidden" name="section-placement" v-model="section.placement">
                    <option :key="placement.label" v-for="placement in placements" :value="placement.value">{{ placement.label }}</option>
                </select>
            </div>

            <slot></slot>

        </ui-card-body>

    </ui-card>
</template>

<script>
    export default {
        name: 'blueprint-section',

        components: {
            'field-builder': require('../../interfaces/Fieldsets/FieldBuilder').default
        },

        data() {
            return {
                isActive: this.active,
            }
        },

        props: {
            section: {
                type: [Array,Object],
                required: true
            },

            id: {
                type: String
            },

            remove: {
                type: [Function,Boolean],
                default: false,
            },

            active: {
                type: Boolean,
                required: false,
                default: false,
            },

            parentIndex: {
                type: Number
            },

            placements: {
                type: Array
            }
        },

        computed: {
            placement(value) {
                return this.section.placement
            }
        },

        methods: {
            activate() {
                this.isActive = true
                this.$nextTick(function() {
                    this.$refs.input.focus()
                });
            },

            deactivate() {
                this.isActive = false
            },

            setRemoveIndex() {
                this.$store.commit('blueprint/setRemoveIndex', this.parentIndex);
            }
        }
    }
</script>
