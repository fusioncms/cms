<template>
    <form-container>
        <portal to="actions">
            <div class="buttons">
                <router-link :to="{ name: 'navigation' }" class="button">Go Back</router-link>
                <button type="submit" @click.prevent="$parent.submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save</button>
            </div>
        </portal>

        <section-card title="General Information" description="General information about this navigation and what it links to.">
            <p-input
                name="name"
                label="Name"
                description="What should this navigation be called?"
                autocomplete="off"
                autofocus
                required
                :has-error="form.errors.has('name')"
                :error-message="form.errors.get('name')"
                v-model="form.name">
            </p-input>

            <p-textarea
                name="description"
                label="Description"
                help="Give a short description of what this navigation will link to."
                autocomplete="off"
                :has-error="form.errors.has('description')"
                :error-message="form.errors.get('description')"
                v-model="form.description">
            </p-textarea>
        </section-card>

        <section-card title="Blueprint" description="Configure this navigation's blueprint.">
            <section-builder v-model="form.sections"></section-builder>
        </section-card>

        <template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <p-slug
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
                    </p-slug>
                </div>
            </div>
        </template>
    </form-container>
</template>

<script>
    export default {
        props: {
            resource: {
                type: Object,
                required: false,
                default: () => {}
            },

            form: {
                type: Object,
                required: true,
            }
        },
    }
</script>