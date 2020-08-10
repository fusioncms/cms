<template>
    <p-card class="sg-buttons">
        <p-card-header title="Buttons"></p-card-header>

        <p-card-body>
            <div class="row">
                <div class="col w-full xl:w-1/2">
                    <div class="mb-4">
                        <h3>Standard</h3>

                        <div class="buttons">
                            <p-button>Default</p-button>
                            <p-button variant="primary">Primary</p-button>
                            <p-button variant="secondary">Secondary</p-button>
                            <p-button variant="info">Info</p-button>
                            <p-button variant="success">Success</p-button>
                            <p-button variant="warning">Warning</p-button>
                            <p-button variant="danger">Danger</p-button>
                        </div>
                    </div>

                    <div class="mb-4">
                        <h3>Disabled</h3>

                        <div class="buttons">
                            <p-button disabled>Default</p-button>
                            <p-button variant="primary" disabled>Primary</p-button>
                            <p-button variant="secondary" disabled>Secondary</p-button>
                            <p-button variant="info" disabled>Info</p-button>
                            <p-button variant="success" disabled>Success</p-button>
                            <p-button variant="warning" disabled>Warning</p-button>
                            <p-button variant="danger" disabled>Danger</p-button>
                        </div>
                    </div>
                </div>

                <div class="col w-full lg:w-1/2 xl:w-1/4">
                    <h3>Button Groups</h3>

                    <div class="buttons mb-4">
                        <div class="buttons__group">
                            <p-button>Years</p-button>
                            <p-button>Months</p-button>
                            <p-button>Days</p-button>
                        </div>
                    </div>

                    <div class="buttons mb-4">
                        <div class="buttons__group">
                            <p-button icon><fa-icon icon="chevron-left" class="icon"></fa-icon><span class="sr-only">Previous</span></p-button>
                            <p-button icon><fa-icon icon="chevron-right" class="icon"></fa-icon><span class="sr-only">Next</span></p-button>
                        </div>
                    </div>

                    <div class="buttons mb-4">
                        <div class="buttons__group">
                            <p-button variant="info"><fa-icon icon="bookmark" class="icon"></fa-icon> Bookmark</p-button>
                            <p-button>12.5k</p-button>
                        </div>
                    </div>
                </div>

                <div class="col w-full lg:w-1/2 xl:w-1/4">
                    <h3>Sizes</h3>

                    <div class="buttons mb-4">
                        <p-button size="small">Small</p-button>
                        <p-button>Normal</p-button>
                        <p-button size="large">Large</p-button>
                    </div>
                </div>

                <div class="col w-full">
                    <h3>Icons</h3>

                    <div class="row">
                        <div class="col w-full lg:w-1/2">
                            <div class="buttons mb-4">
                                <p-button icon><fa-icon icon="moon"></fa-icon><span class="sr-only">Moon</span></p-button>
                                <p-button icon><fa-icon icon="star"></fa-icon><span class="sr-only">Star</span></p-button>
                                <p-button icon><fa-icon icon="meteor"></fa-icon><span class="sr-only">Meteor</span></p-button>
                                <p-button icon><fa-icon icon="sun"></fa-icon><span class="sr-only">Sun</span></p-button>
                                <p-button icon><fa-icon icon="satellite"></fa-icon><span class="sr-only">Satellite</span></p-button>
                                <p-button icon><fa-icon icon="user-astronaut"></fa-icon><span class="sr-only">Astronaut</span></p-button>
                                <p-button icon><fa-icon icon="robot"></fa-icon><span class="sr-only">Robot</span></p-button>
                                <p-button icon><fa-icon icon="brain"></fa-icon><span class="sr-only">Brain</span></p-button>
                                <p-button icon><fa-icon icon="rocket"></fa-icon><span class="sr-only">Rocket</span></p-button>
                                <p-button icon><fa-icon icon="hand-spock"></fa-icon><span class="sr-only">Spock</span></p-button>
                                <p-button icon><fa-icon icon="bars"></fa-icon><span class="sr-only">Bars</span></p-button>
                                <p-button icon><fa-icon icon="ellipsis-h"></fa-icon><span class="sr-only">Ellipsis</span></p-button>
                                <p-button icon><fa-icon icon="circle-notch" class="fa-spin"></fa-icon><span class="sr-only">Circle</span></p-button>
                                <p-button icon><fa-icon icon="sync" class="fa-spin"></fa-icon><span class="sr-only">Spin</span></p-button>
                            </div>

                            <div class="buttons mb-4">
                                <p-button icon rounded><fa-icon icon="moon"></fa-icon><span class="sr-only">Moon</span></p-button>
                                <p-button icon rounded><fa-icon icon="star"></fa-icon><span class="sr-only">Star</span></p-button>
                                <p-button icon rounded><fa-icon icon="meteor"></fa-icon><span class="sr-only">Meteor</span></p-button>
                                <p-button icon rounded><fa-icon icon="sun"></fa-icon><span class="sr-only">Sun</span></p-button>
                                <p-button icon rounded><fa-icon icon="satellite"></fa-icon><span class="sr-only">Satellite</span></p-button>
                                <p-button icon rounded><fa-icon icon="user-astronaut"></fa-icon><span class="sr-only">Astronaut</span></p-button>
                                <p-button icon rounded><fa-icon icon="robot"></fa-icon><span class="sr-only">Robot</span></p-button>
                                <p-button icon rounded><fa-icon icon="brain"></fa-icon><span class="sr-only">Brain</span></p-button>
                                <p-button icon rounded><fa-icon icon="rocket"></fa-icon><span class="sr-only">Rocket</span></p-button>
                                <p-button icon rounded><fa-icon icon="hand-spock"></fa-icon><span class="sr-only">Spock</span></p-button>
                                <p-button icon rounded><fa-icon icon="bars"></fa-icon><span class="sr-only">Bars</span></p-button>
                                <p-button icon rounded><fa-icon icon="ellipsis-h"></fa-icon><span class="sr-only">Ellipsis</span></p-button>
                                <p-button icon rounded><fa-icon icon="circle-notch" class="fa-spin"></fa-icon><span class="sr-only">Circle</span></p-button>
                                <p-button icon rounded><fa-icon icon="sync" class="fa-spin"></fa-icon><span class="sr-only">Spin</span></p-button>
                            </div>
                        </div>

                        <div class="col w-full lg:w-1/2">
                            <div class="buttons mb-4">
                                <p-button icon variant="primary"><fa-icon icon="moon"></fa-icon><span class="sr-only">Moon</span></p-button>
                                <p-button icon variant="primary"><fa-icon icon="star"></fa-icon><span class="sr-only">Star</span></p-button>
                                <p-button icon variant="primary"><fa-icon icon="meteor"></fa-icon><span class="sr-only">Meteor</span></p-button>
                                <p-button icon variant="primary"><fa-icon icon="sun"></fa-icon><span class="sr-only">Sun</span></p-button>
                                <p-button icon variant="primary"><fa-icon icon="satellite"></fa-icon><span class="sr-only">Satellite</span></p-button>
                                <p-button icon variant="primary"><fa-icon icon="user-astronaut"></fa-icon><span class="sr-only">Astronaut</span></p-button>
                                <p-button icon variant="primary"><fa-icon icon="robot"></fa-icon><span class="sr-only">Robot</span></p-button>
                                <p-button icon variant="primary"><fa-icon icon="brain"></fa-icon><span class="sr-only">Brain</span></p-button>
                                <p-button icon variant="primary"><fa-icon icon="rocket"></fa-icon><span class="sr-only">Rocket</span></p-button>
                                <p-button icon variant="primary"><fa-icon icon="hand-spock"></fa-icon><span class="sr-only">Spock</span></p-button>
                                <p-button icon variant="primary"><fa-icon icon="bars"></fa-icon><span class="sr-only">Bars</span></p-button>
                                <p-button icon variant="primary"><fa-icon icon="ellipsis-h"></fa-icon><span class="sr-only">Ellipsis</span></p-button>
                                <p-button icon variant="primary"><fa-icon icon="circle-notch" class="fa-spin"></fa-icon><span class="sr-only">Circle</span></p-button>
                                <p-button icon variant="primary"><fa-icon icon="sync" class="fa-spin"></fa-icon><span class="sr-only">Spin</span></p-button>
                            </div>

                            <div class="buttons mb-4">
                                <p-button icon rounded variant="primary"><fa-icon icon="moon"></fa-icon><span class="sr-only">Moon</span></p-button>
                                <p-button icon rounded variant="primary"><fa-icon icon="star"></fa-icon><span class="sr-only">Star</span></p-button>
                                <p-button icon rounded variant="primary"><fa-icon icon="meteor"></fa-icon><span class="sr-only">Meteor</span></p-button>
                                <p-button icon rounded variant="primary"><fa-icon icon="sun"></fa-icon><span class="sr-only">Sun</span></p-button>
                                <p-button icon rounded variant="primary"><fa-icon icon="satellite"></fa-icon><span class="sr-only">Satellite</span></p-button>
                                <p-button icon rounded variant="primary"><fa-icon icon="user-astronaut"></fa-icon><span class="sr-only">Astronaut</span></p-button>
                                <p-button icon rounded variant="primary"><fa-icon icon="robot"></fa-icon><span class="sr-only">Robot</span></p-button>
                                <p-button icon rounded variant="primary"><fa-icon icon="brain"></fa-icon><span class="sr-only">Brain</span></p-button>
                                <p-button icon rounded variant="primary"><fa-icon icon="rocket"></fa-icon><span class="sr-only">Rocket</span></p-button>
                                <p-button icon rounded variant="primary"><fa-icon icon="hand-spock"></fa-icon><span class="sr-only">Spock</span></p-button>
                                <p-button icon rounded variant="primary"><fa-icon icon="bars"></fa-icon><span class="sr-only">Bars</span></p-button>
                                <p-button icon rounded variant="primary"><fa-icon icon="ellipsis-h"></fa-icon><span class="sr-only">Ellipsis</span></p-button>
                                <p-button icon rounded variant="primary"><fa-icon icon="circle-notch" class="fa-spin"></fa-icon><span class="sr-only">Circle</span></p-button>
                                <p-button icon rounded variant="primary"><fa-icon icon="sync" class="fa-spin"></fa-icon><span class="sr-only">Spin</span></p-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </p-card-body>
    </p-card>
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