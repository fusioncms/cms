<template>
    <div>
        <portal to="title">
            <app-title icon="swatchbook">Styleguide</app-title>
        </portal>

        <!-- Colors -->
        <div class="row">
            <div class="col w-full">
                <div class="card">
                    <div class="card__header">
                        <h2 class="card__title">Color Pallet</h2>
                    </div>

                    <div class="card__body">
                        <div class="row">
                            <div class="col w-full md:w-1/2 xxl:w-1/3 flex flex-row flex-wrap mb-4">
                                <h3 class="w-full">Primary</h3>

                                <div class="bg-primary-100 w-10 h-10 text-xs text-center p-2">100</div>
                                <div class="bg-primary-200 w-10 h-10 text-xs text-center p-2">200</div>
                                <div class="bg-primary-300 w-10 h-10 text-xs text-center p-2">300</div>
                                <div class="bg-primary-400 w-10 h-10 text-xs text-center p-2">400</div>
                                <div class="bg-primary-500 w-10 h-10 text-xs text-white text-center p-2">500</div>
                                <div class="bg-primary-600 w-10 h-10 text-xs text-white text-center p-2">600</div>
                                <div class="bg-primary-700 w-10 h-10 text-xs text-white text-center p-2">700</div>
                                <div class="bg-primary-800 w-10 h-10 text-xs text-white text-center p-2">800</div>
                                <div class="bg-primary-900 w-10 h-10 text-xs text-white text-center p-2">900</div>
                            </div>

                            <div class="col w-full md:w-1/2 xxl:w-1/3 flex flex-row flex-wrap mb-4">
                                <h3 class="w-full">Secondary</h3>

                                <div class="bg-secondary-100 w-10 h-10 text-xs text-center p-2">100</div>
                                <div class="bg-secondary-200 w-10 h-10 text-xs text-center p-2">200</div>
                                <div class="bg-secondary-300 w-10 h-10 text-xs text-center p-2">300</div>
                                <div class="bg-secondary-400 w-10 h-10 text-xs text-center p-2">400</div>
                                <div class="bg-secondary-500 w-10 h-10 text-xs text-white text-center p-2">500</div>
                                <div class="bg-secondary-600 w-10 h-10 text-xs text-white text-center p-2">600</div>
                                <div class="bg-secondary-700 w-10 h-10 text-xs text-white text-center p-2">700</div>
                                <div class="bg-secondary-800 w-10 h-10 text-xs text-white text-center p-2">800</div>
                                <div class="bg-secondary-900 w-10 h-10 text-xs text-white text-center p-2">900</div>
                            </div>

                            <div class="col w-full md:w-1/2 xxl:w-1/3 flex flex-row flex-wrap mb-4">
                                <h3 class="w-full">Info</h3>

                                <div class="bg-info-100 w-10 h-10 text-xs text-center p-2">100</div>
                                <div class="bg-info-200 w-10 h-10 text-xs text-center p-2">200</div>
                                <div class="bg-info-300 w-10 h-10 text-xs text-center p-2">300</div>
                                <div class="bg-info-400 w-10 h-10 text-xs text-center p-2">400</div>
                                <div class="bg-info-500 w-10 h-10 text-xs text-white text-center p-2">500</div>
                                <div class="bg-info-600 w-10 h-10 text-xs text-white text-center p-2">600</div>
                                <div class="bg-info-700 w-10 h-10 text-xs text-white text-center p-2">700</div>
                                <div class="bg-info-800 w-10 h-10 text-xs text-white text-center p-2">800</div>
                                <div class="bg-info-900 w-10 h-10 text-xs text-white text-center p-2">900</div>
                            </div>

                            <div class="col w-full md:w-1/2 xxl:w-1/3 flex flex-row flex-wrap mb-4">
                                <h3 class="w-full">Success</h3>

                                <div class="bg-success-100 w-10 h-10 text-xs text-center p-2">100</div>
                                <div class="bg-success-200 w-10 h-10 text-xs text-center p-2">200</div>
                                <div class="bg-success-300 w-10 h-10 text-xs text-center p-2">300</div>
                                <div class="bg-success-400 w-10 h-10 text-xs text-center p-2">400</div>
                                <div class="bg-success-500 w-10 h-10 text-xs text-white text-center p-2">500</div>
                                <div class="bg-success-600 w-10 h-10 text-xs text-white text-center p-2">600</div>
                                <div class="bg-success-700 w-10 h-10 text-xs text-white text-center p-2">700</div>
                                <div class="bg-success-800 w-10 h-10 text-xs text-white text-center p-2">800</div>
                                <div class="bg-success-900 w-10 h-10 text-xs text-white text-center p-2">900</div>
                            </div>

                            <div class="col w-full md:w-1/2 xxl:w-1/3 flex flex-row flex-wrap mb-4">
                                <h3 class="w-full">Warning</h3>

                                <div class="bg-warning-100 w-10 h-10 text-xs text-center p-2">100</div>
                                <div class="bg-warning-200 w-10 h-10 text-xs text-center p-2">200</div>
                                <div class="bg-warning-300 w-10 h-10 text-xs text-center p-2">300</div>
                                <div class="bg-warning-400 w-10 h-10 text-xs text-center p-2">400</div>
                                <div class="bg-warning-500 w-10 h-10 text-xs text-white text-center p-2">500</div>
                                <div class="bg-warning-600 w-10 h-10 text-xs text-white text-center p-2">600</div>
                                <div class="bg-warning-700 w-10 h-10 text-xs text-white text-center p-2">700</div>
                                <div class="bg-warning-800 w-10 h-10 text-xs text-white text-center p-2">800</div>
                                <div class="bg-warning-900 w-10 h-10 text-xs text-white text-center p-2">900</div>
                            </div>

                            <div class="col w-full md:w-1/2 xxl:w-1/3 flex flex-row flex-wrap mb-4">
                                <h3 class="w-full">Danger</h3>

                                <div class="bg-danger-100 w-10 h-10 text-xs text-center p-2">100</div>
                                <div class="bg-danger-200 w-10 h-10 text-xs text-center p-2">200</div>
                                <div class="bg-danger-300 w-10 h-10 text-xs text-center p-2">300</div>
                                <div class="bg-danger-400 w-10 h-10 text-xs text-center p-2">400</div>
                                <div class="bg-danger-500 w-10 h-10 text-xs text-white text-center p-2">500</div>
                                <div class="bg-danger-600 w-10 h-10 text-xs text-white text-center p-2">600</div>
                                <div class="bg-danger-700 w-10 h-10 text-xs text-white text-center p-2">700</div>
                                <div class="bg-danger-800 w-10 h-10 text-xs text-white text-center p-2">800</div>
                                <div class="bg-danger-900 w-10 h-10 text-xs text-white text-center p-2">900</div>
                            </div>

                            <div class="col w-full md:w-1/2 xxl:w-1/3 flex flex-row flex-wrap mb-4">
                                <h3 class="w-full">Grayscale</h3>

                                <div class="bg-gray-100 w-10 h-10 text-xs text-center p-2">100</div>
                                <div class="bg-gray-200 w-10 h-10 text-xs text-center p-2">200</div>
                                <div class="bg-gray-300 w-10 h-10 text-xs text-center p-2">300</div>
                                <div class="bg-gray-400 w-10 h-10 text-xs text-center p-2">400</div>
                                <div class="bg-gray-500 w-10 h-10 text-xs text-white text-center p-2">500</div>
                                <div class="bg-gray-600 w-10 h-10 text-xs text-white text-center p-2">600</div>
                                <div class="bg-gray-700 w-10 h-10 text-xs text-white text-center p-2">700</div>
                                <div class="bg-gray-800 w-10 h-10 text-xs text-white text-center p-2">800</div>
                                <div class="bg-gray-900 w-10 h-10 text-xs text-white text-center p-2">900</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Typography -->
        <div class="row">
            <div class="col w-full">
                <div class="card">
                    <div class="card__header">
                        <h3 class="card__title">Typography</h3>
                    </div>

                    <div class="card__body">
                        <div class="row">
                            <div class="col w-full lg:w-1/2">
                                <h1>Heading 1 <small>Sub Heading</small></h1>
                                <h2>Heading 2 <small>Sub Heading</small></h2>
                                <h3>Heading 3 <small>Sub Heading</small></h3>
                                <h4>Heading 4 <small>Sub Heading</small></h4>
                                <h5>Heading 5 <small>Sub Heading</small></h5>
                                <h6>Heading 6 <small>Sub Heading</small></h6>
                            </div>

                            <div class="col w-full lg:w-1/2">
                                <p>Body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus sagittis erat, imperdiet luctus arcu pellentesque vitae.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus sagittis erat, imperdiet luctus arcu pellentesque vitae.</p>
                                
                                <p><a href="#">Inline Link</a></p>
                                <!-- <div class="flex">
                                    <ul class="w-1/2">
                                        <li>List item</li>
                                        <li>List item</li>
                                        <li>List item</li>
                                        <li>
                                            List item
                                            <ul>
                                                <li>List item</li>
                                                <li>List item</li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <ol class="w-1/2">
                                        <li>List item</li>
                                        <li>List item</li>
                                        <li>List item</li>
                                        <li>List item</li>
                                        <li>List item</li>
                                    </ol>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Buttons -->
        <div class="row">
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

        <!-- Alerts -->
        <div class="row">
            <div class="col w-full">
                <div class="card">
                    <div class="card__header">
                        <h2 class="card__title">Alerts</h2>
                    </div>

                    <div class="card__body">
                        <div class="alert">
                            <div class="alert__container container">
                                <div class="alert__icon">
                                    <fa-icon icon="info-circle" class="fa-fw"></fa-icon> 
                                </div>

                                <p>Lorum Ipsum dolor sit amet.</p>
                            </div>
                        </div>

                        <div class="alert alert--info">
                            <div class="alert__container container">
                                <div class="alert__icon">
                                    <fa-icon icon="info-circle" class="fa-fw"></fa-icon> 
                                </div>

                                <p>Lorum Ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        
                        <div class="alert alert--success">
                            <div class="alert__container container">
                                <div class="alert__icon">
                                    <fa-icon icon="check-circle" class="fa-fw"></fa-icon> 
                                </div>

                                <p>Lorum Ipsum dolor sit amet.</p>
                            </div>
                        </div>

                        <div class="alert alert--warning">
                            <div class="alert__container container">
                                <div class="alert__icon">
                                    <fa-icon icon="exclamation-circle" class="fa-fw"></fa-icon> 
                                </div>

                                <p>Lorum Ipsum dolor sit amet.</p>
                            </div>
                        </div>

                        <div class="alert alert--danger">
                            <div class="alert__container container">
                                <div class="alert__icon">
                                    <fa-icon icon="exclamation-triangle" class="fa-fw"></fa-icon> 
                                </div>

                                <p>Lorum Ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Fields -->
        <div class="row">
            <div class="col w-full">
                <div class="card">
                    <div class="card__header">
                        <h2 class="card__title">Form Fields</h2>
                    </div>

                    <div class="card__body">
                        <!-- Title Field -->
                        <div class="row">
                            <div class="col w-full">
                                <h3>Title Field</h3>
                            </div>
                            <div class="col w-full xl:w-1/3">
                                <p-title
                                    name="title"
                                    label="Title"
                                    help="What is your name?"
                                    autocomplete="off"
                                    placeholder="Name">
                                </p-title>
                            </div>

                            <div class="col w-full xl:w-1/3">
                                <p-title
                                    name="title_success"
                                    label="Title Success"
                                    help="What is your name?"
                                    autocomplete="off"
                                    required
                                    placeholder="Name" 
                                    value="Jean-Luc Picard"
                                    :hasSuccess="true"
                                    successMessage="That looks like a good name!">
                                </p-title>
                            </div>

                            <div class="col w-full xl:w-1/3">
                                <p-title
                                    name="title_error"
                                    label="Title Error"
                                    help="What is your name?"
                                    autocomplete="off"
                                    required
                                    placeholder="Name" 
                                    value="Tea, Earl Gray, Hot"
                                    :hasError="true"
                                    errorMessage="That is not a valid name.">
                                </p-title>
                            </div>
                        </div>

                        <hr>

                        <!-- Input Field -->
                        <div class="row">
                            <div class="col w-full">
                                <h3>Input Field</h3>
                            </div>
                            
                            <div class="col w-full xl:w-1/3">
                                <p-input
                                    name="input"
                                    label="Input"
                                    help="Help text for input."
                                    autocomplete="off">
                                </p-input>
                            </div>

                            <div class="col w-full xl:w-1/3">
                                <p-input
                                    name="input_success"
                                    label="Input Success"
                                    help="What shall we call you?"
                                    autocomplete="off"
                                    required 
                                    value="Jean-Luc Picard"
                                    :hasSuccess="true"
                                    successMessage="This name is valid!">
                                </p-input>
                            </div>

                            <div class="col w-full xl:w-1/3">
                                <p-input
                                    name="input_error"
                                    type="email"
                                    label="Input Error"
                                    help="What is your email address?"
                                    autocomplete="off"
                                    required
                                    placeholder="Name" 
                                    value="make.it.so@"
                                    :hasError="true"
                                    errorMessage="This email is invalid.">
                                </p-input>
                            </div>
                        </div>

                        <hr>

                        <!-- Textarea Field -->
                        <div class="row">
                            <div class="col w-full">
                                <h3>Textarea Field</h3>
                            </div>

                            <div class="col w-full xl:w-1/3">
                                <p-textarea
                                    name="textarea"
                                    label="Textarea"
                                    help="Help text for textarea."
                                    autocomplete="off"
                                    :rows="5">
                                </p-textarea>
                            </div>

                            <div class="col w-full xl:w-1/3">
                                <p-textarea
                                    name="textarea_success"
                                    label="Textarea Success"
                                    help="Enter a message."
                                    autocomplete="off"
                                    required 
                                    value="You cannot explain away a wantonly immoral act because you think that it is connected to some higher purpose."
                                    :hasSuccess="true"
                                    successMessage="This value is valid!"
                                    :rows="5">
                                </p-textarea>
                            </div>

                            <div class="col w-full xl:w-1/3">
                                <p-textarea
                                    name="textarea_error"
                                    label="Textarea Error"
                                    help="Enter a message."
                                    autocomplete="off"
                                    required
                                    placeholder="Name" 
                                    value="bIHeghvIpchughbIHeghpu'."
                                    :hasError="true"
                                    errorMessage="This value is invalid."
                                    :rows="5">
                                </p-textarea>
                            </div>
                        </div>

                        <hr>

                        <!-- Select Field -->
                        <div class="row">
                            <div class="col w-full">
                                <h3>Select Field</h3>
                            </div>

                            <div class="col w-full xl:w-1/3">
                                <p-select
                                    name="select"
                                    label="Select"
                                    help="Help text for select dropdown."
                                    :options="[
                                        {
                                            'label': 'Option 1',
                                            'value': 'option-1',
                                        },
                                        {
                                            'label': 'Option 2',
                                            'value': 'option-2',
                                        },
                                        {
                                            'label': 'Option 3',
                                            'value': 'option-3',
                                        },
                                        {
                                            'label': 'Option 4',
                                            'value': 'option-4',
                                        },
                                        {
                                            'label': 'Option 5',
                                            'value': 'option-5',
                                        }
                                    ]">
                                </p-select>
                            </div>

                            <div class="col w-full xl:w-1/3">
                                <p-select
                                    name="select_success"
                                    label="Select Success"
                                    value="option-1"
                                    help="Help text for select dropdown."
                                    :hasSuccess="true"
                                    successMessage="This value is valid!"
                                    :options="[
                                        {
                                            'label': 'Option 1',
                                            'value': 'option-1',
                                        },
                                        {
                                            'label': 'Option 2',
                                            'value': 'option-2',
                                        },
                                        {
                                            'label': 'Option 3',
                                            'value': 'option-3',
                                        },
                                        {
                                            'label': 'Option 4',
                                            'value': 'option-4',
                                        },
                                        {
                                            'label': 'Option 5',
                                            'value': 'option-5',
                                        }
                                    ]">
                                </p-select>
                            </div>

                            <div class="col w-full xl:w-1/3">
                                <p-select
                                    name="select_error"
                                    label="Select Error"
                                    help="Help text for select dropdown."
                                    :hasError="true"
                                    errorMessage="A selected option is required."
                                    :options="[
                                        {
                                            'label': 'Option 1',
                                            'value': 'option-1',
                                        },
                                        {
                                            'label': 'Option 2',
                                            'value': 'option-2',
                                        },
                                        {
                                            'label': 'Option 3',
                                            'value': 'option-3',
                                        },
                                        {
                                            'label': 'Option 4',
                                            'value': 'option-4',
                                        },
                                        {
                                            'label': 'Option 5',
                                            'value': 'option-5',
                                        }
                                    ]">
                                </p-select>
                            </div>

                            <div class="col w-full xl:w-1/3">
                                <p-select
                                    name="select_multiple"
                                    label="Select Multiple"
                                    help="Help text for select dropdown."
                                    :multiple="true"
                                    :showControls="true"
                                    :filterable="true"
                                    :options="[
                                        {
                                            'label': 'Option 1',
                                            'value': 'option-1',
                                        },
                                        {
                                            'label': 'Option 2',
                                            'value': 'option-2',
                                        },
                                        {
                                            'label': 'Option 3',
                                            'value': 'option-3',
                                        },
                                        {
                                            'label': 'Option 4',
                                            'value': 'option-4',
                                        },
                                        {
                                            'label': 'Option 5',
                                            'value': 'option-5',
                                        },
                                        {
                                            'label': 'Option 6',
                                            'value': 'option-6',
                                        },
                                        {
                                            'label': 'Option 7',
                                            'value': 'option-7',
                                        },
                                        {
                                            'label': 'Option 8',
                                            'value': 'option-8',
                                        },
                                        {
                                            'label': 'Option 9',
                                            'value': 'option-9',
                                        },
                                        {
                                            'label': 'Option 10',
                                            'value': 'option-10',
                                        }
                                    ]">
                                </p-select>
                            </div>
                        </div>

                        <hr>

                        <!-- Checkbox & Radio -->
                        <div class="row">
                            <div class="col w-full">
                                <h3>Checkboxes and Radios</h3>
                            </div>

                            <div class="col w-full md:w-1/2">
                                <p-fieldset 
                                    label="Checkboxes" 
                                    help="Select all that apply.">
                                    <p-checkbox
                                        id="checkbox_0"
                                        key="0"
                                        name="checkbox">
                                        Checkbox 1
                                    </p-checkbox>

                                    <p-checkbox
                                        id="checkbox_1"
                                        key="1"
                                        name="checkbox">
                                        Checkbox 2
                                    </p-checkbox>

                                    <p-checkbox
                                        id="checkbox_2"
                                        key="2"
                                        name="checkbox">
                                        Checkbox 3
                                    </p-checkbox>

                                    <p-checkbox
                                        id="checkbox_3"
                                        key="3"
                                        name="checkbox">
                                        Checkbox 4
                                    </p-checkbox>

                                    <p-checkbox
                                        id="checkbox_4"
                                        key="4"
                                        name="checkbox">
                                        Checkbox 5
                                    </p-checkbox>
                                </p-fieldset>
                            </div>

                            <div class="col w-full md:w-1/2">
                                <p-fieldset 
                                    label="Radios" 
                                    help="Select an option.">
                                    <p-radio
                                        id="radio_0"
                                        key="0"
                                        name="radio">
                                        Radio 1
                                    </p-radio>

                                    <p-radio
                                        id="radio_1"
                                        key="1"
                                        name="radio">
                                        Radio 2
                                    </p-radio>

                                    <p-radio
                                        id="radio_2"
                                        key="2"
                                        name="radio">
                                        Radio 3
                                    </p-radio>

                                    <p-radio
                                        id="radio_3"
                                        key="3"
                                        name="radio">
                                        Radio 4
                                    </p-radio>

                                    <p-radio
                                        id="radio_4"
                                        key="4"
                                        name="radio">
                                        Radio 5
                                    </p-radio>
                                </p-fieldset>
                            </div>

                            <div class="col w-full md:w-1/2">
                                <p-fieldset
                                    label="Checkboxes Inline" 
                                    help="Select all that apply.">
                                    <p-checkbox
                                        id="checkbox_inline_0"
                                        key="0"
                                        name="checkbox"
                                        :inline="true">
                                        Checkbox 1
                                    </p-checkbox>

                                    <p-checkbox
                                        id="checkbox_inline_1"
                                        key="1"
                                        name="checkbox"
                                        :inline="true">
                                        Checkbox 2
                                    </p-checkbox>

                                    <p-checkbox
                                        id="checkbox_inline_2"
                                        key="2"
                                        name="checkbox"
                                        :inline="true">
                                        Checkbox 3
                                    </p-checkbox>

                                    <p-checkbox
                                        id="checkbox_inline_3"
                                        key="3"
                                        name="checkbox"
                                        :inline="true">
                                        Checkbox 4
                                    </p-checkbox>

                                    <p-checkbox
                                        id="checkbox_inline_4"
                                        key="4"
                                        name="checkbox"
                                        :inline="true">
                                        Checkbox 5
                                    </p-checkbox>
                                </p-fieldset>
                            </div>

                            <div class="col w-full md:w-1/2">
                                <p-fieldset 
                                    label="Radios" 
                                    help="Select an option.">
                                    <p-radio
                                        id="radio_inline_0"
                                        key="0"
                                        name="radio"
                                        :inline="true">
                                        Radio 1
                                    </p-radio>

                                    <p-radio
                                        id="radio_inline_1"
                                        key="1"
                                        name="radio"
                                        :inline="true">
                                        Radio 2
                                    </p-radio>

                                    <p-radio
                                        id="radio_inline_2"
                                        key="2"
                                        name="radio"
                                        :inline="true">
                                        Radio 3
                                    </p-radio>

                                    <p-radio
                                        id="radio_inline_3"
                                        key="3"
                                        name="radio"
                                        :inline="true">
                                        Radio 4
                                    </p-radio>

                                    <p-radio
                                        id="radio_inline_4"
                                        key="4"
                                        name="radio"
                                        :inline="true">
                                        Radio 5
                                    </p-radio>
                                </p-fieldset>
                            </div>

                            <div class="col w-full">
                                <h3>Single Checkbox w/ Content</h3>
                            </div>

                            <div class="col w-full md:w-1/2">
                                <p-checkbox-single
                                    id="checkbox_single"
                                    name="checkbox_single"
                                    :required="true">
                                    <p>I have read and understand this website's <a href="#">Terms of Service</a> and agree with all policies.</p>
                                </p-checkbox-single>
                            </div>
                            
                            <div class="col w-full md:w-1/2">
                                <p-checkbox-single
                                    id="checkbox_single_error"
                                    name="checkbox_single_error"
                                    :hasError="true"
                                    errorMessage="This field is required to proceed"
                                    :required="true">
                                    <p>I have read and understand this website's <a href="#">Terms of Service</a> and agree with all policies.</p>
                                </p-checkbox-single>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      

        <hr>

        old code...

        <div class="row">
            <div class="col w-1/2">
                <div class="card">
                    <div class="card__body">
                        <h2 class="text-2xl"><fa-icon icon="angle-double-right" class="fa-fw"></fa-icon> Dropdowns</h2>

                        <p-dropdown icon no-arrow class="mr-3 mb-3" id="account-menu-test">
                            <fa-icon icon="ellipsis-h"></fa-icon>

                            <template v-slot:menu>
                                <p-dropdown-item>
                                    <p>You are signed in as <strong>picard.jean.luc@starfleet.com</strong></p>
                                </p-dropdown-item>

                                <p-dropdown-divider />

                                <p-dropdown-link to="/">
                                    <fa-icon class="icon" icon="cog"></fa-icon>
                                    Settings
                                </p-dropdown-link>

                                <p-dropdown-link to="/">
                                    <fa-icon class="icon" icon="credit-card"></fa-icon>
                                    Billing
                                </p-dropdown-link>

                                <p-dropdown-link to="/">
                                    <fa-icon class="icon" icon="moon"></fa-icon>
                                    Switch to dark mode
                                </p-dropdown-link>

                                <p-dropdown-divider />

                                <p-dropdown-link to="/">
                                    <fa-icon class="icon" icon="sign-out-alt"></fa-icon>
                                    Logout
                                </p-dropdown-link>
                            </template>
                        </p-dropdown>

                        <p-dropdown class="mr-3 mb-3" id="dropdown-with-content">
                            Dropdown With Content

                            <template v-slot:menu>
                                <p-dropdown-item>
                                    <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                                </p-dropdown-item>

                                <p-dropdown-item>
                                    <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                                </p-dropdown-item>
                            </template>
                        </p-dropdown>

                        <p-dropdown class="mr-3 mb-3" id="dropdown-with-links">
                            Dropdown With Links

                            <template v-slot:menu>
                                <p-dropdown-link href="#">
                                    This is a link
                                </p-dropdown-link>

                                <p-dropdown-link to="/">
                                    This is another link
                                </p-dropdown-link>

                                <p-dropdown-link href="https://google.com">
                                    Google
                                </p-dropdown-link>
                            </template>
                        </p-dropdown>

                        <p-dropdown class="mr-3 mb-3" id="dropdown-with-icons">
                            Dropdown With Icons

                            <template v-slot:menu>
                                <p-dropdown-link href="#">
                                    <fa-icon class="icon" icon="star"></fa-icon>

                                    Star
                                </p-dropdown-link>

                                <p-dropdown-link href="#">
                                    <fa-icon class="icon" icon="moon"></fa-icon>

                                    Moon
                                </p-dropdown-link>

                                <p-dropdown-link href="#">
                                    <fa-icon class="icon" icon="robot"></fa-icon>

                                    Robot
                                </p-dropdown-link>
                            </template>
                        </p-dropdown>

                        <p-dropdown class="mr-3 mb-3" id="dropdown-with-images">
                            Dropdown With Images

                            <template v-slot:menu>
                                <p-dropdown-link href="#">
                                    <img src="https://placeimg.com/50/50/animals" alt="Animal" class="dropdown__image rounded">

                                    Animal
                                </p-dropdown-link>

                                <p-dropdown-link href="#">
                                    <img src="https://placeimg.com/50/50/arch" alt="Architecture" class="dropdown__image rounded">

                                    Architecture
                                </p-dropdown-link>

                                <p-dropdown-link href="#">
                                    <img src="https://placeimg.com/50/50/nature" alt="Nature" class="dropdown__image rounded">

                                    Nature
                                </p-dropdown-link>
                            </template>
                        </p-dropdown>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellat dolorum vitae vero obcaecati explicabo quis, quibusdam odio nostrum in necessitatibus vel facere rem officia, deserunt adipisci possimus temporibus ab!</p>
                    </div>
                </div>
            </div>

            <div class="col w-1/2">
                <div class="card">
                    <div class="card__body">
                        <h2 class="text-2xl"><fa-icon icon="angle-double-right" class="fa-fw"></fa-icon> Toolbars</h2>

                        <div class="toolbar">
                            <div class="toolbar__group">
                                <div class="buttons">
                                    <div class="buttons__group">
                                        <button class="button">
                                            <fa-icon :icon="['fas', 'star']" class="fa-fw md:mr-2"></fa-icon>
                                            <span class="hidden md:inline">Button</span>
                                        </button>

                                        <button class="button">
                                            <fa-icon :icon="['fas', 'star']" class="fa-fw md:mr-2"></fa-icon>
                                            <span class="hidden md:inline">Button</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="toolbar__group toolbar__group--grow">
                                <div class="field__control">
                                    <input type="text" class="field__input" name="search" placeholder="Search for...">
                                </div>
                            </div>

                            <div class="toolbar__group">
                                <button class="button">
                                    <fa-icon :icon="['fas', 'star']" class="fa-fw md:mr-2"></fa-icon>
                                    <span class="hidden md:inline">Button</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card__body">
                        <h2 class="text-2xl"><fa-icon icon="angle-double-right" class="fa-fw"></fa-icon> Table</h2>
                    </div>

                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="index in 5" :key="index">
                                <td>Bernard Lane</td>
                                <td>Director, Human Resources</td>
                                <td>bernardlane@example.com</td>
                                <td>Owner</td>
                                <td class="actions">
                                    <p-dropdown icon no-arrow right :id="'action-dropdown-for-' + index">
                                        <fa-icon icon="ellipsis-h" class="icon"></fa-icon>

                                        <template v-slot:menu>
                                            <p-dropdown-link href="/" target="_blank">
                                                <fa-icon icon="pencil-alt" class="icon"></fa-icon>
                                                Edit
                                            </p-dropdown-link>

                                            <p-dropdown-link href="/" target="_blank">
                                                <fa-icon icon="trash-alt" class="icon"></fa-icon>
                                                Delete
                                            </p-dropdown-link>
                                        </template>
                                    </p-dropdown>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Styleguide'
                }
            }
        },

        data() {
            return {
                defaultTest: false,
                toc: 'no',
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