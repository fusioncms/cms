<template>
    <div class="single-page">
        <portal to="title">
            <page-title :icon="single.icon || 'pencil-alt'" :subtitle="single.description">{{ single.reference_singular }}</page-title>
        </portal>

        <portal to="actions">
            <div class="buttons">
                <ui-button v-if="$mq != 'sm'" :to="{ name: 'dashboard' }" variant="secondary">Go Back</ui-button>
                <ui-button v-if="single.slug" :to="{ name: 'single.edit', params: {single: single.slug} }" variant="primary">Edit</ui-button>
            </div>
        </portal>

        <div class="row" v-if="isValid">
            <div class="col w-full sm:w-1/2 xl:w-1/4">
                <ui-card>
                    <ui-card-body>
                        <div class="analytics">
                            <div class="analytics__stat">
                                <div class="analytics__stat-label">
                                    <h3>Total Page Views</h3>
                                </div>

                                <span class="analytics__stat-value" aria-labelledby="analytic-visitors">{{ totalPageViews }}</span>
                            </div>
                        </div>
                    </ui-card-body>
                </ui-card>
            </div>

            <div class="col w-full sm:w-1/2 xl:w-1/3 xxl:w-1/4">
                <ui-card>
                    <ui-card-body>
                        <div class="analytics">
                            <div class="analytics__stat">
                                <div class="analytics__stat-label">
                                    <h3>Total Visitors</h3>
                                </div>

                                <span class="analytics__stat-value" aria-labelledby="analytic-visitors">{{ totalVisitors }}</span>
                            </div>
                        </div>
                    </ui-card-body>
                </ui-card>
            </div>

            <div class="col w-full sm:w-1/2 xl:w-1/3 xxl:w-1/4">
                <ui-card>
                    <ui-card-body>
                        <div class="analytics">
                            <div class="analytics__stat">
                                <div class="analytics__stat-label">
                                    <h3>Bounce Rate</h3>
                                </div>

                                <span class="analytics__stat-value" aria-labelledby="analytic-visitors">{{ bounceRate }}</span>
                            </div>
                        </div>
                    </ui-card-body>
                </ui-card>
            </div>

            <div class="col w-full sm:w-1/2 xl:w-1/3 xxl:w-1/4">
                <ui-card>
                    <ui-card-body>
                        <div class="analytics">
                            <div class="analytics__stat">
                                <div class="analytics__stat-label">
                                    <h3>Average Session</h3>
                                </div>

                                <span class="analytics__stat-value" aria-labelledby="analytic-visitors">{{ sessionDuration }}</span>
                            </div>
                        </div>
                    </ui-card-body>
                </ui-card>
            </div>
        </div>

        <div class="row">
            <div class="col w-full">
                <ui-card>
                    <ui-card-body>
                        Associated collection datatable
                    </ui-card-body>
                </ui-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: _.has(this.single, 'name') ? this.single.name : 'Loading...'
                }
            }
        },

        data() {
            return {
                single: {},
                entry: {},
                isValid: null,
                sessionDuration: null,
                bounceRate: null,
                totalVisitors: null,
                totalPageViews: null,
            }
        },

        beforeRouteEnter(to, from, next) {
            var sessionDuration = null
            var bounceRate = null
            var totalVisitors = null
            var totalPageViews = null
            var isValid = null

            getSingle(to.params.single, (error, entry, matrix, fields) => {
                axios.get('/api/insights/check').then((response) => {
                    isValid = response.data.status

                    if (isValid == 'OK') {
                        axios.all([
                            axios.get('/api/singles/' + matrix.slug +'/insight'),
                        ]).then(axios.spread((insight) => {
                            console.log('inside function')

                            sessionDuration = secondsToString(insight.data.data.averageSessionDuration)
                            bounceRate = _.floor(insight.data.data.bounceRate, 2) + '%'
                            totalVisitors = Number(insight.data.data.totalVisitors).toLocaleString()
                            totalPageViews = Number(insight.data.data.totalPageViews).toLocaleString()

                            next((vm) => {
                                vm.single = matrix
                                vm.entry = entry
                                vm.isValid = isValid
                                vm.sessionDuration = sessionDuration
                                vm.bounceRate = bounceRate
                                vm.totalVisitors = totalVisitors
                                vm.totalPageViews = totalPageViews

                                vm.$emit('updateHead')
                            })
                        }))
                    } else if (this.isValid == 'failed') {
                        console.error('Insights error: ' + response.data.message)
                    }

                    // next((vm) => {
                    //     vm.single = matrix
                    //     vm.entry = entry
                    //     vm.isValid = isValid
                    //     vm.sessionDuration = sessionDuration
                    //     vm.bounceRate = bounceRate
                    //     vm.totalVisitors = totalVisitors
                    //     vm.totalPageViews = totalPageViews

                    //     vm.$emit('updateHead')
                    // })
                })
            })
        },

        beforeRouteUpdate(to,from,next) {
            getSingle(to.params.single, (error, entry, matrix, fields) => {
                this.single = matrix
                this.entry = entry

                this.$emit('updateHead')
            })

            next()
        }
    }

    export function getSingle(slug, callback) {
        axios.get('/api/singles/' + slug).then((response) => {
            let entry = {}
            let matrix = {}

            if (_.has(response, 'data.data.single')) {
                matrix = response.data.data.matrix
                entry   = response.data.data.single
            } else {
                matrix = response.data.data
                entry  = {
                    name: matrix.name,
                    slug: matrix.slug,
                    publish_at: null,
                    expire_at: null,
                    status: 1
                }
            }

            let fields = {
                name: entry.name,
                slug: entry.slug,
                publish_at: entry.publish_at,
                expire_at: entry.expire_at,
                status: entry.status,
            }

            _.forEach(matrix.blueprint.sections, function(section) {
                _.forEach(section.fields, function(field) {
                    fields[field.handle] = entry[field.handle]
                })
            })

            callback(null, entry, matrix, fields)
        }).catch(function(error) {
            callback(new Error('The requested entry could not be found'))
        })
    }

    export function secondsToString(seconds) {
        let str = ''

        let hours = _.floor((seconds %= 86400) / 3600)
        let minutes = _.floor((seconds %= 3600) / 60)
        seconds = _.floor(seconds % 60)

        if (hours) {
            str += hours + 'h '
        }

        if (minutes) {
            str += minutes + 'm '
        }

        if (seconds) {
            str += seconds + 's'
        }

        if (str == '') {
            str = seconds + 's'
        }

        return str
    }
</script>