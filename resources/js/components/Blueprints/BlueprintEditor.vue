<template>
	<div>
        <div class="row">
            <div class="col mb-6 w-full lg:w-1/2">
                <ui-input-group
                    name="section-label"
                    label="Section Label"
                    v-model="section.name"
                    required>
                </ui-input-group>
            </div>

            <div class="col mb-6 w-full lg:w-1/2">
                <ui-slug-group
                    name="section-handle"
                    label="Section Handle"
                    autocomplete="off"
                    delimiter="-"
                    :force-watch="section.prototype"
                    :watch="section.name"
                    v-model="section.handle"
                    required>
                </ui-slug-group>
            </div>

            <div class="col mb-6 w-full lg:w-1/2">
                <ui-input-group
                    name="section-description"
                    label="Section Description"
                    v-model="section.description">
                </ui-input-group>
            </div>

            <div class="col mb-6 w-full lg:w-1/2">
                <ui-select-group
                    name="section-placement"
                    label="Section Placement"
                    :options="placements"
                    v-model="section.placement">
                </ui-select-group>
            </div>
        </div>

        <div class="row">
            <div class="col mt-6 w-full">
                <field-builder
                    v-model="section.fields"
                    :sections="sections"
                    :sectionHandle="section.handle">
                </field-builder>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		name: 'blueprint-editor',

        components: {
            'field-builder': require('../../interfaces/Fieldsets/FieldBuilder').default
        },

        data() {
            return {
                placements: [
                    { label: 'Body',    value: 'body'    },
                    { label: 'Sidebar', value: 'sidebar' }
                ]
            }
        },

		props: {
            sections: {
                type: Array,
                required: true
            },

            section: {
                type: Object,
                required: true
            }
        }
	}
</script>