<template>
	<div>
        <div class="row">
            <div class="col mb-6 w-full lg:w-1/2">
                <p-input
                    name="label"
                    label="Section Label"
                    v-model="section.name"
                    required>
                </p-input>
            </div>

            <div class="col mb-6 w-full lg:w-1/2">
                <p-slug
                    name="handle"
                    label="Section Handle"
                    autocomplete="off"
                    delimiter="-"
                    :watch="section.name"
                    v-model="section.handle"
                    required>
                </p-slug>
            </div>

            <div class="col mb-6 w-full lg:w-1/2">
                <p-input
                    name="description"
                    label="Section Description"
                    v-model="section.description">
                </p-input>
            </div>

            <div class="col mb-6 w-full lg:w-1/2">
                <p-select
                    name="placement"
                    label="Section Placement"
                    :options="placements"
                    v-model="section.placement">
                </p-select>
            </div>
        </div>

        <div class="row">
            <div class="col mt-6 w-full">
                <field-builder
                    v-model="section.fields"
                    :fieldtypes="fieldtypes"
                    :sections="$parent.sections"
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
            section: {
                type: Object,
                required: true
            },

            fieldtypes: {
                type: Object,
                required: true
            }
        }
	}
</script>