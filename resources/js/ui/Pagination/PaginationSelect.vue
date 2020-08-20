<template>
    <div class="pagination-select">
        <label>{{ label }}</label>
        <select v-model="current">
            <option v-for="page in pages" :value="page.value">{{ page.value }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'p-pagination-select',

        props: {
            total: {
                required: true,
                type: Number
            },
            value: {
                required: true,
                type: Number,
            },
            label: {
                type: String,
                default: 'Page'
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
            
            pages() {
                const pages = []

                for (let i = 1; i <= this.total; i += 1) {
                    pages.push({
                        value: i
                    })
                }

                return pages
            },
        }
    }
</script>