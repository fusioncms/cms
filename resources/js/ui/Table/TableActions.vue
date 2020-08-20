<template>
    <p-dropdown noArrow :id="id" right>
        <fa-icon icon="ellipsis-h" class="fa-fw"></fa-icon>
        <span class="sr-only">Actions</span>

        <template v-slot:menu>
            <slot></slot>
        </template>
    </p-dropdown>
</template>

<script>
    export default {
        name: 'p-table-actions',

        props: {
            id: {
                required: true
            }
        }
    }
</script>