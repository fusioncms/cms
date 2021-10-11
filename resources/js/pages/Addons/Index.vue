<template>
    <div class="form-page">
        <portal to="title">
            <page-title icon="puzzle-piece">Addons</page-title>
        </portal>

        <ui-card>
            <ui-card-body>
                <ui-table :endpoint="endpoint" id="addons" sort-by="name" primary-key="name" key="addons_table">
                    <template slot="version" slot-scope="table">
                        <code>{{ table.record.version }}</code>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>
                </ui-table>
            </ui-card-body>
        </ui-card>
    </div>
</template>

<script>
    export default {
        auth() {
            return {
                permission: 'addons.viewAny',
            }
        },

        data() {
            return {
                endpoint: '/datatable/addons',
            }
        }
    }
</script>