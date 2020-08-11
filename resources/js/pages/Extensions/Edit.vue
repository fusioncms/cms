<template>
    <form-container v-if="form">
        <portal to="title">
            <app-title icon="seedling">Edit Extension</app-title>
        </portal>

        <portal to="actions">
            <div class="buttons">
                <router-link :to="{ name: 'extensions' }" class="button">Go Back</router-link>
                <button type="submit" @click.prevent="submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save</button>
            </div>
        </portal>

        <div class="card">
            <div class="card__body">
                <p-title name="name" readonly v-model="form.name"></p-title>

                <field-set
                    :has-error="form.errors.has('fieldset')"
                    :error-message="form.errors.get('fieldset')"
                    v-model="form.fieldset">
                </field-set>
            </div>
        </div>

        <template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <p-input label="Handle" monospaced readonly v-model="form.handle"></p-input>
                </div>
            </div>

            <p-definition-list v-if="extension">
                <p-definition name="Created At">
                    {{ $moment(extension.created_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>

                <p-definition name="Updated At">
                    {{ $moment(extension.updated_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>
            </p-definition-list>
        </template>
    </form-container>
</template>

<script>
    import Form from '../../services/Form'

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
                extension: {},
                form: null
            }
        },

        methods: {
            submit() {
                this.form.patch(`/api/extensions/${this.extension.id}`)
                    .then((response) => {
                        toast('Extension successfully updated', 'success')
                    }).catch((response) => {
                        toast(response.response.data.message, 'failed')
                    })
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get(`/api/extensions/${to.params.extension}`),
            ]).then(axios.spread((extension) => {
                next((vm) => {
                    vm.extension     = extension.data.data
                    vm.form = new Form({
                        name:     vm.extension.name,
                        handle:   vm.extension.handle,
                        fieldset: vm.extension.fieldset && vm.extension.fieldset.id ? vm.extension.fieldset.id : null
                    })

                    vm.$emit('updateHead')
                })
            })).catch(function(error) {
                next('/extensions')
                toast('The requested extension could not be found', 'warning')
            })
        }
    }
</script>