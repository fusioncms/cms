<template>
    <form-container>
        <portal to="actions">
            <div class="buttons">
                <ui-button :to="{ name: 'users' }" variant="secondary">Go Back</ui-button>
                <ui-button variant="primary" @click.prevent="submit" :disabled="!form.hasChanges">Save</ui-button>
            </div>
        </portal>

        <section-card title="General Information" description="General information about this user.">
            <ui-input-group
                id="user-name"
                name="name"
                label="Name"
                autocomplete="off"
                autofocus
                required
                :has-error="form.errors.has('name')"
                :error-message="form.errors.get('name')"
                v-model="form.name">
            </ui-input-group>

            <ui-input-group
                id="user-id"
                type="email"
                name="email"
                label="E-mail"
                autocomplete="off"
                :has-error="form.errors.has('email')"
                :error-message="form.errors.get('email')"
                required
                v-model="form.email">
            </ui-input-group>

            <ui-toggle
                id="user-status"
                name="status"
                label="Status"
                v-model="form.status"
                :true-value="1"
                :false-value="0">
            </ui-toggle>
        </section-card>

        <section-card title="Permissions" description="Select the role to determine which areas of the website this user can access.">
            <ui-select-group
                id="user-role"
                name="role"
                label="Role"
                :options="roleOptions"
                autocomplete="off"
                :value="user ? user.roles.name : null"
                :has-error="form.errors.has('role')"
                :error-message="form.errors.get('role')"
                required
                v-model="form.role">
            </ui-select-group>
        </section-card>

        <section-card title="Security" description="Configure this user's security details.">
            <ui-password-group
                id="user-password"
                type="password"
                name="password"
                label="Password"
                autocomplete="new-password"
                :has-error="form.errors.has('password')"
                :error-message="form.errors.get('password')"
                v-model="form.password">
            </ui-password-group>

            <ui-password-group
                id="user-password-confirm"
                type="password"
                name="password_confirmation"
                label="Confirm Password"
                autocomplete="new-password"
                :has-error="form.errors.has('password_confirmation')"
                :error-message="form.errors.get('password_confirmation')"
                v-model="form.password_confirmation">
            </ui-password-group>
        </section-card>

        <template v-slot:sidebar>
            <ui-definition-list v-if="user">
                <ui-definition name="Status">
                    <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': user.status, 'text-danger-500': ! user.status}"></fa-icon> {{ user.status ? 'Enabled' : 'Disabled' }}
                </ui-definition>

                <ui-definition name="Verified">
                    <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': user.verified, 'text-danger-500': ! user.verified}"></fa-icon> {{ user.verified ? 'Yes' : 'No' }}
                </ui-definition>

                <ui-definition name="Registered">
                    {{ $moment(user.created_at).format('Y-MM-DD, hh:mm a') }}
                </ui-definition>

                <ui-definition name="Last Login">
                    <span v-if="user.logged_in_at">{{ $moment(user.logged_in_at.date).format('L') }}</span>
                    <span v-else>Never</span>
                </ui-definition>
            </ui-definition-list>

            <slot name="sidebar"></slot>
        </template>
    </form-container>
</template>

<script>
    export default {
        mixins: [
            require('../../mixins/roles').default
        ],

        props: {
            form: {
                type: Object,
                required: true
            },
            submit: {
                required: true
            },
            roles: {
                type: Array,
                required: true
            },
            user: {
                type: Object,
                required: false
            }
        },

        computed: {
            roleOptions() {
                const roles = _.filter(this.roles, (role) => this.isAssignable(role.name))

                return _.map(roles, (role) => {
                    return {
                        label: role.label,
                        value: role.name
                    }
                })
            }
        }
    }
</script>