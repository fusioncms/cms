<template>
    <ui-dropdown noArrow :id="id" right>
        <fa-icon icon="ellipsis-h" class="fa-fw"></fa-icon>
        <span class="sr-only">Actions</span>

        <template v-slot:menu>
            <slot></slot>
        </template>
    </ui-dropdown>
</template>

<script>
    export default {
        name: 'ui-table-actions',

        props: {
            id: {
                required: true
            }
        }
    }
</script>