<template>
    <div class="user-page">
        <portal to="actions">
            <div class="buttons">
                <ui-button key="go-back-btn" :to="{ name: 'users' }" variant="secondary">Go Back</ui-button>
                <ui-button key="save-btn" variant="primary" @click.prevent="submit" :disabled="!form.hasChanges">Save</ui-button>
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
                :value="form.role"
                :has-error="form.errors.has('role')"
                :error-message="form.errors.get('role')"
                required
                v-model="form.role">
            </ui-select-group>
        </section-card>

        <section-card v-if="canEditPassword" title="Security" description="Configure this user's security details.">
            <ui-fieldset :help="user ? 'Only fill out the password fields below if you intend to update the user account password.' : null">
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
            </ui-fieldset>
        </section-card>

        <section-card v-if="user" title="Actions" description="Management actions that can be performed for this user.">
            <div class="mb-4">
                <span class="label">Verification Email</span>
                <p class="help mb-2">Re-send the verification email to this user.</p>
                <ui-button variant="secondary" v-modal:verify-user>Send Verification</ui-button>
            </div>

            <div class="mb-4">
                <span class="label">Password Reset</span>
                <p class="help mb-2">Re-send password reset email to this user.</p>
                <ui-button variant="secondary" v-modal:password-user>Reset Password</ui-button>
            </div>

            <div class="mb-4">
                <span class="label">Expire Password</span>
                <p class="help mb-2">Force the user to reset their password upon next login attempt.</p>
                <ui-button variant="secondary" v-modal:expire-password>Expire Password</ui-button>
            </div>

            <div class="mb-4">
                <span class="label">Delete User</span>
                <p class="help mb-2">Once you delete this user, there is no going back. Please be certain.</p>
                <ui-button variant="danger" v-modal:delete-user>Delete User</ui-button>
            </div>
        </section-card>

        <portal to="modals">
            <ui-modal name="verify-user" title="Verification Email" key="verify_user">
                <p>Are you sure you want to re-send the verification email to this user?</p>

                <template slot="footer">
                    <ui-button v-modal:verify-user @click="emailVerification" class="ml-3">Confirm</ui-button>
                    <ui-button v-modal:verify-user>Cancel</ui-button>
                </template>
            </ui-modal>

            <ui-modal name="password-user" title="Password Reset" key="password_user">
                <p>Are you sure you want to send this user a password reset notification?</p>

                <template slot="footer">
                    <ui-button v-modal:password-user @click="passwordReset" class="ml-3">Confirm</ui-button>
                    <ui-button v-modal:password-user>Cancel</ui-button>
                </template>
            </ui-modal>

            <ui-modal name="expire-password" title="Expire Password" key="password_expire">
                <p>Are you sure you want to force user to reset their password upon next login?</p>

                <template slot="footer" slot-scope="user">
                    <ui-button v-modal:expire-password @click="passwordExpire" class="ml-3">Confirm</ui-button>
                    <ui-button v-modal:expire-password>Cancel</ui-button>
                </template>
            </ui-modal>

            <ui-modal name="delete-user" title="Delete User" key="delete_user">
                <p>Are you sure you want to permenantly delete this user?</p>

                <template slot="footer">
                    <ui-button v-modal:delete-user @click="destroy" variant="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-user>Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
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
                const roles = _.filter(this.roles, (role) => this.isAssignable(role.name, role.level))

                return _.map(roles, (role) => {
                    return {
                        label: role.name,
                        value: role.handle
                    }
                })
            },

            canEditPassword() {
                return this.user &&
                       this.$store.state.auth.user &&
                       this.user.id == this.$store.state.auth.user.id
            }
        },

        methods: {
            destroy() {
                axios.delete(`/api/users/${this.user.id}`)
                    .then((response) => {
                        toast('User successfully removed from system.', 'success')

                        this.$router.push('/users')
                    }).catch((response) => {
                        toast(response.response.data.message, 'failed')
                    })
            },

            emailVerification() {
                axios.post(`/api/users/${this.user.id}/verify`)
                    .then((response) => {
                        toast('Email verification notification has been sent to user.', 'success')
                    }).catch((response) => {
                        toast(response.response.data.message, 'failed')
                    })
            },

            passwordReset() {
                axios.post(`/api/users/${this.user.id}/reset-password`)
                    .then((response) => {
                        toast('Password reset notification has been sent to user.', 'success')
                    }).catch((response) => {
                        toast(response.response.data.message, 'failed')
                    })
            },

            passwordExpire() {
                axios.post(`/api/users/${this.user.id}/expire-password`)
                    .then((response) => {
                        toast('User password has been set as expired.', 'success')
                    }).catch((response) => {
                        toast(response.response.data.message, 'failed')
                    })
            }
        }
    }
</script>