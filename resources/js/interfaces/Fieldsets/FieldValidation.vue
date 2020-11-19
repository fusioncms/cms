<template>
	<ui-field-group
        name="validation"
        fieldId="field-validation"
        label="Validation Rules">
        
        <div class="row">
            <ui-input-group
                class="col w-full sm:w-1/2"
                v-for="(rule, key) in rules"
                :key="key"
                :name="`validation.${key}`"
                :hide-label="hideLabel"
                :label="String(key)"
                monospaced
                v-model="rules[key]">
            </ui-input-group>
        </div>
    </ui-field-group>
</template>

<script>
	export default {
		name: 'field-validation',

		props: {
			value: {
				type: Object,
				required: true
			},
		},

		computed: {
			hideLabel() {
				return Object.values(this.value).length == 1
			},

			rules: {
				get() {
					return this.value
				},

				set(value) {
					this.$emit('input', value)
				}
			}
		}
	}
</script>