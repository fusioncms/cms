<template>
    <div>
        <portal to="title">
            <page-title icon="map">Blueprints</page-title>
        </portal>

        <section-card v-for="(blueprints, structure) in structures" :key="structure" :title="structure">
            <table class="table">
                <tbody>
                    <tr v-for="blueprint in blueprints" :key="blueprint.name">
                        <td><router-link :to="{ name: 'blueprints.edit', params: {blueprint: blueprint.id} }">{{ blueprint.name }}</router-link></td>
                    </tr>
                </tbody>
            </table>
        </section-card>
    </div>
</template>

<script>
    export default {
        auth() {
            return {
                permission: 'blueprints.viewAny',
            }
        },

        head: {
            title() {
                return {
                    inner: 'Blueprints'
                }
            }
        },

        data() {
            return {
                blueprints: [],
            }
        },

        computed: {
            structures() {
                return _.groupBy(this.blueprints, 'structure')
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/blueprints'),
            ]).then(axios.spread(function (blueprints) {
                next(function(vm) {
                    vm.blueprints = _.reject(blueprints.data.data, function(blueprint) {
                        return blueprint.hidden == 1
                    })
                })
            }))
        },
    }
</script>
