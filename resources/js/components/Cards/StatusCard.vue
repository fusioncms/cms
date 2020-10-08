<template>
    <ui-card class="status-card">
        <ui-card-body>
            <div v-if="entry.status" class="status-card__status mb-2">
                <ui-status :value="entry.status" class="mr-3"></ui-status>
                <span>{{ entry.status ? 'Enabled' : 'Disabled' }}</span>
            </div>

            <div v-if="entry.created_at" class="status-card__date mb-2">
                <span>Created</span>
                {{ $moment(entry.created_at).format('Y-MM-DD @ h:mm:ss a') }}
            </div>

            <div v-if="entry.updated_at" class="status-card__date mb-2">
                <span>Updated</span>
                {{ $moment(entry.updated_at).format('Y-MM-DD @ h:mm:ss a') }}
            </div>

            <div v-if="entry.publish_at" class="status-card__date mb-2">
                <span>Published</span>
                {{ $moment(entry.publish_at).format('Y-MM-DD @ h:mm:ss a') }}
            </div>

            <div v-if="entry.expire_at" class="status-card__date mb-2">
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