<template>
    <div class="permissions-page">
        <portal to="title">
            <page-title icon="key">Permissions</page-title>
        </portal>

        <ui-card>
            <ui-card-body>
                <ui-table key="permissions" class="permissions-table" id="permissions" :endpoint="endpoint" sort-by="name" no-actions show-page-status show-page-numbers show-page-nav show-page-ends>
                    <template slot="name" slot-scope="table">
                        <code>{{ table.record.name }}</code>
                    </template>

                    <template slot="description" slot-scope="table">
                        <p>{{ table.record.description }}</p>
                    </template>
                </ui-table>
                </ui-card-body>
        </ui-card>
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
