<template>
    <ui-card class="sg-tables">
        <ui-card-header title="Tables"></ui-card-header>

        <ui-card-body>
            <ui-table id="permissions" 
                endpoint="/datatable/permissions" 
                sort-by="name" 
                :per-page="10" 
                no-actions 
                key="permissions_table"
                showPageNumbers
                showPageNav
                showPageEnds
                showPageStatus>
                <template slot="name" slot-scope="table">
                    <code>{{ table.record.name }}</code>
                </template>

                <template slot="description" slot-scope="table">
                    <p>{{ table.record.description }}</p>
                </template>
            </ui-table>
        </ui-card-body>
    </ui-card>
</template>

<script>
    export default {
        computed: {
            endpoint() {
                return '/datatable/users'
            }
        }
    }
</script>