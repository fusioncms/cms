<template>
    <div class="toolbar__group" :class="{'toolbar__group--grow': grow}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ui-toolbar-group',

        props: {
            grow: {
                type: Boolean,
                default: false
            }
        }
    }
</script>