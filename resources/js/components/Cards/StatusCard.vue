<template>
    <ui-card class="status-card">
        <ui-card-body>
            <div v-if="entry.status" class="status-card__item status-card__item--inline">
                <ui-status :value="entry.status" class="status-card__label"></ui-status>
                <span>{{ entry.status ? 'Enabled' : 'Disabled' }}</span>
            </div>

            <div v-if="entry.table" class="status-card__item">
                <span class="status-card__label">Database Table</span>
                <code>{{ entry.table }}</code>
            </div>

            <div v-if="entry.created_at" class="status-card__item">
                <span v-if="user" class="status-card__label">Registered</span>
                <span v-else class="status-card__label">Created</span>
                {{ $moment(entry.created_at).format('Y-MM-DD @ h:mm:ss a') }}
            </div>

            <div v-if="entry.updated_at" class="status-card__item">
                <span class="status-card__label">Updated</span>
                {{ $moment(entry.updated_at).format('Y-MM-DD @ h:mm:ss a') }}
            </div>

            <div v-if="entry.publish_at" class="status-card__item">
                <span class="status-card__label">Published</span>
                {{ $moment(entry.publish_at).format('Y-MM-DD @ h:mm:ss a') }}
            </div>

            <div v-if="entry.expire_at" class="status-card__item">
                <span class="status-card__label">Expires</span>
                {{ $moment(entry.expire_at).format('Y-MM-DD @ h:mm:ss a') }}
            </div>

            <div v-if="user" class="status-card__item">
                <span class="status-card__label">Verified</span>
                <span v-if="entry.email_verified_at">{{ $moment(entry.email_verified_at).format('Y-MM-DD @ h:mm:ss a') }}</span>
                <span v-else>No</span>
            </div>

            <div v-if="user" class="status-card__item">
                <span class="status-card__label">Last Login</span>
                <span v-if="entry.logged_in_at">{{ $moment(entry.logged_in_at).format('Y-MM-DD @ h:mm:ss a') }}</span>
                <span v-else>Never</span>
            </div>

            <div v-if="user" class="status-card__item status-card__item--inline">
                <span class="status-card__label">Invalid Logins</span>
                {{ entry.invalid_logins }}
            </div>

            <div v-if="user" class="status-card__item">
                <span class="status-card__label">Last Invalid Login</span>
                <span v-if="entry.invalidly_logged_in_at">{{ $moment(entry.invalidly_logged_in_at).format('Y-MM-DD @ h:mm:ss a') }}</span>
                <span v-else>Never</span>
            </div>

            <div v-if="user" class="status-card__item">
                <span class="status-card__label">Password Changed</span>
                <span v-if="entry.password_changed_at">{{ $moment(entry.password_changed_at).format('Y-MM-DD @ h:mm:ss a') }}</span>
                <span v-else>Never</span>
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
            },
            user: {
                type: Boolean,
                default: false
            }
        }
    }
</script>