<template>
    <div>
        <ui-toolbar v-if="! noSearch">
            <slot name="toolbarPrepend"></slot>

            <!-- Search -->
            <ui-toolbar-group grow>
                <ui-label :fieldId="id + '-table-search'" hideLabel>Search</ui-label>
                <ui-input
                    :id="id + '-table-search'"
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
                <ui-dropdown :disabled="order === 'Save' " noArrow id="per-page-options" right>
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
            <!-- Order -->
            <div v-show="show_order">
                <ui-button v-show="order === 'Order' " :disabled="loading" @click.prevent="toggleOrder"><fa-icon class="mr-1" icon="ellipsis-v"></fa-icon>{{order}}</ui-button>
                <ui-button v-show="order === 'Save' " :disabled="loading" @click.prevent="toggleOrder" variant="primary"><fa-icon class="mr-1" icon="ellipsis-v"></fa-icon>{{order}}</ui-button>
            </div>

            <slot name="toolbarAppend"></slot>
        </ui-toolbar>

        <div v-show="loading" class="pb-2">Loading...</div>

        <div v-show="order === 'Order' " class="table-wrapper" v-if="records.length" :class="{'loading': loading}">
            <table :id="id" class="table" aria-live="polite">
                <!-- Table Head -->
                <thead>
                    <tr>
                        <th v-if="hasBulkActions" width="50px">
                            <div class="table__select-all">
                                <ui-checkbox
                                    name="toggle-select-all"
                                    id="toggle-select-all"
                                    :checked="selectable.length === selected.length"
                                    @input="toggleSelectAll"
                                    :indeterminate="selected.length > 0 && (selectable.length !== selected.length)"
                                ></ui-checkbox>
                            </div>
                        </th>

                        <th v-for="(column, index) in displayable"
                            v-show="! hasSelections"
                            :class="{'sortable': isSortable(column), 'active': (sort.key === column), 'w-96': (column === 'url'), ['th-' + column]: true}"
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

                        <th v-show="hasSelections" :colspan="displayable.length > 2 ? displayable.length - 1 : displayable.length">
                            <span class="table__heading">
                                {{ this.selected.length }} record{{ this.selected.length > 1 ? 's' : '' }} selected
                            </span>
                        </th>

                        <th v-show="hasSelections" :colspan="displayable.length > 2 ? 2 : 1" class="w-48">
                            <div class="bulk-actions">
                                <select name="bulk-actions" id="bulk-actions" class="field-select field-select--sm field-select--bordered" v-model="action" @change="showBulkActionConfirmation = true">
                                    <option selected disabled :value="null">Bulk Actions</option>

                                    <option v-for="(action, index) in allowedBulkActions" :key="action.name" :value="index">{{ action.name }}</option>
                                </select>
                            </div>
                        </th>

                        <th v-show="hasActions && ! hasSelections" class="w-20 col-actions">&nbsp;</th>
                    </tr>
                </thead>

                <!-- Table Body -->
                <tbody>
                    <tr v-for="(record, index) in records" :key="record[primaryKey] || index">
                        <td v-if="hasBulkActions">
                            <div class="flex flex-1">
                                <ui-checkbox
                                    v-if="isSelectable(record[primaryKey])"
                                    :name="'select-' + record[primaryKey] || index"
                                    :id="'select-' + record[primaryKey] || index"
                                    :native-value="record[primaryKey]"
                                    v-model="selected"
                                ></ui-checkbox>
                            </div>
                        </td>

                        <td v-for="column in displayable" :class="'td-' + column"
                            :key="column">
                            <span class="column-label">{{ column_names[column] || column }}</span>

                            <slot :name="column" :record="record">
                                <component
                                    v-if="column_types[column]" 
                                    :is="column_types[column]"
                                    :value="record[column]"
                                    :record="record"
                                />
                                <span v-else >{{ record[column] }}</span>
                            </slot>
                        </td>

                        <td class="'table__actions w-20 col-actions'" v-if="hasActions">
                            <slot name="actions" :record="record"></slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-show="order === 'Save' && ! loading" class="mb-4 xl:mb-6" >
            <VueNestable v-model="records" :threshold="32">
                <template slot-scope="{ item }">
                    <div class="flex">
                        <VueNestableHandle :item="item" class="flex items-center justify-center border-r w-8 text-gray-500 bg-gray-50 rounded-l">
                            <fa-icon :icon="['fas', 'grip-vertical']"></fa-icon>
                        </VueNestableHandle>
                        <div class="flex flex-1 items-center justify-between">
                            <div class="p-3 flex items-center" :class="{'font-bold': (item.url == '' || item.url == '#')}">
                                <ui-status v-show="show_status" :value="item.status" class="mr-2"></ui-status>
                                <router-link :to="{ name: link_name, params: {[link_param]: item.id} }">{{ item.name }}</router-link>
                            </div>
                        </div>
                    </div>
                </template>
            </VueNestable>
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

        <portal to="modals">
            <ui-modal v-if="action !== null" name="confirm-bulk-action" :title="'Confirm Bulk ' + this.allowedBulkActions[action].name" v-model="showBulkActionConfirmation">
                <p>Are you sure you want to perform this action against <b>{{ this.selected.length }}</b> record{{this.selected.length > 1 ? 's' : '' }}?</p>

                <template slot="footer">
                    <ui-button @click.prevent="confirmBulkAction" :loading="working" class="ml-3" variant="primary">Confirm</ui-button>
                    <ui-button @click.prevent="cancelBulkAction" v-if="! working" variant="secondary">Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    import _ from 'lodash'
    import axios from 'axios'
 import queryString from 'query-string'
 import { VueNestable, VueNestableHandle } from 'vue-nestable'

    export default {
        name: 'ui-table',

        components: {
            VueNestable,
            VueNestableHandle
        },

        props: {
            id: {
                required: true,
                type: String
            },
            bulk: {
                type: Boolean,
                default: true
            },
            refresh: {
                type: Number|Boolean,
                default: false
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
            saveSortBy: {
                type: Boolean,
                default: true,
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
                type: String,
                default: 'id'
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
            },
            reorder_route: {
                type: String,
                default: ''
            },
            link_name: {
                type: String,
                default: ''
            },
            link_param: {
                type: String,
                default: ''
            },
            show_status: {
                type: Boolean,
                default: false
            },
            show_order: {
                type: Boolean,
                default: true
            },
        },

        data() {
            return {
                action: null,
                showBulkActionConfirmation: false,
                initialLoad: true,
                loading: true,
                working: false,
                displayable: [],
                column_names: [],
                column_types: [],
                bulk_actions: [],
                bulk_actions_exempt: [],
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
                selected: [],
                order: 'Order',
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

            hasBulkActions() {
                console.log(this.bulk, this.selectable.length, this.allowedBulkActions.length)
                if (! this.bulk) return false
                if (! this.selectable.length > 0) return false
                if (! this.allowedBulkActions.length > 0) return false

                return true
            },

            hasSelections() {
                return this.selected.length > 0
            },

            selectable() {
                let vm = this

                return _.filter(this.records, (record) => {
                    return ! vm.bulk_actions_exempt.includes(record[vm.primaryKey])
                })
            },

            allowedBulkActions() {
                let vm = this

                return _.filter(this.bulk_actions, (action) => {
                    if (!action.permission) return true

                    return vm.$can(action.permission)
                })
            },
        },

        watch: {
            endpoint() {
                this.getRecords()
            },

            showBulkActionConfirmation(value) {
                if (value == false) {
                    this.action = null
                }
            },

            search: _.debounce(function(value) {
                this.pagination.currentPage = 1

                this.getRecords()
            }, 300)
        },

        methods: {
            toggleOrder() {
                if (this.order === 'Order') {
                    this.order = 'Save';
                    this.changePerPage(this.pagination.totalRecords + 1);
                }
                else {
                    const matrix_id = this.endpoint.split('/').at(-1);
                    this.loading = true
                    axios.post(this.reorder_route, {records: this.records}).then((response) => {
                        toast('Entries successfully saved.', 'success')
                        this.loading = false;
                        this.changePerPage(10);
                    }).catch((response) => {
                        toast(response.message, 'failed')
                        this.loading = false;
                        this.changePerPage(10);
                    });
                    this.order = 'Order';
                }
            },

            cancelBulkAction() {
                this.showBulkActionConfirmation = false
                this.action = null
            },

            confirmBulkAction() {
                let vm = this

                this.working = true

                axios.post(`${this.bulk_actions[this.action].route}`, {
                    records: this.selected
                }).then((response) => {
                    toast('Bulk action completed successfully.', 'success')

                    vm.getRecords()

                    vm.showBulkActionConfirmation = false
                    vm.selected = []
                    vm.action = null
                    vm.working = false
                })
            },

            isSelectable(id) {
                return ! this.bulk_actions_exempt.includes(id)
            },

            toggleSelectAll() {
                if (this.selected.length > 0) {
                    this.selected = []
                    return
                }

                this.selected = _.map(this.selectable, 'id')
            },

            getRecords() {
                this.loading = true

                return axios.get(`${this.endpoint}?${this.getQueryParameters()}`).then((response) => {
                    this.records = response.data.records.data
                    this.displayable = response.data.displayable
                    this.sortable = response.data.sortable
                    this.column_names = response.data.column_names
                    this.column_types = response.data.column_types
                    this.bulk_actions = response.data.bulk_actions
                    this.bulk_actions_exempt = response.data.bulk_actions_exempt
                    this.pagination.totalRecords = response.data.records.total
                    this.pagination.totalPages = response.data.records.last_page

                    this.loading = false
                    this.initialLoad = false

                    if (this.refresh && ! self._timer) {
                        this._timer = setTimeout(() => this.getRecords(), this.refresh)
                    }
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

                this.saveSortProperty()
            },

            saveSortProperty() {
                if (this.saveSortBy) {
                    window.localStorage.setItem('ui-table-sort-' + this.id + '-' + this.endpoint + '-' + window.location.pathname, JSON.stringify(this.sort))
                }
            },

            loadSortProperty() {
                try {
                    let sort = window.localStorage.getItem('ui-table-sort-' + this.id + '-' + this.endpoint + '-' + window.location.pathname)
                    if (sort) {
                        sort = JSON.parse(sort)
                        this.sort = sort
                    }
                } catch (error) {

                }
            },

            changePage(page) {
                this.pagination.currentPage = page

                this.getRecords()
            },

            changePerPage(page) {
                this.pagination.currentPage = 1
                this.pagination.perPage = page


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
            this.loadSortProperty()
            this.getRecords()
            this.listenForEvents()
        },

        destroyed() {
            clearTimeout(this._timer)
        }
    }
</script>
