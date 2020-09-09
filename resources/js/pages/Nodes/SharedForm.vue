<template>
    <form-container>
		<portal to="actions">
			<div class="buttons">
				<ui-button v-if="menu.id" :to="{ name: 'menu.nodes', params: {menu: menu.id} }" variant="secondary">Go Back</ui-button>
				<ui-button type="submit" @click.prevent="submit" variant="primary" :disabled="!form.hasChanges">Save</ui-button>
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

                <ui-input-group
                    name="url"
                    label="URL"
                    help="The URL of the node."
                    autocomplete="off"
                    required
                    :has-error="form.errors.has('url')"
                    :error-message="form.errors.get('url')"
                    v-model="form.url">
                </ui-input-group>

                <ui-tabs v-if="fields.body.length > 0">
                    <ui-tab v-for="section in sections.body" :key="section.handle" :name="section.name">
                        <component
                            class="form__group"
                            v-for="field in section.fields"
                            :key="field.handle"
                            :is="field.type.id + '-fieldtype'"
                            :field="field"
                            :errors="form.errors"
                            v-model="form[field.handle]">
                        </component>
                    </ui-tab>
                </ui-tabs>
            </div>
        </div>

        <template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <ui-toggle
                        name="status"
                        label="Status"
                        v-model="form.status"
                        :true-value="1"
                        :false-value="0">
                    </ui-toggle>

                    <ui-select-group
                        name="new_window"
                        label="Open link where"
                        help="Determine where the link should open."
                        :options="[
                            {
                                'label': 'New Window',
                                'value': 1,
                            },
                            {
                                'label': 'Same Window',
                                'value': 0,
                            },
                        ]"
                        v-model="form.new_window">
                    </ui-select-group>
                </div>
            </div>

			<div class="card" v-for="(section) in sections.sidebar" :key="section.handle">
                <div class="card__header">
                    <h3 class="card__title">{{ section.name }}</h3>
                    <p v-if="section.description" class="card__subtitle">{{ section.description }}</p>
                </div>

                <div class="card__body">
                    <component
                        class="form__group"
                        v-for="field in section.fields"
                        :key="field.handle"
                        :is="field.type.id + '-fieldtype'"
                        :field="field"
                        :errors="form.errors"
                        v-model="form[field.handle]">
                    </component>
                </div>
            </div>

			<ui-definition-list v-if="node">
                <ui-definition name="Status">
                    <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': node.status, 'text-danger-500': ! node.status}"></fa-icon> {{ node.status ? 'Enabled' : 'Disabled' }}
                </ui-definition>

                <ui-definition name="Created At">
                    {{ $moment(node.created_at).format('Y-MM-DD, hh:mm a') }}
                </ui-definition>

                <ui-definition name="Updated At">
                    {{ $moment(node.updated_at).format('Y-MM-DD, hh:mm a') }}
                </ui-definition>
            </ui-definition-list>
        </template>
    </form-container>
</template>

<script>
    export default {
        props: {
            node: {
                type: Object,
            },

            nodes: {
                type: Array,
                required: true,
            },

            menu: {
                type: Object,
                required: true,
            },

            form: {
                type: Object,
                required: true,
            },

            submit: {
                required: true,
            },
        },

        computed: {
            sections() {
                let body = []
                let sidebar = []

                if (this.menu.fieldset) {
                    body = _.filter(this.menu.fieldset.sections, function(section) {
                        return section.placement == 'body'
                    })

                    sidebar = _.filter(this.menu.fieldset.sections, function(section) {
                        return section.placement == 'sidebar'
                    })
                }

                return {
                    body: body,
                    sidebar: sidebar
                }
            },

            fields() {
                let body = []
                let sidebar = []

                if (this.menu.fieldset) {
                    body = _.filter(this.menu.fieldset.sections, function(section) {
                        return section.placement == 'body'
                    })

                    body = _.flatMap(body, function(section) {
                        return section.fields
                    })

                    sidebar = _.filter(this.menu.fieldset.sections, function(section) {
                        return section.placement == 'sidebar'
                    })

                    sidebar = _.flatMap(sidebar, function(section) {
                        return section.fields
                    })
                }

                return {
                    body: body,
                    sidebar: sidebar
                }
            }
        },
    }
</script>