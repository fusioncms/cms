<template>
    <div>
        <portal to="title">
            <page-title icon="map">Blueprints</page-title>
        </portal>

        <section-card v-for="(blueprints, group) in groups" :key="group" :title="group">
            <p-card class="p-px">
                <table class="table">
                    <tbody>
                        <tr v-for="blueprint in blueprints" :key="blueprint.name">
                            <td><router-link :to="{ name: 'blueprints.edit', params: {blueprint: blueprint.id} }">{{ blueprint.name }}</router-link></td>
                        </tr>
                    </tbody>
                </table>
            </p-card>
        </section-card>
    </div>
</template>

<script>
    export default {
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
            groups() {
                return _.groupBy(this.blueprints, 'group')
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/blueprints'),
            ]).then(axios.spread(function (blueprints) {
                next(function(vm) {
                    vm.blueprints = blueprints.data.data
                })
            }))
        },
    }
</script>
