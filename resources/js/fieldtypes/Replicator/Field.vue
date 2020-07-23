<template>
    <div></div>
</template>

<script>
    export default {
        name: 'replicator-fieldtype',

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: '',
            },
        },
    }
</script>
