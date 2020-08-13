<template>
    <p-card class="sg-dropdowns">
        <p-card-header title="Dropdowns"></p-card-header>

        <p-card-body>
            <p-dropdown icon no-arrow class="mr-3 mb-3" id="account-menu-test">
                <fa-icon icon="ellipsis-h"></fa-icon>
                <span class="sr-only">Dropdown</span>

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
        </p-card-body>
    </p-card>
</template>

<script>
    export default {}
</script>