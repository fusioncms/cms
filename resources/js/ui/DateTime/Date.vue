<template>
    <div class="datetime datetime--date">
        <div class="datetime__icon">
            <fa-icon class="fa-fw" :icon="['far', 'calendar-alt']"></fa-icon>
        </div>

        {{ $moment(timestamp).format('Y-MM-DD') }}
    </div>
</template>

<script>
    export default {
        name: 'ui-date',

        props: {
            'timestamp': {
                required: true
            }
        }
    }
</script>