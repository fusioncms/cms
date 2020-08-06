<template>
    <div class="breadcrumbs__item">
        <span v-if="divider" class="breadcrumbs__divider">
            <fa-icon icon="chevron-right"></fa-icon>
        </span>

        <router-link v-if="to" :to="to" class="breadcrumbs__link" @click.native="onClick($event)">
            <slot></slot>
        </router-link>

        <a v-else class="breadcrumbs__link" :href="href" @click="onClick($event)">
            <slot></slot>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'p-breadcrumb',

        props: {
            href: {
                required: false,
                default: '#',
                type: String,
            },

            to: {
                required: false,
                default: '',
                type: Array|Object|String,
            },

            divider: Boolean
        },

        methods: {
            onClick(event) {
                this.$emit('click', event)
            }
        },
    }
</script>