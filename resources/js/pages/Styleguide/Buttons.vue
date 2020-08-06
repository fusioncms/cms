<template>
    <div class="sg-buttons row">
        <div class="col w-full">
            <div class="card">
                <div class="card__header">
                    <h2 class="card__title">Buttons</h2>
                </div>

                <div class="card__body">
                    <div class="row">
                        <div class="col w-full xl:w-1/2">
                            <div class="mb-4">
                                <h3>Standard</h3>

                                <div class="buttons">
                                    <button class="button">Default</button>
                                    <button class="button button--primary">Primary</button>
                                    <button class="button button--secondary">Secondary</button>
                                    <button class="button button--info">Info</button>
                                    <button class="button button--success">Success</button>
                                    <button class="button button--warning">Warning</button>
                                    <button class="button button--danger">Danger</button>
                                </div>
                            </div>

                            <div class="mb-4">
                                <h3>Disabled</h3>

                                <div class="buttons">
                                    <button class="button" disabled>Default</button>
                                    <button class="button button--primary" disabled>Primary</button>
                                    <button class="button button--secondary" disabled>Secondary</button>
                                    <button class="button button--info" disabled>Info</button>
                                    <button class="button button--success" disabled>Success</button>
                                    <button class="button button--warning" disabled>Warning</button>
                                    <button class="button button--danger" disabled>Danger</button>
                                </div>
                            </div>
                        </div>

                        <div class="col w-full lg:w-1/2 xl:w-1/4">
                            <h3>Button Groups</h3>

                            <div class="buttons mb-4">
                                <div class="buttons__group">
                                    <button class="button">Years</button>
                                    <button class="button">Months</button>
                                    <button class="button">Days</button>
                                </div>
                            </div>

                            <div class="buttons mb-4">
                                <div class="buttons__group">
                                    <button class="button button--icon"><fa-icon icon="chevron-left" class="icon"></fa-icon><span class="sr-only">Previous</span></button>
                                    <button class="button button--icon"><fa-icon icon="chevron-right" class="icon"></fa-icon><span class="sr-only">Next</span></button>
                                </div>
                            </div>

                            <div class="buttons mb-4">
                                <div class="buttons__group">
                                    <button class="button button--info"><fa-icon icon="bookmark" class="icon"></fa-icon> Bookmark</button>
                                    <button class="button">12.5k</button>
                                </div>
                            </div>
                        </div>

                        <div class="col w-full lg:w-1/2 xl:w-1/4">
                            <h3>Sizes</h3>

                            <div class="buttons mb-4">
                                <button class="button button--small">Small</button>
                                <button class="button">Normal</button>
                                <button class="button button--large">Large</button>
                            </div>
                        </div>

                        <div class="col w-full">
                            <h3>Icons</h3>

                            <div class="row">
                                <div class="col w-full lg:w-1/2">
                                    <div class="buttons mb-4">
                                        <button class="button button--icon"><fa-icon icon="moon"></fa-icon><span class="sr-only">Moon</span></button>
                                        <button class="button button--icon"><fa-icon icon="star"></fa-icon><span class="sr-only">Star</span></button>
                                        <button class="button button--icon"><fa-icon icon="meteor"></fa-icon><span class="sr-only">Meteor</span></button>
                                        <button class="button button--icon"><fa-icon icon="sun"></fa-icon><span class="sr-only">Sun</span></button>
                                        <button class="button button--icon"><fa-icon icon="satellite"></fa-icon><span class="sr-only">Satellite</span></button>
                                        <button class="button button--icon"><fa-icon icon="user-astronaut"></fa-icon><span class="sr-only">Astronaut</span></button>
                                        <button class="button button--icon"><fa-icon icon="robot"></fa-icon><span class="sr-only">Robot</span></button>
                                        <button class="button button--icon"><fa-icon icon="brain"></fa-icon><span class="sr-only">Brain</span></button>
                                        <button class="button button--icon"><fa-icon icon="rocket"></fa-icon><span class="sr-only">Rocket</span></button>
                                        <button class="button button--icon"><fa-icon icon="hand-spock"></fa-icon><span class="sr-only">Spock</span></button>
                                        <button class="button button--icon"><fa-icon icon="bars"></fa-icon><span class="sr-only">Bars</span></button>
                                        <button class="button button--icon"><fa-icon icon="ellipsis-h"></fa-icon><span class="sr-only">Ellipsis</span></button>
                                        <button class="button button--icon"><fa-icon icon="circle-notch" class="fa-spin"></fa-icon><span class="sr-only">Circle</span></button>
                                        <button class="button button--icon"><fa-icon icon="sync" class="fa-spin"></fa-icon><span class="sr-only">Spin</span></button>
                                    </div>

                                    <div class="buttons mb-4">
                                        <button class="button button--icon button--rounded"><fa-icon icon="moon"></fa-icon><span class="sr-only">Moon</span></button>
                                        <button class="button button--icon button--rounded"><fa-icon icon="star"></fa-icon><span class="sr-only">Star</span></button>
                                        <button class="button button--icon button--rounded"><fa-icon icon="meteor"></fa-icon><span class="sr-only">Meteor</span></button>
                                        <button class="button button--icon button--rounded"><fa-icon icon="sun"></fa-icon><span class="sr-only">Sun</span></button>
                                        <button class="button button--icon button--rounded"><fa-icon icon="satellite"></fa-icon><span class="sr-only">Satellite</span></button>
                                        <button class="button button--icon button--rounded"><fa-icon icon="user-astronaut"></fa-icon><span class="sr-only">Astronaut</span></button>
                                        <button class="button button--icon button--rounded"><fa-icon icon="robot"></fa-icon><span class="sr-only">Robot</span></button>
                                        <button class="button button--icon button--rounded"><fa-icon icon="brain"></fa-icon><span class="sr-only">Brain</span></button>
                                        <button class="button button--icon button--rounded"><fa-icon icon="rocket"></fa-icon><span class="sr-only">Rocket</span></button>
                                        <button class="button button--icon button--rounded"><fa-icon icon="hand-spock"></fa-icon><span class="sr-only">Spock</span></button>
                                        <button class="button button--icon button--rounded"><fa-icon icon="bars"></fa-icon><span class="sr-only">Bars</span></button>
                                        <button class="button button--icon button--rounded"><fa-icon icon="ellipsis-h"></fa-icon><span class="sr-only">Ellipsis</span></button>
                                        <button class="button button--icon button--rounded"><fa-icon icon="circle-notch" class="fa-spin"></fa-icon><span class="sr-only">Circle</span></button>
                                        <button class="button button--icon button--rounded"><fa-icon icon="sync" class="fa-spin"></fa-icon><span class="sr-only">Spin</span></button>
                                    </div>
                                </div>

                                <div class="col w-full lg:w-1/2">
                                    <div class="buttons mb-4">
                                        <button class="button button--icon button--primary"><fa-icon icon="moon"></fa-icon><span class="sr-only">Moon</span></button>
                                        <button class="button button--icon button--primary"><fa-icon icon="star"></fa-icon><span class="sr-only">Star</span></button>
                                        <button class="button button--icon button--primary"><fa-icon icon="meteor"></fa-icon><span class="sr-only">Meteor</span></button>
                                        <button class="button button--icon button--primary"><fa-icon icon="sun"></fa-icon><span class="sr-only">Sun</span></button>
                                        <button class="button button--icon button--primary"><fa-icon icon="satellite"></fa-icon><span class="sr-only">Satellite</span></button>
                                        <button class="button button--icon button--primary"><fa-icon icon="user-astronaut"></fa-icon><span class="sr-only">Astronaut</span></button>
                                        <button class="button button--icon button--primary"><fa-icon icon="robot"></fa-icon><span class="sr-only">Robot</span></button>
                                        <button class="button button--icon button--primary"><fa-icon icon="brain"></fa-icon><span class="sr-only">Brain</span></button>
                                        <button class="button button--icon button--primary"><fa-icon icon="rocket"></fa-icon><span class="sr-only">Rocket</span></button>
                                        <button class="button button--icon button--primary"><fa-icon icon="hand-spock"></fa-icon><span class="sr-only">Spock</span></button>
                                        <button class="button button--icon button--primary"><fa-icon icon="bars"></fa-icon><span class="sr-only">Bars</span></button>
                                        <button class="button button--icon button--primary"><fa-icon icon="ellipsis-h"></fa-icon><span class="sr-only">Ellipsis</span></button>
                                        <button class="button button--icon button--primary"><fa-icon icon="circle-notch" class="fa-spin"></fa-icon><span class="sr-only">Circle</span></button>
                                        <button class="button button--icon button--primary"><fa-icon icon="sync" class="fa-spin"></fa-icon><span class="sr-only">Spin</span></button>
                                    </div>

                                    <div class="buttons mb-4">
                                        <button class="button button--icon button--primary button--rounded"><fa-icon icon="moon"></fa-icon><span class="sr-only">Moon</span></button>
                                        <button class="button button--icon button--primary button--rounded"><fa-icon icon="star"></fa-icon><span class="sr-only">Star</span></button>
                                        <button class="button button--icon button--primary button--rounded"><fa-icon icon="meteor"></fa-icon><span class="sr-only">Meteor</span></button>
                                        <button class="button button--icon button--primary button--rounded"><fa-icon icon="sun"></fa-icon><span class="sr-only">Sun</span></button>
                                        <button class="button button--icon button--primary button--rounded"><fa-icon icon="satellite"></fa-icon><span class="sr-only">Satellite</span></button>
                                        <button class="button button--icon button--primary button--rounded"><fa-icon icon="user-astronaut"></fa-icon><span class="sr-only">Astronaut</span></button>
                                        <button class="button button--icon button--primary button--rounded"><fa-icon icon="robot"></fa-icon><span class="sr-only">Robot</span></button>
                                        <button class="button button--icon button--primary button--rounded"><fa-icon icon="brain"></fa-icon><span class="sr-only">Brain</span></button>
                                        <button class="button button--icon button--primary button--rounded"><fa-icon icon="rocket"></fa-icon><span class="sr-only">Rocket</span></button>
                                        <button class="button button--icon button--primary button--rounded"><fa-icon icon="hand-spock"></fa-icon><span class="sr-only">Spock</span></button>
                                        <button class="button button--icon button--primary button--rounded"><fa-icon icon="bars"></fa-icon><span class="sr-only">Bars</span></button>
                                        <button class="button button--icon button--primary button--rounded"><fa-icon icon="ellipsis-h"></fa-icon><span class="sr-only">Ellipsis</span></button>
                                        <button class="button button--icon button--primary button--rounded"><fa-icon icon="circle-notch" class="fa-spin"></fa-icon><span class="sr-only">Circle</span></button>
                                        <button class="button button--icon button--primary button--rounded"><fa-icon icon="sync" class="fa-spin"></fa-icon><span class="sr-only">Spin</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col w-full">
                            <h3>Loading</h3>

                            <div class="row">
                                <div class="col w-full lg:w-1/2">
                                    <div class="buttons mb-4">
                                        <p-button :value="true">Default</p-button>
                                        <p-button :value="true" classes="button--primary">Primary</p-button>
                                        <p-button :value="true" classes="button--secondary">Secondary</p-button>
                                        <p-button :value="true" classes="button--info">Info</p-button>
                                        <p-button :value="true" classes="button--success">Success</p-button>
                                        <p-button :value="true" classes="button--warning">Warning</p-button>
                                        <p-button :value="true" classes="button--danger">Danger</p-button>
                                    </div>
                                </div>
                                
                                <div class="col w-full lg:w-1/2">
                                    <div class="buttons m-4">
                                        <p-button @click="start" classes="button--secondary">Start Loading</p-button>
                                        <p-button @click="stop" classes="button--secondary">Stop Loading</p-button>
                                        <p-button v-model="defaultTest" classes="button--primary">Save</p-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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