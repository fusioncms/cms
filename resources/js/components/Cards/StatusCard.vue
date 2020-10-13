<template>
    <ui-card class="status-card">
        <ui-card-body>
            <div v-if="entry.status" class="status-card__item status-card__item--inline">
                <ui-status :value="entry.status" class="mr-3"></ui-status>
                <span>{{ entry.status ? 'Enabled' : 'Disabled' }}</span>
            </div>

            <div v-if="entry.table" class="status-card__item">
                <span>Database Table</span>
                <code>{{ entry.table }}</code>
            </div>

            <div v-if="entry.created_at" class="status-card__item">
                <span>Created</span>
                {{ $moment(entry.created_at).format('Y-MM-DD @ h:mm:ss a') }}
            </div>

            <div v-if="entry.updated_at" class="status-card__item">
                <span>Updated</span>
                {{ $moment(entry.updated_at).format('Y-MM-DD @ h:mm:ss a') }}
            </div>

            <div v-if="entry.publish_at" class="status-card__item">
                <span>Published</span>
                {{ $moment(entry.publish_at).format('Y-MM-DD @ h:mm:ss a') }}
            </div>

            <div v-if="entry.expire_at" class="status-card__item">
                <span>Expires</span>
                {{ $moment(entry.expire_at).format('Y-MM-DD @ h:mm:ss a') }}
            </div>
        </ui-card-body>
    </ui-card>
</template>

<script>
    export default {
        name: 'status-card',
        props: {
            entry: {
                type: Object
            }
        }
    }
</script>