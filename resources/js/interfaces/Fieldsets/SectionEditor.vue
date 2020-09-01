<template>
	<div>
        <div class="row">
            <div class="col mb-6 w-full lg:w-1/2">
                <ui-input
                    name="label"
                    label="Section Label"
                    v-model="section.name"
                    required>
                </ui-input>
            </div>

            <div class="col mb-6 w-full lg:w-1/2">
                <ui-slug
                    name="handle"
                    label="Section Handle"
                    autocomplete="off"
                    delimiter="-"
                    :force-watch="section.prototype"
                    :watch="section.name"
                    v-model="section.handle"
                    required>
                </ui-slug>
            </div>

            <div class="col mb-6 w-full lg:w-1/2">
                <ui-input
                    name="description"
                    label="Section Description"
                    v-model="section.description">
                </ui-input>
            </div>

            <div class="col mb-6 w-full lg:w-1/2">
                <ui-select
                    name="placement"
                    label="Section Placement"
                    :options="placements"
                    v-model="section.placement">
                </ui-select>
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
		name: 'section-editor',

        components: {
            'field-builder': require('./FieldBuilder').default
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