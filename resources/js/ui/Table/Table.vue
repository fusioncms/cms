<template>
    <div>
        <ui-toolbar>
            <slot name="toolbarPrepend"></slot>

            <!-- Search -->
            <ui-toolbar-group grow v-if="! noSearch">
                <ui-label :fieldId="id + '_table_search'" hideLabel>Search</ui-label>
                <ui-input
                    :id="id + '_table_search'"
                    name="search"
                    type="search"
                    placeholder="Search"
                    autocomplete="off"
                    :aria-controls="id"
                    v-model="search">
                </ui-input>
            </ui-toolbar-group>

            <!-- Page View -->
            <ui-toolbar-group>
                <ui-dropdown noArrow id="per-page-options" right>
                    <fa-icon icon="list"></fa-icon>
                    <span class="sr-only-mobile">View</span>

                    <template v-slot:menu>
                        <ui-dropdown-item>
                            <p>Results per page:</p>
                        </ui-dropdown-item>

                        <ui-dropdown-divider></ui-dropdown-divider>

                        <ui-dropdown-link v-for="(pages, index) in pagination.perPageOptions" @click.prevent="changePerPage(pages)" :key="index">
                            <div class="flex justify-between w-full items-center">
                                <span>{{ pages }}</span>
                                <fa-icon class="icon" icon="check" v-if="pages === pagination.perPage"></fa-icon>
                            </div>
                        </ui-dropdown-link>
                    </template>
                </ui-dropdown>
            </ui-toolbar-group>

            <!-- Sorting -->
            <ui-toolbar-group>
                <ui-dropdown noArrow id="sorting-options" right>
                    <fa-icon icon="sort-amount-down"></fa-icon>
                    <span class="sr-only-mobile">Sort</span>

                    <template v-slot:menu>
                        <ui-dropdown-item>
                            <p>Sort by:</p>
                        </ui-dropdown-item>

                        <ui-dropdown-divider></ui-dropdown-divider>

                        <ui-dropdown-link v-for="(column, index) in sortable" :key="column + '-sort' || index + '-sort'" @click.prevent="sortRecordsBy(column, sort.order)">
                            <div class="flex justify-between w-full items-center">
                                <span>{{ column_names[column] || column }}</span>
                                <fa-icon class="icon" icon="check" v-if="sort.key === column"></fa-icon>
                            </div>
                        </ui-dropdown-link>

                        <ui-dropdown-divider></ui-dropdown-divider>

                        <ui-dropdown-link @click.prevent="sortRecordsBy(sort.key, 'asc')">
                            <div class="flex justify-between w-full items-center">
                                <span>Ascending</span>
                                <fa-icon class="icon" icon="check" v-if="sort.order === 'asc'"></fa-icon>
                            </div>
                        </ui-dropdown-link>

                        <ui-dropdown-link @click.prevent="sortRecordsBy(sort.key, 'desc')">
                            <div class="flex justify-between w-full items-center">
                                <span>Descending</span>
                                <fa-icon class="icon" icon="check" v-if="sort.order === 'desc'"></fa-icon>
                            </div>
                        </ui-dropdown-link>
                    </template>
                </ui-dropdown>
            </ui-toolbar-group>

            <slot name="toolbarAppend"></slot>
        </ui-toolbar>

        <div class="table-wrapper" v-if="records.length" :class="{'loading': loading}">
            <table :id="id" class="table" aria-live="polite">
                <!-- Table Head -->
                <thead>
                    <tr>
                        <th v-for="(column, index) in displayable"
                            :class="{'sortable': isSortable(column), 'active': (sort.key === column)}"
                            :key="column[primaryKey] || index">
                            <a href="#" v-if="isSortable(column)" class="table__heading table__heading--link" @click.prevent="isSortable(column) && sortRecordsBy(column)" :aria-label="'Sort by ' + column_names[column] || column">
                                <span>{{ column_names[column] || column }}</span>

                                <div class="inline" v-if="isSortable(column)" aria-hidden="true">
                                    <fa-icon icon="sort" class="fa-fw" v-if="sort.key !== column"></fa-icon>
                                    <fa-icon icon="sort-up" class="fa-fw" v-if="sort.order === 'asc' && sort.key === column"></fa-icon>
                                    <fa-icon icon="sort-down" class="fa-fw" v-if="sort.order === 'desc' && sort.key === column"></fa-icon>
                                </div>
                            </a>

                            <span v-else class="table__heading">
                                {{ column_names[column] || column }}
                            </span>
                        </th>

                        <th v-if="hasActions" class="w-20">&nbsp;</th>
                    </tr>
                </thead>

                <!-- Table Body -->
                <tbody>
                    <tr v-for="(record, index) in records" :key="record[primaryKey] || index">
                        <td v-for="column in displayable"
                            :key="column">
                            <span class="column-label">{{ column_names[column] || column }}</span>
        
                            <slot :name="column" :record="record">
                                {{ record[column] }}
                            </slot>
                        </td>

                        <td class="table__actions" v-if="hasActions">
                            <slot name="actions" :record="record"></slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Pagination -->
        <div class="pagination-group" v-if="this.pagination.totalPages > 1">
            <div v-if="showPageStatus" class="pagination-group__item">
                <ui-pagination-status 
                    :total="this.pagination.totalPages"
                    :value="this.pagination.currentPage">
                </ui-pagination-status>
            </div>

            <div v-if="showPageNumbers || showPageNav || showPageEnds" class="pagination-group__item">
                <ui-pagination
                    @input="changePage($event)"
                    :showNumbers="showPageNumbers"
                    :showNav="showPageNav"
                    :showEnds="showPageEnds"
                    :total="this.pagination.totalPages"
                    :value="this.pagination.currentPage">
                </ui-pagination>
            </div>

            <div v-if="!hidePageSelect" class="pagination-group__item">
                <ui-pagination-select
                    @input="changePage($event)"
                    :label="pageSelectLabel"
                    :total="this.pagination.totalPages"
                    :value="this.pagination.currentPage">
                </ui-pagination-select>
            </div>
        </div>

        <!-- No Results -->
        <div v-if="!records.length && !initialLoad" class="no-bottom text-heading--md mb-0">
            <slot name="empty-state">
                <p>No results found.</p>
            </slot>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    import axios from 'axios'
    import queryString from 'query-string'

    export default {
        name: 'ui-table',

        props: {
            id: {
                required: true,
                type: String
            },
            noRecords: {
                type: String,
                default: 'No records to display'
            },
            endpoint: {
                required: true,
                type: String
            },
            sortBy: {
                type: String,
                default: 'id'
            },
            perPage: {
                type: Number,
                default: 10
            },
            sortIn: {
                type: String,
                default: 'asc'
            },
            noSearch: {
                type: Boolean,
                default: false
            },
            primaryKey: {
                required: false,
                type: String
            },
            showPageStatus: {
                type: Boolean,
                default: false
            },
            showPageNumbers: {
                type: Boolean,
                default: false
            },
            showPageNav: {
                type: Boolean,
                default: false
            },
            showPageEnds: {
                type: Boolean,
                default: false
            },
            hidePageSelect: {
                type: Boolean,
                default: false
            },
            pageSelectLabel: {
                type: String,
                default: 'Page'
            }
        },

        data() {
            return {
                initialLoad: true,
                loading: true,
                displayable: [],
                column_names: [],
                sortable: [],
                records: [],
                search: '',
                pagination: {
                    totalRecords: 0,
                    currentPage: 1,
                    totalPages: 0,
                    perPage: this.perPage,
                    perPageOptions: [
                        10,
                        50,
                        100,
                        250
                    ]
                },
                sort: {
                    key: this.sortBy,
                    order: this.sortIn,
                },
            }
        },

        computed: {
            columns() {
                return _.map(this.displayable, (option) => {
                    columns.push({
                        'label': this.column_names[option],
                        'value': option,
                    })
                })
            },

            hasActions() {
                return !!this.$slots.actions || !!this.$scopedSlots.actions
            },
        },

        watch: {
            endpoint() {
                this.getRecords()
            },

            search: _.debounce(function(value) {
                this.pagination.currentPage = 1

                this.getRecords()
            }, 300)
        },

        methods: {
            getRecords() {
                this.loading = true

                return axios.get(`${this.endpoint}?${this.getQueryParameters()}`).then((response) => {
                    this.records = response.data.records.data
                    this.displayable = response.data.displayable
                    this.sortable = response.data.sortable
                    this.column_names = response.data.column_names
                    this.pagination.totalRecords = response.data.records.total
                    this.pagination.totalPages = response.data.records.last_page

                    this.loading = false
                    this.initialLoad = false
                })
            },

            isSortable(column) {
                return _.includes(this.sortable, column)
            },

            getQueryParameters() {
                let params = {
                    sort:    (this.sort.order === 'desc' ? '-' : '') + this.sort.key,
                    page:    this.pagination.currentPage,
                    perPage: this.pagination.perPage,
                }

                if (this.search !== '') {
                    params['filter[search]'] = this.search
                }

                return queryString.stringify(params)
            },

            sortRecordsBy(column, order = false) {
                this.sort.key = column

                if (! order) {
                    this.sort.order = this.sort.order === 'asc' ? 'desc' : 'asc'
                } else {
                    this.sort.order = order
                }

                this.getRecords()
            },

            changePage(page) {
                this.pagination.currentPage = page

                this.getRecords()
            },

            changePerPage(page) {
                this.pagination.currentPage = 1
                this.pagination.perPage = page

                console.log(this.pagination.perPage)

                this.getRecords()
            },

            destroy(id) {
                axios.delete(`${this.endpoint}/${id}`).then(() => {
                    this.getRecords()
                })
            },

            listenForEvents() {
                bus().$on('refresh-datatable-' + this.id, (data) => {
                    this.getRecords()
                })
            }
        },

        created() {
            this.getRecords()
            this.listenForEvents()
        }
    }
</script>
