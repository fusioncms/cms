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

        <div class="row">
            <div class="col w-full sm:w-1/2 xl:w-1/3 xxl:w-1/4">
                <ui-card>
                    <ui-card-body>
                        Alpha
                    </ui-card-body>
                </ui-card>
            </div>

            <div class="col w-full sm:w-1/2 xl:w-1/3 xxl:w-1/4">
                <ui-card>
                    <ui-card-body>
                        Beta
                    </ui-card-body>
                </ui-card>
            </div>

            <div class="col w-full sm:w-1/2 xl:w-1/3 xxl:w-1/4">
                <ui-card>
                    <ui-card-body>
                        Charlie
                    </ui-card-body>
                </ui-card>
            </div>

            <div class="col w-full sm:w-1/2 xl:w-1/3 xxl:w-1/4">
                <ui-card>
                    <ui-card-body>
                        Delta
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
            }
        },

        beforeRouteEnter(to, from, next) {
            getSingle(to.params.single, (error, entry, matrix, fields) => {
                next((vm) => {
                    vm.single = matrix
                    vm.entry = entry
                    // vm.form   = new Form(fields, true)

                    vm.$emit('updateHead')
                })
            })
        },

        beforeRouteUpdate(to,from,next) {
            getSingle(to.params.single, (error, entry, matrix, fields) => {
                this.single = matrix
                this.entry = entry
                // this.form   = new Form(fields, true)

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
</script>