<template>
    <div>
        <ui-date :timestamp="timestamp"></ui-date>
        <ui-time :timestamp="timestamp"></ui-time>
    </div>
</template>

<script>
    export default {
        name: 'ui-datetime',

        props: {
            'timestamp': {
                required: true
            }
        }
    }
</script>