<template>
    <ui-card>
        <ui-card-header title="Recent News"></ui-card-header>

        <ui-card-body>
            <ul class="dashboard-news">
                <li class="dashboard-news__item" v-for="(entry, index) in feed" v-if="index <= 3" :key="entry.id">
                    <article> 
                        <header>
                            <ui-badge variant="primary" class="mr-2">Update</ui-badge>
                            <h3><a :href="entry.url" target="_blank">{{ entry.title }}</a></h3>
                            <ui-date :timestamp="entry.date_published"></ui-date> 
                        </header>
                        <p v-if="entry.content_text">{{ excerpt(entry.content_text) }} <a :href="entry.url" target="_blank">Read More</a></p>
                    </article>
                </li>
            </ul>
        </ui-card-body>
    </ui-card>
</template>

<script>
    import _ from 'lodash'
    
    export default {
        props: {
            feed: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        
        methods: {
            excerpt(item) {
                return _.truncate(item, { 'length': 150 })
            }
        }
    }
</script>