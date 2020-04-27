<template>
    <div>
        <portal to="title">
            <app-title icon="paper-plane">Beta - Install Wizard</app-title>
        </portal>

        <div class="row">
            <div class="content-container">
                Welcome!!
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Beta - Install'
                }
            }
        },
    }
</script>