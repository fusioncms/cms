<template>
    <form-container>
        <portal to="title">
            <page-title icon="mail-bulk">Edit Mailable</page-title>
        </portal>

        <portal to="actions">
            <div class="buttons">
                <ui-button :to="{ name: 'mailables' }">Go Back</ui-button>
                <ui-button type="submit" variant="primary" @click.prevent="submit" :disabled="!form.hasChanges">Save</ui-button>
            </div>
        </portal>

        <div class="card">
            <div class="card__body">
                <ui-title-group
                    name="name"
                    autocomplete="off"
                    autofocus
                    required
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
                </ui-title-group>

                <hr>

                <div v-for="(options, name) in placeholders" :key="name">
                    <ui-button v-if="! isArray(options)" @click="addPlaceholder(options)"><code>${{ options }}</code></ui-button>

                    <ui-dropdown :id="name + '-values'">
                        <code>${{ name }}</code>

                        <template v-slot:menu>
                            <ui-dropdown-link
                                v-for="(value, key) in options"
                                :key="key"
                                @click="addPlaceholder(value, name)">
                                <code>{{ value }}</code>
                            </ui-dropdown-link>
                        </template>
                    </ui-dropdown>
                </div>

                <p class="help mt-1 mb-3">Select values to add it to your mail template.</p>

                <markdown-fieldtype
                    v-if="ready"
                    ref="markdown"
                    v-on:input="updateMarkdown"
                    :field="{
                        'name': 'Content',
                        'handle': 'markdown'
                    }"
                    :value="form.markdown">
                </markdown-fieldtype>
            </div>
        </div>

        <template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <ui-slug-group
                        name="handle"
                        label="Handle"
                        monospaced
                        autocomplete="off"
                        required
                        delimiter="_"
                        :watch="form.name"
                        :has-error="form.errors.has('handle')"
                        :error-message="form.errors.get('handle')"
                        v-model="form.handle">
                    </ui-slug-group>

                    <ui-toggle
                        name="status"
                        label="Status"
                        v-model="form.status"
                        :true-value="1"
                        :false-value="0">
                    </ui-toggle>
                </div>
            </div>
        </template>
    </form-container>
</template>

<script>
    import _ from 'lodash'
    import Form from '@/services/Form'

	export default {
		head: {
            title() {
                return {
                    inner: this.form.name || 'Loading...'
                }
            }
        },

		data() {
            return {
                id: null,
                ready: false,
                placeholders: {},
                form: new Form({
                    name: '',
                    handle: '',
                    markdown: '',
                    status: '1'
                }, true)
            }
        },

        methods: {
            isArray(value) {
                return _.isArray(value)
            },

            addPlaceholder(value, name) {
                const codemirror = this.$refs.markdown.codemirror
                const doc        = codemirror.getDoc()
                const cursor     = doc.getCursor()

                if (name) {
                    doc.replaceSelection(`{{ $${name}->${value} }}`, doc.getSelection())
                } else {
                    doc.replaceSelection(`{{ $${value} }}`, doc.getSelection())
                }
            },

            updateMarkdown(markdown) {
                this.form.markdown = markdown
            },

            submit() {
                this.form.patch('/api/mailables/' + this.id).then((response) => {
                    toast('Mailable successfully updated', 'success')

                    this.$router.push('/mailables')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },

            placeholderOptions(placeholders) {
                let options = []

                _.each(placeholders, (option) => {
                    options.push({
                        label: option,
                        value: option
                    })
                })

                return options
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get(`/api/mailables/${to.params.mailable}`),
            ]).then(axios.spread(function (mailable) {
                next(function(vm) {
                    vm.id           = mailable.data.data.id
                    vm.placeholders = mailable.data.data.placeholders
                    vm.ready        = true

                    vm.form.name     = mailable.data.data.name
                    vm.form.handle   = mailable.data.data.handle
                    vm.form.markdown = mailable.data.data.markdown

                    vm.$emit('updateHead')
                })
           	})).catch(function(error) {
                next('/mailables')
                toast('The requested mailable could not be found', 'warning')
            })
        }
    }
</script>