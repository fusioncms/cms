<template>
    <div>
        <portal to="title">
            <app-title icon="key">Permissions</app-title>
        </portal>

        <div class="row">
            <div class="content-container">
                <p-table id="permissions" :endpoint="endpoint" sort-by="name" :per-page="10" no-actions key="permissions_table">
                    <template slot="name" slot-scope="table">
                        <code>{{ table.record.name }}</code>
                    </template>

                    <template slot="guard_name" slot-scope="table">
                        <span class="badge">{{ table.record.guard_name }}</span>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>
                </p-table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Permissions'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/permissions',
            }
        }
    }
</script>
