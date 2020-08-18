<template>
    <form-container>
        <portal to="actions">
            <div class="buttons">
                <router-link v-if="collection.slug" :to="{ name: 'collection.index', params: {collection: collection.slug} }" class="button button--secondary">Go Back</router-link>
                <button type="submit" @click.prevent="$parent.submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save</button>
            </div>
        </portal>

        <div class="card">
            <div class="card__body">
                <p-title
                    v-if="collection.show_name_field"
                    name="name"
                    :label="collection.name_label || 'Name'"
                    autocomplete="off"
                    autofocus
                    required
                    :placeholder="collection.name_label || 'Name'" 
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
                </p-title>

                <p-tabs v-if="sections.body.length > 0">
                    <p-tab v-for="section in sections.body" :key="section.handle" :name="section.name">
                        <component
                            class="form__group"
                            v-for="field in section.fields"
                            :key="field.handle"
                            :is="field.type.id + '-fieldtype'"
                            :field="field"
                            :errors="form.errors"
                            v-model="form[field.handle]">
                        </component>
                    </p-tab>
                </p-tabs>

                <div v-else class="text-center">
                    <p>Things are looking a little empty here!</p>
                    <router-link class="button" :to="'/matrices/' + collection.id + '/edit'">Configure your collection</router-link>
                </div>
            </div>
        </div>

        <template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <p-slug
                        name="slug"
                        label="Slug"
                        monospaced
                        autocomplete="off"
                        required
                        :watch="form.name"
                        :readonly="!collection.show_name_field"
                        :has-error="form.errors.has('slug')"
                        :error-message="form.errors.get('slug')"
                        v-model="form.slug">
                    </p-slug>

                    <p-toggle
                        name="status"
                        label="Status"
                        v-model="form.status"
                        :true-value="1"
                        :false-value="0">
                    </p-toggle>
                </div>
            </div>

            <div class="card" v-for="(section) in sections.sidebar" :key="section.handle">
                <div class="card__header">
                    <h3 class="card__title">{{ section.name }}</h3>
                    <p v-if="section.description" class="card__subtitle">{{ section.description }}</p>
                </div>

                <div class="card__body">
                    <div v-for="field in section.fields">
                        <component
                            v-for="field in section.fields"
                            :key="field.handle"
                            :is="field.type.id + '-fieldtype'"
                            :field="field"
                            :has-error="form.errors.has(field.handle)"
                            :error-message="form.errors.get(field.handle)"
                            v-model="form[field.handle]">
                        </component>
                    </div>
                </div>
            </div>

            <p-definition-list v-if="entry">
                <p-definition name="Status">
                    <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': entry.status, 'text-danger-500': ! entry.status}"></fa-icon> {{ entry.status ? 'Enabled' : 'Disabled' }}
                </p-definition>

                <p-definition name="Created At">
                    {{ $moment(entry.created_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>

                <p-definition name="Updated At">
                    {{ $moment(entry.updated_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>
            </p-definition-list>
        </template>
    </form-container>
</template>

<script>
    export default {
        props: {
            entry: {
                required: false
            },

            collection: {
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

                if (this.collection.fieldset) {
                    body = _.filter(this.collection.fieldset.sections, (section) =>
                        section.placement == 'body')

                    sidebar = _.filter(this.collection.fieldset.sections, (section) =>
                        section.placement == 'sidebar')
                }

                return { body, sidebar }
            }
        },

        created() {
            if (this.collection.name_format) {
                const subject = this.collection.name_format
                const regexp  = /{(\w+)}/gi

                subject.match(regexp).forEach((mm) => {
                    let field = _.trim(mm, '{}')

                    if (field != 'name' && field != 'slug' && field in this.form) {
                        this.$watch(`form.${field}`, () => {
                            this.form.name = subject.replace(regexp, (p, m) => {
                                return this.form[m] ?? ''
                            })
                        })
                    }
                })
            }
        }
    }
</script>