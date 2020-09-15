<template>
    <div class="user-page">
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

        <section-card v-if="user" title="Actions" description="Management actions that can be performed for this user.">
            <div class="mb-4">
                <span class="label">Verification Email</span>
                <p class="help mb-2">Re-send the verification email to this user.</p>
                <ui-button variant="secondary">Send Verification</ui-button>
            </div>

            <div class="mb-4">
                <span class="label">Password Reset</span>
                <p class="help mb-2">Force the user to reset their password upon next login attempt.</p>
                <ui-button variant="secondary">Reset Password</ui-button>
            </div>

            <div class="mb-4">
                <span class="label">Delete User</span>
                <p class="help mb-2">Once you delete this user, there is no going back. Please be certain.</p>
                <ui-button variant="danger">Delete User</ui-button>
            </div>
        </section-card>
    </div>
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