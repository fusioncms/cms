<template>
    <div class="h-full max-h-full">
        <portal to="title">
            <page-title icon="inbox">Inbox</page-title>
        </portal>

        <portal to="actions">
            <ui-button variant="primary" :to="{ name: 'forms' }">Manage Forms</ui-button>
        </portal>

        <div v-if="$mq == 'sm' && response.id" class="row mb-6">
            <div class="col w-full">
                <ui-card class="flex items-center justify-between">
                    <a href="#" @click.prevent="clear" class="rounded p-2 hover:bg-gray-100 text-gray-900 border border-gray-300"><fa-icon :icon="['fas', 'arrow-left']" class="fa-fw"></fa-icon></a>
                </ui-card>
            </div>
        </div>

        <div class="row md:h-full">
            <filter-sidebar v-if="($mq == 'sm' && ! response.id) || $mq != 'sm'"></filter-sidebar>

            <div class="content-container" style="margin-bottom: 0 !important;">
                <div class="card md:h-full flex flex-1">
                    <response-list v-if="($mq == 'sm' && ! response.id) || $mq != 'sm'"></response-list>

                    <response-view v-if="($mq == 'sm' && response.id) || $mq != 'sm'"></response-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    import store from '../../store'
    import { mapActions, mapGetters } from 'vuex'
    import ResponseList from './ResponseList.vue'
    import ResponseView from './ResponseView.vue'
    import FilterSidebar from './FilterSidebar.vue'

    export default {
        auth() {
            return {
                permission: 'responses.viewAny',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Inbox'
                }
            }
        },

        components: {
            'response-list': ResponseList,
            'response-view': ResponseView,
            'filter-sidebar': FilterSidebar,
        },

        computed: {
            ...mapGetters({
                response: 'inbox/getResponse'
            }),
        },

        methods: {
            ...mapActions({
                clear: 'inbox/clearResponse'
            }),
        },

        beforeRouteEnter(to, from, next) {
            store.dispatch('inbox/fetchForms').then((response) => {
                if (store.getters['inbox/getForms'].length) {
                    store.dispatch('inbox/selectForm', _.head(store.getters['inbox/getForms']))
                }

                next()
            })
        },
    }
</script>