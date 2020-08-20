<template>
    <nav aria-label="pagination">
        <ul class="pagination">
            <li v-if="showEnds && current != 1" class="pagination__item">
                <a class="pagination__link" href="#" icon @click.prevent="onClickPage(1)">
                    <span>First</span>
                </a>
            </li>

            <li v-if="showNav && current != 1" class="pagination__item">
                <a class="pagination__link" href="#" icon @click.prevent="onClickPreviousPage">
                    <span>Previous</span>
                </a>
            </li>

            <li v-if="this.current > 2"  class="pagination__item">
                <span>...</span>
            </li>

            <li v-if="showNumbers" v-for="page in pages" class="pagination__item" :key="page.name">
                <a class="pagination__link" :class="{ 'current': isPageActive(page.name) }" :aria-current="isPageActive(page.name) ? 'page' : null" :aria-disabled="isPageActive(page.name) ? 'true' : null" href="#" @click.prevent="onClickPage(page.name)">
                    <span>{{ page.name }}</span>
                </a>
            </li>

            <li v-if="this.current < (total - (maxVisiblePages - 2))"  class="pagination__item">
                <span>...</span>
            </li>
            
            <li v-if="showNav && current != total" class="pagination__item">
                <a class="pagination__link" href="#" icon @click.prevent="onClickNextPage">
                    <span>Next</span>
                </a>
            </li>

            <li v-if="showEnds && current != total" class="pagination__item">
                <a class="pagination__link" href="#" icon @click.prevent="onClickPage(total)">
                    <span>Last</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'p-pagination',

        props: {
            maxVisiblePages: {
                type: Number,
                default: 3
            },
            showNumbers: {
                type: Boolean,
                default: true
            },
            showNav: {
                type: Boolean,
                default: true
            },
            showEnds: {
                type: Boolean,
                default: true
            },
            total: {
                required: true,
                type: Number,
            },
            value: {
                required: true,
                type: Number,
            }
        },

        computed: {
            current: {
                get() {
                    return this.value
                },

                set(value) {
                    this.$emit('input', value)
                }
            },

            startPage() {
                let startPage = 1

                if (this.current === 1) {
                    return startPage
                }

                if (this.current === this.total) {
                    startPage = this.total - this.maxVisiblePages + 1
                } else {
                    if (this.current > (this.total - this.maxVisiblePages + 1)) {
                        startPage = this.total - this.maxVisiblePages + 1
                    } else { 
                        startPage = this.current - 1 
                    }
                }

                if (startPage === 0) {
                    startPage = 1
                }

                return startPage
            },

            endPage() {
                return Math.min(this.startPage + this.maxVisiblePages - 1, this.total)
            },

            pages() {
                const range = []

                for (let i = this.startPage; i <= this.endPage; i += 1) {
                    range.push({
                        name: i,
                        isDisabled: i === this.current
                    })
                }

                return range
            },

            isOnFirstPage() {
                return this.current === 1
            },

            isOnLastPage() {
                return this.current === this.total
            },
        },

        watch: {
            maxVisiblePages(value) {
                if (value < 3) this.maxVisiblePages = 3
            }
        },

        methods: {
            onClickFirstPage() {
                this.$emit('input', 1)
                this.$emit('first')
            },

            onClickLastPage() {
                this.$emit('input', this.total)
                this.$emit('last')
            },

            onClickPage(page) {
                if (this.current != page) {
                    this.$emit('input', page)
                }
            },

            onClickPreviousPage() {
                let previousPage = this.current - 1

                if (previousPage >= 1) {
                    this.$emit('input', previousPage)
                    this.$emit('next')
                }
            },

            onClickNextPage() {
                let nextPage = this.current + 1

                if (nextPage <= this.endPage) {
                    this.$emit('input', nextPage)
                    this.$emit('next')
                }
            },

            isPageActive(page) {
                return this.current === page
            }
        }
    }
</script>
