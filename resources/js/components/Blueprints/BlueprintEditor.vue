<template>
	<div>
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