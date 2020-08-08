<template>
    <div>
        <label
            class="form__label"
            :for="field.handle"
            v-html="field.name">
        </label>

        <p-button
            v-for="(section, index) in sections"
            :key="section.handle"
            class="button--secondary mr-2"
            @click="add(index)">
            
            {{ section.name }}
            <fa-icon icon="plus" class="fa-xs"></fa-icon>
        </p-button>


        <div class="tabs">
            <ul class="tab__list overflow-x-scroll">
                <li v-for="(replicant, index) in replicants"
                    :key="`replicant-${index}-tab`"
                    class="tab flex-shrink-0 flex-1 border-r border-gray-200"
                    :class="{ 'tab--active': index == active }">
                    
                    <a href="#"
                        class="tab__link flex justify-between items-center"
                        @click.prevent="select(index)">
                        <span>{{ replicant.section.name }}</span>
                        <span
                            class="flex items-center justify-center w-6 h-6 rounded hover:bg-black hover:text-white"
                            @click.prevent="remove(index)">
                            <fa-icon icon="times" class="fa-xs"></fa-icon>
                        </span>
                    </a>
                </li>
            </ul>

            <template v-for="(replicant, index) in replicants">
                <div v-show="index == active" :key="`replicant-${index}-panel`" class="tab__panel">
                    <component
                        v-for="sub in fields(replicant.section)"
                        :key="sub.handle"
                        class="form__group"
                        :is="sub.type.id + '-fieldtype'"
                        :field="sub"
                        :errors="fieldErrors(`${field.handle}.${index}.fields.`)"
                        v-model="replicant.fields[sub.handle]">
                    </component>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import Errors from '../../services/Errors'

    export default {
        name: 'replicator-fieldtype',

        data() {
            return {
                replicants: this.value,
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

            remove(index) {
                this.replicants.splice(index, 1)
                this.active = index === 0 ? 1 : 0
            },

            select(index) {
                this.active = this.replicants[index] ? index : 0
            }
        },

        created() {
            axios.get(`/api/replicators/${this.field.settings.replicator}`)
                .then((response) =>
                    this.sections = response.data.data.sections)
        }
    }
</script>
