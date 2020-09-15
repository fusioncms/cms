<template>
    <div class="roles-page">
        <portal to="title">
            <page-title icon="users">Role - {{ role.label }}</page-title>
        </portal>

        <portal to="actions">
            <ui-button key="view-all-btn" :to="{ name: 'roles' }" variant="secondary">Go Back</ui-button>
            <ui-button v-if="role.id" key="edit-role-btn" :to="{ name: 'roles.edit', params: {role: role.id} }" variant="primary">Edit Role</ui-button>
        </portal>

        <section-card title="General Information" description="General information about this user role.">
            <dl class="detail-list">
                <dt>Name</dt>
                <dd>{{ role.label }}</dd>
                <dt>Description</dt>
                <dd>{{ role.description }}</dd>
                <dt>Created</dt>
                <dd>{{ $moment(role.created_at).format('Y-MM-DD, hh:mm a') }}</dd>
                <dt>Last Updated</dt>
                <dd>{{ $moment(role.updated_at).format('Y-MM-DD, hh:mm a') }}</dd>
            </dl>
        </section-card>

        <!-- <section-card title="Permissions" description="A list of permissions this role has.">
            <ui-table ref="permissions" id="permissions" endpoint="/datatable/permissions" sort-by="name" no-actions key="permissions-table" show-page-status show-page-numbers show-page-nav show-page-ends>
                <template slot="name" slot-scope="table">
                    <code>{{ table.record.name }}</code>
                </template>

                <template slot="description" slot-scope="table">
                    <p>{{ table.record.description }}</p>
                </template>
            </ui-table>
        </section-card> -->
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: this.role.label || 'Loading...'
                }
            }
        },

        data() {
            return {
                role: {}
            }
        },

        beforeRouteEnter(to, from, next) {
            getRole(to.params.role, (error, role) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/roles')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.role = role

                        vm.$emit('updateHead')
                    })
                }
            })
        },
    }

    export function getRole(id, callback) {
        axios.get('/api/roles/' + id).then((response) => {
            let role = response.data.data

            callback(null, role)
        }).catch(function(error) {
            callback(new Error('The requested role could not be found'))
        })
    }
</script>