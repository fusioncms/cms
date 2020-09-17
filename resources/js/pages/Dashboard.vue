<template>
    <div class="dashboard-page">
        <portal to="title">
            <page-title icon="grip-horizontal">Dashboard</page-title>
        </portal>

        <div class="row">
            <div class="dashboard-page__column">
                <quick-links :links="quicklinks"></quick-links>
            </div>

            <div class="dashboard-page__column">
                <analytics-overview></analytics-overview>
            </div>

            <div class="dashboard-page__column dashboard-page__column--two-thirds">
                <recent-activity :activities="activities"></recent-activity>
            </div>

            <div class="dashboard-page__column dashboard-page__column--third">
                <recent-news :feed="feed"></recent-news>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Dashboard'
                }
            }
        },
        data() {
            return {
                matrices: [],
                activities: [],
                feed: [],
                icon: '',
            }
        },

        computed: {
            quicklinks() {
                if (this.matrices) {
                    return _.filter(this.matrices, function(matrix) {
                        return matrix.quicklink == true
                    })
                }
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/matrices'),
                axios.get('/api/activity'),
                axios.get(process.env.MIX_NEWS_FEED || 'https://beta.getfusioncms.com/blog.json', {withCredentials: false}).catch(function() {
                    return {
                        data: {
                            items: [],
                        },
                    }
                })
            ]).then(axios.spread(function (matrices, activity, feed) {
                next(function(vm) {
                    vm.matrices = matrices.data.data
                    vm.activities = activity.data.data
                    vm.feed = feed.data.items
                })
            }))
        },
    }
</script>
