<template>
    <div>
        <portal to="title">
            <page-title icon="paper-plane">Foobar - Install Wizard</page-title>
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
                    inner: 'Foobar - Install'
                }
            }
        },
    }
</script>