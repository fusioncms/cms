<template>
    <div class="card">
        <div class="card__header">
            <h3 class="card__title">Recent Activity</h3>
        </div>

        <div class="card__body">
            <ui-table key="recent-activities" class="recent-activities-table" id="recent-activities" :endpoint="endpoint" sort-by="created_at" sort-in="desc" :per-page="10">
                <template slot="causer.name" slot-scope="table">
                    <router-link :to="{ name: 'users.edit', params: {user: table.record.causer.id} }">{{ table.record.causer.name }}</router-link>
                </template>

                <template slot="description" slot-scope="table">
                    <div class="flex items-center">
                        <div class="mr-4 w-3">
                            <fa-icon v-if="table.record.properties.icon" :icon="['fas', table.record.properties.icon]" class="fa-fw"></fa-icon>
                            <fa-icon v-else class="fa-xs fa-fw" :icon="['fas', 'circle']"></fa-icon>
                        </div>

                        {{ table.record.description }}

                        <router-link :to="'/' + table.record.properties.link" v-if="table.record.properties.link" class="ml-2">
                            <fa-icon class="fa-fw fa-sm" :icon="['fas', 'link']"></fa-icon>
                            <span class="sr-only">Link to related property</span>
                        </router-link>
                    </div>
                </template>

                <template slot="created_at" slot-scope="table">
                    <ui-datetime :timestamp="table.record.created_at"></ui-datetime>
                </template>
            </ui-table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                'endpoint': '/datatable/activities',
            }
        }
    }
</script>