<template>
    <div class="datetime datetime--time">
        <div class="datetime__icon">
            <fa-icon class="fa-fw" :icon="['far', 'clock']"></fa-icon>
        </div>

        {{ $moment(timestamp).format('hh:mm a') }}
    </div>
</template>

<script>
    export default {
        name: 'ui-time',

        props: {
            'timestamp': {
                required: true
            }
        }
    }
</script>