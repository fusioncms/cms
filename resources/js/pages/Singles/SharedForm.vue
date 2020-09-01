<template>
    <form-container>
        <portal to="actions">
            <div class="buttons">
                <router-link :to="{ name: 'dashboard' }" class="button button--secondary">Go Back</router-link>
                <button type="submit" @click.prevent="$parent.submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save</button>
            </div>
        </portal>

        <div class="card">
            <div class="card__body">
                <ui-title
                    name="name"
                    :label="matrix.name_label || 'Name'" 
                    autocomplete="off"
                    autofocus
                    required
                    :placeholder="matrix.name_label || 'Name'" 
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name"
                    v-if="matrix.show_name_field">
                </ui-title>

                <ui-tabs v-if="sections.body.length > 0">
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

                <div v-else class="text-center">
                    <p>Things are looking a little empty here!</p>
                </div>
            </div>
        </div>

        <template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <ui-slug
                        name="slug"
                        label="Slug"
                        monospaced
                        autocomplete="off"
                        required
                        :watch="form.name"
                        :has-error="form.errors.has('slug')"
                        :error-message="form.errors.get('slug')"
                        v-model="form.slug">
                    </ui-slug>

                    <ui-toggle
                        name="status"
                        label="Status"
                        v-model="form.status"
                        :true-value="1"
                        :false-value="0">
                    </ui-toggle>
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

            <ui-definition-list v-if="single">
                <ui-definition name="Status">
                    <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': single.status, 'text-danger-500': ! single.status}"></fa-icon> {{ single.status ? 'Enabled' : 'Disabled' }}
                </ui-definition>

                <ui-definition name="Created At">
                    {{ $moment(single.created_at).format('Y-MM-DD, hh:mm a') }}
                </ui-definition>

                <ui-definition name="Updated At">
                    {{ $moment(single.updated_at).format('Y-MM-DD, hh:mm a') }}
                </ui-definition>
            </ui-definition-list>
        </template>
    </form-container>
</template>

<script>
    export default {
        props: {
            single: {
                required: true
            },

            matrix: {
                required: true,
            },

            form: {
                type: Object,
                required: true,
            }
        },

        computed: {
            sections() {
                let body = []
                let sidebar = []

                if (this.matrix.fieldset) {
                    body = _.filter(this.matrix.fieldset.sections, function(section) {
                        return section.placement == 'body'
                    })

                    sidebar = _.filter(this.matrix.fieldset.sections, function(section) {
                        return section.placement == 'sidebar'
                    })
                }

                return {
                    body: body,
                    sidebar: sidebar
                }
            },
        },
    }
</script>