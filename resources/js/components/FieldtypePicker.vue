<template>
    <div>
        <div class="pb-3">Fields</div>
        <div class="grid grid-cols-3 lg:grid-cols-6 gap-3 pb-3">
            <ui-button
                v-for="(fieldtype, index) in filtered('fields')"
                :key="`add-${fieldtype.handle}`"
                class="flex items-center justify-center"
                @click.prevent="$emit('click', fieldtype)">

            <fa-icon :icon="fieldtype.icon" class="icon"></fa-icon>
            {{ fieldtype.name }}
        </ui-button>
        </div>
        <div class="pb-3">Fieldset</div>
        <div class="grid grid-cols-3 lg:grid-cols-6 gap-3">
            <ui-button
                v-for="(fieldtype, index) in filtered('fieldset')"
                :key="`add-${fieldtype.handle}`"
                class="flex items-center justify-center"
                @click.prevent="$emit('click', fieldtype)">

                <fa-icon :icon="fieldtype.icon" class="icon"></fa-icon>
                {{ fieldtype.name }}
            </ui-button>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'fieldtype-picker',

        computed: {
            ...mapGetters({
                fieldtypes: 'fieldtypes/getFilteredFieldtypes'
            })
        },

        methods: {
            filtered(item) {
                const { ['fieldset']: fieldset, ...rest } = this.fieldtypes;
                if (item === 'fieldset')
                    return fieldset === undefined ? rest : {['fieldset']: fieldset}
                else
                    return rest;
            }
        },

        created() {
            this.$store.dispatch('fieldtypes/fetch')
        },
    }
</script>
