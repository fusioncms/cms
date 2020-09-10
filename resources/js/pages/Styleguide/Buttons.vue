<template>
    <ui-card class="sg-buttons">
        <ui-card-header title="Buttons"></ui-card-header>

        <ui-card-body>
            <div class="row">
                <div class="col w-full xl:w-1/2">
                    <div class="mb-4">
                        <h3>Standard</h3>

                        <div class="buttons">
                            <ui-button>Default</ui-button>
                            <ui-button variant="primary">Primary</ui-button>
                            <ui-button variant="secondary">Secondary</ui-button>
                            <ui-button variant="info">Info</ui-button>
                            <ui-button variant="success">Success</ui-button>
                            <ui-button variant="warning">Warning</ui-button>
                            <ui-button variant="danger">Danger</ui-button>
                        </div>
                    </div>

                    <div class="mb-4">
                        <h3>Disabled</h3>

                        <div class="buttons">
                            <ui-button disabled>Default</ui-button>
                            <ui-button variant="primary" disabled>Primary</ui-button>
                            <ui-button variant="secondary" disabled>Secondary</ui-button>
                            <ui-button variant="info" disabled>Info</ui-button>
                            <ui-button variant="success" disabled>Success</ui-button>
                            <ui-button variant="warning" disabled>Warning</ui-button>
                            <ui-button variant="danger" disabled>Danger</ui-button>
                        </div>
                    </div>
                </div>

                <div class="col w-full lg:w-1/2 xl:w-1/4">
                    <h3>Button Groups</h3>

                    <div class="buttons mb-4">
                        <div class="buttons__group">
                            <ui-button>Years</ui-button>
                            <ui-button>Months</ui-button>
                            <ui-button>Days</ui-button>
                        </div>
                    </div>

                    <div class="buttons mb-4">
                        <div class="buttons__group">
                            <ui-button icon><fa-icon icon="chevron-left" class="icon"></fa-icon><span class="sr-only">Previous</span></ui-button>
                            <ui-button icon><fa-icon icon="chevron-right" class="icon"></fa-icon><span class="sr-only">Next</span></ui-button>
                        </div>
                    </div>

                    <div class="buttons mb-4">
                        <div class="buttons__group">
                            <ui-button variant="info"><fa-icon icon="bookmark" class="icon"></fa-icon> Bookmark</ui-button>
                            <ui-button>12.5k</ui-button>
                        </div>
                    </div>
                </div>

                <div class="col w-full lg:w-1/2 xl:w-1/4">
                    <h3>Sizes</h3>

                    <div class="buttons mb-4">
                        <ui-button size="small">Small</ui-button>
                        <ui-button>Normal</ui-button>
                        <ui-button size="large">Large</ui-button>
                    </div>
                </div>

                <div class="col w-full">
                    <h3>Icons</h3>

                    <div class="row">
                        <div class="col w-full lg:w-1/2">
                            <div class="buttons mb-4">
                                <ui-button icon><fa-icon icon="moon"></fa-icon><span class="sr-only">Moon</span></ui-button>
                                <ui-button icon><fa-icon icon="star"></fa-icon><span class="sr-only">Star</span></ui-button>
                                <ui-button icon><fa-icon icon="meteor"></fa-icon><span class="sr-only">Meteor</span></ui-button>
                                <ui-button icon><fa-icon icon="sun"></fa-icon><span class="sr-only">Sun</span></ui-button>
                                <ui-button icon><fa-icon icon="satellite"></fa-icon><span class="sr-only">Satellite</span></ui-button>
                                <ui-button icon><fa-icon icon="user-astronaut"></fa-icon><span class="sr-only">Astronaut</span></ui-button>
                                <ui-button icon><fa-icon icon="robot"></fa-icon><span class="sr-only">Robot</span></ui-button>
                                <ui-button icon><fa-icon icon="brain"></fa-icon><span class="sr-only">Brain</span></ui-button>
                                <ui-button icon><fa-icon icon="rocket"></fa-icon><span class="sr-only">Rocket</span></ui-button>
                                <ui-button icon><fa-icon icon="hand-spock"></fa-icon><span class="sr-only">Spock</span></ui-button>
                                <ui-button icon><fa-icon icon="bars"></fa-icon><span class="sr-only">Bars</span></ui-button>
                                <ui-button icon><fa-icon icon="ellipsis-h"></fa-icon><span class="sr-only">Ellipsis</span></ui-button>
                                <ui-button icon><fa-icon icon="circle-notch" class="fa-spin"></fa-icon><span class="sr-only">Circle</span></ui-button>
                                <ui-button icon><fa-icon icon="sync" class="fa-spin"></fa-icon><span class="sr-only">Spin</span></ui-button>
                            </div>

                            <div class="buttons mb-4">
                                <ui-button icon rounded><fa-icon icon="moon"></fa-icon><span class="sr-only">Moon</span></ui-button>
                                <ui-button icon rounded><fa-icon icon="star"></fa-icon><span class="sr-only">Star</span></ui-button>
                                <ui-button icon rounded><fa-icon icon="meteor"></fa-icon><span class="sr-only">Meteor</span></ui-button>
                                <ui-button icon rounded><fa-icon icon="sun"></fa-icon><span class="sr-only">Sun</span></ui-button>
                                <ui-button icon rounded><fa-icon icon="satellite"></fa-icon><span class="sr-only">Satellite</span></ui-button>
                                <ui-button icon rounded><fa-icon icon="user-astronaut"></fa-icon><span class="sr-only">Astronaut</span></ui-button>
                                <ui-button icon rounded><fa-icon icon="robot"></fa-icon><span class="sr-only">Robot</span></ui-button>
                                <ui-button icon rounded><fa-icon icon="brain"></fa-icon><span class="sr-only">Brain</span></ui-button>
                                <ui-button icon rounded><fa-icon icon="rocket"></fa-icon><span class="sr-only">Rocket</span></ui-button>
                                <ui-button icon rounded><fa-icon icon="hand-spock"></fa-icon><span class="sr-only">Spock</span></ui-button>
                                <ui-button icon rounded><fa-icon icon="bars"></fa-icon><span class="sr-only">Bars</span></ui-button>
                                <ui-button icon rounded><fa-icon icon="ellipsis-h"></fa-icon><span class="sr-only">Ellipsis</span></ui-button>
                                <ui-button icon rounded><fa-icon icon="circle-notch" class="fa-spin"></fa-icon><span class="sr-only">Circle</span></ui-button>
                                <ui-button icon rounded><fa-icon icon="sync" class="fa-spin"></fa-icon><span class="sr-only">Spin</span></ui-button>
                            </div>
                        </div>

                        <div class="col w-full lg:w-1/2">
                            <div class="buttons mb-4">
                                <ui-button icon variant="primary"><fa-icon icon="moon"></fa-icon><span class="sr-only">Moon</span></ui-button>
                                <ui-button icon variant="primary"><fa-icon icon="star"></fa-icon><span class="sr-only">Star</span></ui-button>
                                <ui-button icon variant="primary"><fa-icon icon="meteor"></fa-icon><span class="sr-only">Meteor</span></ui-button>
                                <ui-button icon variant="primary"><fa-icon icon="sun"></fa-icon><span class="sr-only">Sun</span></ui-button>
                                <ui-button icon variant="primary"><fa-icon icon="satellite"></fa-icon><span class="sr-only">Satellite</span></ui-button>
                                <ui-button icon variant="primary"><fa-icon icon="user-astronaut"></fa-icon><span class="sr-only">Astronaut</span></ui-button>
                                <ui-button icon variant="primary"><fa-icon icon="robot"></fa-icon><span class="sr-only">Robot</span></ui-button>
                                <ui-button icon variant="primary"><fa-icon icon="brain"></fa-icon><span class="sr-only">Brain</span></ui-button>
                                <ui-button icon variant="primary"><fa-icon icon="rocket"></fa-icon><span class="sr-only">Rocket</span></ui-button>
                                <ui-button icon variant="primary"><fa-icon icon="hand-spock"></fa-icon><span class="sr-only">Spock</span></ui-button>
                                <ui-button icon variant="primary"><fa-icon icon="bars"></fa-icon><span class="sr-only">Bars</span></ui-button>
                                <ui-button icon variant="primary"><fa-icon icon="ellipsis-h"></fa-icon><span class="sr-only">Ellipsis</span></ui-button>
                                <ui-button icon variant="primary"><fa-icon icon="circle-notch" class="fa-spin"></fa-icon><span class="sr-only">Circle</span></ui-button>
                                <ui-button icon variant="primary"><fa-icon icon="sync" class="fa-spin"></fa-icon><span class="sr-only">Spin</span></ui-button>
                            </div>

                            <div class="buttons mb-4">
                                <ui-button icon rounded variant="primary"><fa-icon icon="moon"></fa-icon><span class="sr-only">Moon</span></ui-button>
                                <ui-button icon rounded variant="primary"><fa-icon icon="star"></fa-icon><span class="sr-only">Star</span></ui-button>
                                <ui-button icon rounded variant="primary"><fa-icon icon="meteor"></fa-icon><span class="sr-only">Meteor</span></ui-button>
                                <ui-button icon rounded variant="primary"><fa-icon icon="sun"></fa-icon><span class="sr-only">Sun</span></ui-button>
                                <ui-button icon rounded variant="primary"><fa-icon icon="satellite"></fa-icon><span class="sr-only">Satellite</span></ui-button>
                                <ui-button icon rounded variant="primary"><fa-icon icon="user-astronaut"></fa-icon><span class="sr-only">Astronaut</span></ui-button>
                                <ui-button icon rounded variant="primary"><fa-icon icon="robot"></fa-icon><span class="sr-only">Robot</span></ui-button>
                                <ui-button icon rounded variant="primary"><fa-icon icon="brain"></fa-icon><span class="sr-only">Brain</span></ui-button>
                                <ui-button icon rounded variant="primary"><fa-icon icon="rocket"></fa-icon><span class="sr-only">Rocket</span></ui-button>
                                <ui-button icon rounded variant="primary"><fa-icon icon="hand-spock"></fa-icon><span class="sr-only">Spock</span></ui-button>
                                <ui-button icon rounded variant="primary"><fa-icon icon="bars"></fa-icon><span class="sr-only">Bars</span></ui-button>
                                <ui-button icon rounded variant="primary"><fa-icon icon="ellipsis-h"></fa-icon><span class="sr-only">Ellipsis</span></ui-button>
                                <ui-button icon rounded variant="primary"><fa-icon icon="circle-notch" class="fa-spin"></fa-icon><span class="sr-only">Circle</span></ui-button>
                                <ui-button icon rounded variant="primary"><fa-icon icon="sync" class="fa-spin"></fa-icon><span class="sr-only">Spin</span></ui-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ui-card-body>
    </ui-card>
</template>

<script>
    export default {
        data() {
            return {
                defaultTest: false
            }
        },

        methods: {
            start() {
                this.defaultTest = true
            },

            stop() {
                this.defaultTest = false
            }
        }
    }
</script>