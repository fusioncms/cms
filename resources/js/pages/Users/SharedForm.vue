<template>
    <form-container>
        <portal to="actions">
            <div class="buttons">
                <p-button :to="{ name: 'users' }" variant="secondary">Go Back</p-button>
                <p-button variant="primary" @click.prevent="submit" :disabled="!form.hasChanges">Save</p-button>
            </div>
        </portal>

        <p-card>
            <p-card-body>
                <p-title-group
                    name="name"
                    autocomplete="off"
                    autofocus
                    required
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
                </p-title-group>

                <p-input-group
                    type="email"
                    name="email"
                    label="E-mail"
                    autocomplete="off"
                    :has-error="form.errors.has('email')"
                    :error-message="form.errors.get('email')"
                    required
                    v-model="form.email">
                </p-input-group>

                <p-tabs>
                    <p-tab name="Security">
                        <p-input-group
                            type="password"
                            name="password"
                            label="Password"
                            autocomplete="new-password"
                            :has-error="form.errors.has('password')"
                            :error-message="form.errors.get('password')"
                            required
                            v-model="form.password">
                        </p-input-group>

                        <p-input-group
                            type="password"
                            name="password_confirmation"
                            label="Confirm Password"
                            autocomplete="new-password"
                            :has-error="form.errors.has('password_confirmation')"
                            :error-message="form.errors.get('password_confirmation')"
                            required
                            v-model="form.password_confirmation">
                        </p-input-group>
                    </p-tab>
                </p-tabs>
            </p-card-body>
        </p-card>

        <template v-slot:sidebar>
            <p-card>
                <p-card-body>
                    <p-toggle
                        name="status"
                        label="Status"
                        v-model="form.status"
                        :true-value="1"
                        :false-value="0">
                    </p-toggle>

                    <p-select-group
                        name="role"
                        label="Role"
                        :options="roleOptions"
                        autocomplete="off"
                        :value="user.roles.name"
                        :has-error="form.errors.has('role')"
                        :error-message="form.errors.get('role')"
                        required
                        v-model="form.role">
                    </p-select-group>
                </p-card-body>
            </p-card>

            <p-definition-list v-if="user">
                <p-definition name="Status">
                    <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': user.status, 'text-danger-500': ! user.status}"></fa-icon> {{ user.status ? 'Enabled' : 'Disabled' }}
                </p-definition>

                <p-definition name="Verified">
                    <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': user.verified, 'text-danger-500': ! user.verified}"></fa-icon> {{ user.verified ? 'Yes' : 'No' }}
                </p-definition>

                <p-definition name="Registered">
                    {{ $moment(user.created_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>

                <p-definition name="Last Login">
                    <span v-if="user.logged_in_at">{{ $moment(user.logged_in_at.date).format('L') }}</span>
                    <span v-else>Never</span>
                </p-definition>
            </p-definition-list>

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