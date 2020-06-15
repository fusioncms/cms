<template>
	<div>
		<label :for="field.handle" class="form__label">{{ field.name }}</label>

		<div class="flex items-start justify-between">
			<div class="w-1/2">
				<p-button :disabled="requestOpen" @click="open">
					<fa-icon :icon="['fas', 'plus-circle']" class="mr-1"></fa-icon> Manage Forms
				</p-button>
			</div>

			<form-selection
				class="w-1/2"
				:limit="selectionLimit"
				:hasHeader="false"
				v-model="selected">
			</form-selection>
		</div>

		<p-modal name="selection-manager" no-header no-footer extra-large v-model="modalOpen">
			<div class="row">
				<div class="side-container">
					<form-selection
						:limit="selectionLimit"
						@reject="reject"
						@accept="accept"
						v-model="selection">
					</form-selection>
			   	</div>

				<div class="content-container">
					<div class="card">
						<div class="card__body">
                    		<div class="toolbar">
                    			<div class="toolbar__group">
									<button class="button button--icon" @click.prevent="push">
										<fa-icon class="icon" icon="arrow-alt-circle-left"></fa-icon>
									</button>
                    			</div>

                    			<div class="toolbar__group toolbar__group--grow">
		                            <search-action></search-action>
		                        </div>
							</div>
						</div>

						<div class="gallery-container selectables">
							<div class="gallery border-b border-gray-200 pb-2">
								<form-card
									v-for="form in forms"
									:key="form.id"
									:form="form"
									@dblclick="add(form.id)">
								</form-card>
							</div>
						</div>
            		</div>
            	</div>
            </div>
        </p-modal>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	import FormCard      from '../../components/FormManager/Browse/Form.vue'
	import FormSelection from '../../components/FormManager/Selection.vue'
	import SearchAction  from '../../components/FormManager/Actions/Search.vue'

	export default {
		name: 'form-fieldtype',

		components: {
			'form-card':      FormCard,
			'form-selection': FormSelection,
			'search-action':  SearchAction,
		},

		mixins: [
			require('../../mixins/fileselector').default,
			require('../../mixins/filedragdrop').default,
            require('../../mixins/filebrowser').default,
        ],

		data() {
            return {
            	requestOpen: false,
            	modalOpen: false,
            	selection: [],
            }
        },

		props: {
			field: {
			    type: Object,
			    required: true,
			},

			value: {
				type: Array,
				required: false,
				default: () => [],
			},
		},

		watch: {
			loading(isLoading) {
				this.$nextTick(() => {
					if (isLoading) {
						this.destroySelector()
					} else {
						this.loadSelector(this.$el.querySelector('.selectables'))

						if (this.requestOpen) {
							this.modalOpen   = true
							this.requestOpen = false
						}
					}
				})
			}
		},

        computed: {
			...mapGetters({
				loading: 'formmanager/getLoading',
				forms:   'formmanager/getForms',
			}),

			selected: {
				get() {
					return this.value || []
				},

				set(value) {
					this.$emit('input', value)
				}
			},

			selectionLimit() {
				return Number(this.field.settings.limit) || Infinity
			},

			addLimit() {
				return this.selectionLimit - this.selection.length
			}
        },

		methods: {
			...mapActions({
				fetchForms: 'formmanager/fetchForms',
			}),

			push() {
				_.forEach(this.selection, (id) => this.add(id))
			},

			add(id) {
				if (this.addLimit > 0) {
					let exists = _.find(this.selection, [ 'id', id ])
					let form   = _.find(this.forms, [ 'id', id ])

					if (! exists) {
						this.selection.push(form)
					}
				}
			},

			open() {
				this.reset()
				this.fetchForms()

				this.selection = [...this.selected]
				this.requestOpen = true
			},

			close() {
				this.reset()

				this.selection = []
				this.modalOpen = false
			},

			reject() {
				this.close()
			},

			accept() {
				this.selected = this.selection
				this.close()
			}
		}
	}
</script>