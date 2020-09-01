<template>
    <div>
        <label
            class="form__label"
            :for="field.handle"
            v-html="field.name">
        </label>

        <ui-button
            v-for="(section, index) in sections"
            :key="section.handle"
            class="button--secondary mr-2"
            @click="add(index)">

            {{ section.name }}
            <fa-icon icon="plus" class="fa-xs"></fa-icon>
        </ui-button>

        <ui-tabs :move="move">
            <ui-tab
                v-for="(replicant, index) in replicants"
                :key="`replicant-${index}-tab`"
                :name="`[${index + 1}] ${replicant.section.name}`"
                :remove="remove">

                <component
                    v-for="sub in fields(replicant.section)"
                    :key="sub.handle"
                    class="form__group"
                    :is="sub.type.id + '-fieldtype'"
                    :field="sub"
                    :errors="fieldErrors(`${field.handle}.${index}.fields.`)"
                    v-model="replicant.fields[sub.handle]">
                </component>
            </ui-tab>
        </ui-tabs>
    </div>
</template>

<script>
    import Errors from '@/services/Errors'

    export default {
        name: 'replicator-fieldtype',

        data() {
            return {
                replicants: _.defaultTo(this.value, []),
                sections: [],
                active: 0
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
                default: () => []
            },

            errors: {
                type: Object,
                required: false,
                default: () => {}
            }
        },

        watch: {
            replicants(value) {
                this.$emit('input', value)
            }
        },

        methods: {
            fieldErrors(handle) {
                let errors = _.has(this.errors, 'errors') ? this.errors.errors : {}
                    errors = _.pickBy(errors, (value, key) => _.startsWith(key, handle))
                    errors = _.mapKeys(errors, (value, key) => _.replace(key, handle, ''))

                return new Errors(errors)
            },

            _errorMessage(handle) {
                return this.errors ? this.errors.get(handle) : ''
            },

            fields(section) {
                let index = _.findIndex(this.sections,
                    (item) => item.id == section.id)

                if (index != -1)
                    return this.sections[index].fields
                else
                    return []
            },

            add(index) {
                let section = this.sections[index]
                let fields  = {}

                _.each(section.fields, (field) =>
                    fields[field.handle] = field.default)

                this.replicants.push({ section, fields })
            },

            move(fromIndex, toIndex) {
                this.replicants.splice(toIndex, 0,
                    this.replicants.splice(fromIndex, 1)[0])
            },

            remove(index) {
                if (this.replicants.length > 0)
                    this.replicants.splice(index, 1)
            }
        },

        created() {
            axios.get(`/api/replicators/${this.field.settings.replicator}`)
                .then((response) =>
                    this.sections = response.data.data.sections)
        }
    }
</script>
