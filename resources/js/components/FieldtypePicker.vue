<template>
    <div class="grid grid-cols-3 lg:grid-cols-6 gap-3">
        <ui-button
            v-for="(fieldtype, index) in fieldtypes"
            :key="`add-${fieldtype.handle}`"
            class="flex items-center justify-center"
            @click.prevent="$emit('click', fieldtype)">

            <fa-icon :icon="fieldtype.icon" class="icon"></fa-icon>
            {{ fieldtype.name }}
        </ui-button>
    </div>
</template>

<script>
    export default {
        name: 'fieldtype-picker',

        props: {
            structure: {
                type: String,
                required: false,
                default: ''
            }
        },

        computed: {
            fieldtypes() {
                return this.$store.getters['fieldtypes/getFieldtypesByStructure'](this.structure)
            }
        },

        created() {
            this.$store.dispatch('fieldtypes/fetch')
        },
    }
</script>
