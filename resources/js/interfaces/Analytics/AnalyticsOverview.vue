<template>
    <ui-card v-if="isValid">
        <ui-card-header title="Analytics: Last 30 Days"></ui-card-header>

        <ui-card-body v-if="isValid">
            <div class="analytics">
                <div class="analytics__stat">
                    <div class="analytics__stat-label">
                        <h3>Unique Visitors</h3>

                        <ui-tooltip>
                            <template>
                                <span class="icon icon--info icon--xs">
                                    <fa-icon icon="question"></fa-icon>
                                </span>
                            </template>
                            <template slot="content">
                                <span id="analytic-visitors">Total unique visitors, or sessions, accessing all pages of the site.</span>
                            </template>
                        </ui-tooltip>
                    </div>

                    <span class="analytics__stat-value" aria-labelledby="analytic-visitors">{{ totalVisitors }}</span>
                </div>

                <div class="analytics__stat">
                    <div class="analytics__stat-label">
                        <h3>Total Page Views</h3>

                        <ui-tooltip>
                            <template>
                                <span class="icon icon--info icon--xs">
                                    <fa-icon icon="question"></fa-icon>
                                </span>
                            </template>
                            <template slot="content">
                                <span id="analytic-total-views">Total number of pages viewed by all visitors.</span>
                            </template>
                        </ui-tooltip>
                    </div>

                    <span class="analytics__stat-value" aria-labelledby="analytic-total-views">{{ totalPageViews }}</span>
                </div>

                <div class="analytics__stat">
                    <div class="analytics__stat-label">
                        <h3>Bounce Rate</h3>

                        <ui-tooltip>
                            <template>
                                <span class="icon icon--info icon--xs">
                                    <fa-icon icon="question"></fa-icon>
                                </span>
                            </template>
                            <template slot="content">
                                <span id="analytic-bounce-rate"> Percentage of visits or sessions where the user leaves after viewing a single page.</span>
                            </template>
                        </ui-tooltip>
                    </div>

                    <span class="analytics__stat-value" aria-labelledby="analytic-bounce-rate">{{ bounceRate }}</span>
                </div>

                <div class="analytics__stat">
                    <div class="analytics__stat-label">
                        <h3>Session Duration</h3>

                        <ui-tooltip>
                            <template>
                                <span class="icon icon--info icon--xs">
                                    <fa-icon icon="question"></fa-icon>
                                </span>
                            </template>
                            <template slot="content">
                                <span id="analytic-duration">Average length of time that a user spends on the site before leaving.</span>
                            </template>
                        </ui-tooltip>
                    </div>

                    <span class="analytics__stat-value" aria-labelledby="analytic-duration">{{ sessionDuration }}</span>
                </div>
            </div>

            <apex-chart v-show="isValid && isReady" width="100%" height="350" :options="options" :series="series"></apex-chart>
        </ui-card-body>

        <ui-card-body v-if="isValid === false">>
            <p>Configure your Google Analytic settings to gain insight about your website <fa-icon class="text-emoji" :icon="['fas', 'hand-peace']"></fa-icon></p>
            <ui-button to="/settings/google_analytics#insights"><fa-icon :icon="['fas', 'cog']" class="mr-2"></fa-icon> Go to settings</ui-button>
        </ui-card-body>

        <ui-card-body v-if="isValid === null">
            <fa-icon :icon="['fas', 'circle-notch']" class="fa-spin mr-3"></fa-icon> Loading overview...
        </ui-card-body>
    </ui-card>
</template>

<script>
    import moment from 'moment-timezone'

    export default {
        name: 'analytics-overview',

        data() {
            return {
                isValid: null,
                isReady: false,
                dates: ['loading'],
                visitors: [0, 1, 2, 3],
                pageviews: [0, 1, 2, 3],
                bounceRates: [0, 1, 2, 3],
                sessionDuration: null,
                bounceRate: null,
                totalVisitors: null,
                totalPageViews: null,
            }
        },

        computed: {
            options() {
                return {
                    responsive: [{
                        breakpoint: 640,
                        options: {
                            yaxis: {
                                show: false,
                            },
                            xaxis: {
                                labels: {
                                    show: false,
                                }
                            }
                        }
                    }],
                    chart: {
                        id: 'analytics-overview',
                        height: 350,
                        stacked: false,
                        toolbar: {
                            show: true,
                            tools: {
                                download: true,
                                selection: false,
                                zoom: false,
                                zoomin: false,
                                zoomout: false,
                                pan: false,
                                reset: false,
                            },
                        },
                    },
                    colors: ['#FF5722', '#4DD0E1', '#EDF2F7'],
                    stroke: {
                        width: [0, 4, 2],
                        curve: ['smooth', 'smooth', 'smooth']
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '33%',
                        },
                    },
                    fill: {
                        opacity: [0.85, 0.25, 1],
                        gradient: {
                            inverseColors: false,
                            shade: 'light',
                            type: "vertical",
                            opacityFrom: 0.85,
                            opacityTo: 0.55,
                            stops: [0, 100, 100, 100]
                        }
                    },
                    markers: {
                        size: 0
                    },
                    xaxis: {
                        categories: this.dates,
                        labels: {
                            show: true
                        }
                    },
                    yaxis: [
                        {
                            seriesName: 'Visitors',
                            opposite: false,
                            title: {
                                text: 'Visitors',
                            },
                        },
                        {
                            seriesName: 'Pageviews',
                            opposite: false,
                            title: {
                                text: 'Pageviews',
                            },
                        },
                        {
                            seriesName: 'Bounces',
                            opposite: true,
                            title: {
                                text: "Bounces (percentage of visitors)",
                            },
                            labels: {
                                formatter: (val) => { return val + '%' },
                            }
                        },
                    ]
                }
            },

            series() {
                return [
                    {
                        name: 'Visitors',
                        type: 'column',
                        data: this.visitors
                    },

                    {
                        name: 'Pageviews',
                        type: 'area',
                        data: this.pageviews
                    },

                    {
                        name: 'Bounces',
                        type: 'area',
                        data: this.bounceRates
                    }
                ]
            }
        },

        methods: {
            secondsToString(seconds) {
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

                return str
            }
        },

        mounted() {
            axios.get('/api/insights/check').then((response) => {
                this.isValid = response.data.status

                if (this.isValid == 'OK') {
                    axios.all([
                        axios.get('/api/insights/overview'),
                    ]).then(axios.spread((insight) => {
                        this.sessionDuration = this.secondsToString(insight.data.data.averageSessionDuration)
                        this.bounceRate = _.floor(insight.data.data.bounceRate, 2) + '%'
                        this.totalVisitors = Number(insight.data.data.totalVisitors).toLocaleString()
                        this.totalPageViews = Number(insight.data.data.totalPageViews).toLocaleString()
                        this.visitors = _.map(insight.data.data.daily, 'visitors')
                        this.pageviews = _.map(insight.data.data.daily, 'pageViews')
                        this.bounceRates = _.map(insight.data.data.daily, 'bounceRate')
                        this.dates = _.map(insight.data.data.daily, function(o) {
                            let date = new Date(o.date)

                            return moment.parseZone(date).format('MM/DD')
                        })

                        this.isReady = true
                    }))
                } else if (this.isValid == 'failed') {
                    toast('Insights error: ' + response.data.message, 'failed')
                }
            })
        }
    }
</script>
