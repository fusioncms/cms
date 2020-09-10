<template>
    <div>
        <portal to="title">
            <page-title icon="key">Permissions</page-title>
        </portal>

        <div class="row">
            <div class="content-container">
                <ui-table id="permissions" :endpoint="endpoint" sort-by="name" :per-page="10" no-actions key="permissions_table">
                    <template slot="name" slot-scope="table">
                        <code>{{ table.record.name }}</code>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>
                </ui-table>
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
