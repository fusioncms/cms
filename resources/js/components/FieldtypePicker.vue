<template>
    <div class="grid grid-cols-3 lg:grid-cols-6 gap-3">
        <ui-button
            v-for="(type, index) in types"
            :key="`add-${type.handle}`"
            :disabled="type.disabled"
            class="flex items-center justify-center"
            :class="{'text-gray-500':type.disabled}"
            @click.prevent="$emit('click', type)">

            <fa-icon :icon="type.icon" class="icon"></fa-icon>
            {{ type.name }}
        </ui-button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'fieldtype-picker',

        computed: {
            ...mapGetters({
                types: 'fieldtypes/get'
            })
        },

        created() {
            this.$store.dispatch('fieldtypes/fetch')
        }
    }
</script>
