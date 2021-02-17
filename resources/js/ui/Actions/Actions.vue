<template>
    <ui-dropdown noArrow borderless :id="id" right>
        <div class="p-1 text-gray-600">
            <fa-icon icon="ellipsis-h" class="fa-fw"></fa-icon>
            <span class="sr-only">Actions</span>
        </div>

        <template v-slot:menu>
            <slot></slot>
        </template>
    </ui-dropdown>
</template>

<script>
    export default {
        name: 'ui-actions',

        props: {
            id: {
                required: true
            }
        }
    }
</script>