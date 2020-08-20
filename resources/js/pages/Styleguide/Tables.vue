<template>
    <p-card class="sg-tables">
        <p-card-header title="Tables"></p-card-header>

        <p-card-body>
            <p-table id="permissions" 
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
            </p-table>
        </p-card-body>
    </p-card>
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