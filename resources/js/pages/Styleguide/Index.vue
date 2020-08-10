<template>
    <div>
        <portal to="title">
            <app-title icon="swatchbook">Styleguide</app-title>
        </portal>

        <sg-color-pallet></sg-color-pallet>

        <sg-typography></sg-typography>

        <sg-buttons></sg-buttons>

        <sg-alerts></sg-alerts>

        <sg-accordions></sg-accordions>

        <sg-fields></sg-fields>     

        <!-- Old code needing refactor -->
        <!-- <div class="row">
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
        </div> -->
    </div>
</template>

<script>
    import Accordions from './Accordions'
    import Alerts from './Alerts'
    import Buttons from './Buttons'
    import ColorPallet from './ColorPallet'
    import Fields from './Fields'
    import Typography from './Typography'

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
                toc: 'no',
            }
        },

        components: {
            'sg-accordions': Accordions,
            'sg-alerts': Alerts,
            'sg-buttons': Buttons,
            'sg-color-pallet': ColorPallet,
            'sg-fields': Fields,
            'sg-typography': Typography
        }
    }
</script>