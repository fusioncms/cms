<template>
    <div>
        <ui-field-group
            :name="field.handle"
            :fieldId="`${field.handle}-field`"
            :label="field.name"
            :required="field.required"
            :help="field.help"
            :hasError="hasError"
            :errorMessage="errorMessage">

            <div class="input-group">
                <ui-input
                    class="field-input field"
                    :id="field.handle"
                    :name="field.handle"
                    :help="field.help"
                    :required="field.required"
                    :has-error="hasError"
                    :error-message="errorMessage"
                    :aria-required="field.required"
                    :aria-describedby="field.help"
                    v-model="model">
                </ui-input>

                <ui-button icon v-modal:selection-modal>
                    <fa-icon :icon="['fas', 'plus-circle']"></fa-icon>
                    <span class="sr-only">Choose an existing audio file</span>
                </ui-button>

                <ui-button icon @click="clear">
                    <fa-icon :icon="['fas', 'times']" class="mr-1"></fa-icon>
                    <span class="sr-only">Clear field</span>
                </ui-button>
            </div>
        </ui-field-group>

        <audio
            controls
            :src="model">
        </audio>

        <ui-modal name="selection-modal" title="Choose an existing audio file">
            <ui-table :endpoint="endpoint" id="audio-files" sort-by="name" sort-in="desc" :per-page="10">
                <template slot="name" slot-scope="table">
                    <ui-radio
                        :id="`selection-${table.record.id}`"
                        name="selection"
                        :native-value="table.record.url"
                        v-model="model">
                        {{ table.record.name }}
                    </ui-radio>
                </template>

                <template slot="bytes" slot-scope="table">
                    <span class="help">{{ table.record.bytes | bytes }}</span>
                </template>

                <template slot="extension" slot-scope="table">
                    <span class="help">{{ table.record.extension }}</span>
                </template>

                <template slot="created_at" slot-scope="table">
                    <ui-date :timestamp="table.record.created_at"></ui-date>
                </template>
            </ui-table>
        </ui-modal>
    </div>
</template>

<script>
    import FieldMixin from '@/mixins/fieldtypes/field'
    import FileHelper from '@/mixins/filehelper'

	export default {
		name: 'audio-fieldtype',

        mixins: [FieldMixin, FileHelper],

        data() {
            return {
                endpoint: '/datatable/files/audio'
            }
        },

        computed: {
			model: {
				get() {
					return this.value || ''
				},

				set(value) {
					this.$emit('input', value)
				}
			},
        },

		methods: {
            clear() {
                this.model = ''
            }
		}
	}
</script>