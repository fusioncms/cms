<template>
    <ui-card class="sg-alerts">
        <ui-card-header title="Alerts"></ui-card-header>

        <ui-card-body>
            <ui-alert>
                <p>Lorum Ipsum dolor sit amet.</p>
            </ui-alert>

            <ui-alert variant="primary">
                <p>Lorum Ipsum dolor sit amet.</p>
            </ui-alert>

            <ui-alert variant="secondary">
                <p>Lorum Ipsum dolor sit amet.</p>
            </ui-alert>

            <ui-alert icon="info-circle" variant="info">
                <p>Lorum Ipsum dolor sit amet.</p>
            </ui-alert>

            <ui-alert icon="check-circle" variant="success">
                <p>Lorum Ipsum dolor sit amet.</p>
            </ui-alert>

            <ui-alert icon="exclamation-circle" variant="warning">
                <p>Lorum Ipsum dolor sit amet.</p>
            </ui-alert>

            <ui-alert icon="exclamation-triangle" variant="danger">
                <p>Lorum Ipsum dolor sit amet.</p>
            </ui-alert>
        </ui-card-body>
    </ui-card>
</template>

<script>
    export default {}
</script>