<template>
    <div>
        <portal to="title">
            <page-title icon="sliders-h">Settings</page-title>
        </portal>

        <div class="row flex-1 flex-wrap" v-for="(groups, section) in sections" :key="section">
            <div class="col mb-2 w-full">
                <span class="font-semibold">{{ section }}</span>
            </div>

            <div class="col mb-6 w-full md:w-1/3 xl:w-1/4 xxl:w-1/5" v-for="group in groups" :key="group.handle">
                <router-link :to="{ name: 'setting.group', params: { group: group.handle } }" class="no-underline text-black hover:text-black bg-white rounded shadow hover:shadow-md p-3 flex h-full items-center">
                    <span class="fa-layers fa-fw fa-3x mr-2 flex-shrink-0">
                        <fa-icon :icon="['fas', 'circle']" class="fa-fw text-primary-500"></fa-icon>
                        <fa-icon :icon="['fas', (group.icon || 'cog')]" class="fa-fw fa-inverse" transform="shrink-8"></fa-icon>
                    </span>

                    <div class="flex flex-col">
                        <span class="font-semibold text-lg">{{ group.name }}</span>
                        <span class="text-xs text-gray-800">{{ group.description }}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        head: {
            title() {
                return {
                    inner: 'Settings'
                }
            }
        },

        computed: {
            ...mapGetters({
                sections: 'settings/getGroupSections'
            }),
        }
    }
</script>
