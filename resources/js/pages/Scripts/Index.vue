<template>
    <div class="scripts-page">
        <portal to="title">
            <page-title icon="code">Scripts</page-title>
        </portal>

        <portal to="actions">
            <div class="buttons">
                <ui-button :to="{ name: 'dashboard', params: {single: 'asdf'} }" variant="primary">Create</ui-button>
            </div>
        </portal>

        <div class="row">
            <div class="col w-full">
                <ui-card>
                    <ui-card-body>
                        <ui-table key="scripts" class="scripts-table" id="scripts" :endpoint="endpoint" sort-by="name" :per-page="50">
                        </ui-table>
                    </ui-card-body>
                </ui-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        auth() {
            return {
                permission: 'scripts.viewAny',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Scripts'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/scripts',
                scripts: [],
            }
        },
    }
</script>