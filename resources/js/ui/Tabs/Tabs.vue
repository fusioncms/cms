<template>
    <div class="tabs">
        <ul class="tab__list">
            <li v-for="(tab, index) in tabs"
                :key="tab.name"
                class="tab w-1/4"
                :class="{'tab--active': tab.isActive}">

                <a
                    class="tab__link cursor-pointer flex justify-between items-center"
                    @click.prevent="select(tab.hash)"
                    @focus="select(tab.hash)">

                    <span>
                        {{ tab.name }}
                        <span class="text-gray-600 text-xs">
                            {{ tab.subtitle }}
                        </span>
                    </span>

                    <span
                        v-if="tab.remove && tab.isActive"
                        @click.prevent="tab.remove(index)"
                        class="flex items-center justify-center w-6 h-6 rounded hover:bg-gray-200 hover:text-gray-600">
                        
                        <fa-icon icon="times" class="fa-xs"></fa-icon>
                    </span>
                </a>
            </li>

             <li v-if="add" class="tab">
                <a class="tab__link cursor-pointer" @click.prevent="add()">
                    <fa-icon icon="plus" class="fa-fw text-xs text-gray-800"></fa-icon>
                </a>
            </li>
        </ul>

        <div class="tab__panel">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-tabs',

        data() {
            return {
                tabs: null
            }
        },

        props: {
            replace: {
                type: Boolean,
                default: false
            },

            add: {
                type: Function,
                default: false
            }
        },

        computed: {
            tab() {
                return this.tabs.find((tab) => tab.isActive)
            }
        },

        watch: {
            tabs(value) {
                if (! this.tab && value.length > 0) {
                    if (this.$route.hash)
                        this.select(this.$route.hash)
                    else
                        this.select(value[0].hash)
                }
            }
        },

        methods: {
            findBy(path, value) {
                return this.tabs.find((tab) =>
                    _.get(tab, path) && _.get(tab, path) == value)
            },

            select(hash) {
                const selected = this.findBy('hash', hash) || false

                if (selected) {
                    this.reset()

                    selected.activate()

                    if (this.replace)
                        this.$router.replace({ hash }).catch(err => {})
                }
            },

            reset() {
                this.tabs.forEach(tab => tab.isActive = false)
            }
        },

        created() {
            this.tabs = this.$children
        }
    }
</script>
