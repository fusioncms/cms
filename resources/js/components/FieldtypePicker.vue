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
    import { mapGetters } from 'vuex'

    export default {
        name: 'fieldtype-picker',

        computed: {
            ...mapGetters({
                fieldtypes: 'fieldtypes/getFieldtypes'
            })
        },

        created() {
            this.$store.dispatch('fieldtypes/fetch')
        },
    }
</script>
