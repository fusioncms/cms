<template>
    <ui-card class="sg-dropdowns">
        <ui-card-header title="Dropdowns"></ui-card-header>

        <ui-card-body>
            <ui-dropdown icon no-arrow class="mr-3 mb-3" id="account-menu-test">
                <fa-icon icon="ellipsis-h"></fa-icon>
                <span class="sr-only">Dropdown</span>

                <template v-slot:menu>
                    <ui-dropdown-item>
                        <p>You are signed in as <strong>picard.jean.luc@starfleet.com</strong></p>
                    </ui-dropdown-item>

                    <ui-dropdown-divider />

                    <ui-dropdown-link to="/">
                        <fa-icon class="icon" icon="cog"></fa-icon>
                        Settings
                    </ui-dropdown-link>

                    <ui-dropdown-link to="/">
                        <fa-icon class="icon" icon="credit-card"></fa-icon>
                        Billing
                    </ui-dropdown-link>

                    <ui-dropdown-link to="/">
                        <fa-icon class="icon" icon="moon"></fa-icon>
                        Switch to dark mode
                    </ui-dropdown-link>

                    <ui-dropdown-divider />

                    <ui-dropdown-link to="/">
                        <fa-icon class="icon" icon="sign-out-alt"></fa-icon>
                        Logout
                    </ui-dropdown-link>
                </template>
            </ui-dropdown>

            <ui-dropdown class="mr-3 mb-3" id="dropdown-with-content">
                Dropdown With Content

                <template v-slot:menu>
                    <ui-dropdown-item>
                        <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                    </ui-dropdown-item>

                    <ui-dropdown-item>
                        <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                    </ui-dropdown-item>
                </template>
            </ui-dropdown>

            <ui-dropdown class="mr-3 mb-3" id="dropdown-with-links">
                Dropdown With Links

                <template v-slot:menu>
                    <ui-dropdown-link href="#">
                        This is a link
                    </ui-dropdown-link>

                    <ui-dropdown-link to="/">
                        This is another link
                    </ui-dropdown-link>

                    <ui-dropdown-link href="https://google.com">
                        Google
                    </ui-dropdown-link>
                </template>
            </ui-dropdown>

            <ui-dropdown class="mr-3 mb-3" id="dropdown-with-icons">
                Dropdown With Icons

                <template v-slot:menu>
                    <ui-dropdown-link href="#">
                        <fa-icon class="icon" icon="star"></fa-icon>
                        Star
                    </ui-dropdown-link>

                    <ui-dropdown-link href="#">
                        <fa-icon class="icon" icon="moon"></fa-icon>
                        Moon
                    </ui-dropdown-link>

                    <ui-dropdown-link href="#">
                        <fa-icon class="icon" icon="robot"></fa-icon>
                        Robot
                    </ui-dropdown-link>
                </template>
            </ui-dropdown>

            <ui-dropdown class="mr-3 mb-3" id="dropdown-with-images">
                Dropdown With Images

                <template v-slot:menu>
                    <ui-dropdown-link href="#">
                        <img src="https://placeimg.com/50/50/animals" alt="Animal" class="dropdown__image rounded">
                        Animal
                    </ui-dropdown-link>

                    <ui-dropdown-link href="#">
                        <img src="https://placeimg.com/50/50/arch" alt="Architecture" class="dropdown__image rounded">
                        Architecture
                    </ui-dropdown-link>

                    <ui-dropdown-link href="#">
                        <img src="https://placeimg.com/50/50/nature" alt="Nature" class="dropdown__image rounded">
                        Nature
                    </ui-dropdown-link>
                </template>
            </ui-dropdown>
        </ui-card-body>
    </ui-card>
</template>

<script>
    export default {}
</script>