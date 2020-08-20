<template>
    <p-card class="sg-toolbars">
        <p-card-header title="Toolbars"></p-card-header>

        <p-card-body>
            <p-toolbar>
                <p-toolbar-group grow>
                    <p-label fieldId="toolbar_search_input" hideLabel>Search</p-label>
                    <div class="input-group">
                        <p-button icon>
                            <fa-icon icon="search"></fa-icon>
                            <span class="sr-only">Search</span>
                        </p-button>
                        <p-input
                            id="toolbar_search_input"
                            name="search"
                            type="search"
                            placeholder="Search...">
                        </p-input>
                    </div>
                </p-toolbar-group>

                <p-toolbar-group>
                    <p-dropdown no-arrow id="toolbar_menu_text">
                        <fa-icon icon="sort-amount-down"></fa-icon>
                        <span class="sr-only-mobile">Sort</span>

                        <template v-slot:menu>
                            <p-dropdown-link to="/">
                                <fa-icon class="icon" icon="font"></fa-icon>
                                Name
                            </p-dropdown-link>

                            <p-dropdown-link to="/">
                                <fa-icon class="icon" icon="file-alt"></fa-icon>
                                Type
                            </p-dropdown-link>

                            <p-dropdown-link to="/">
                                <fa-icon class="icon" icon="calendar-alt"></fa-icon>
                                Date
                            </p-dropdown-link>

                            <p-dropdown-divider></p-dropdown-divider>

                            <p-dropdown-link to="/">
                                <fa-icon class="icon" icon="sort-amount-down"></fa-icon>
                                Ascending
                            </p-dropdown-link>

                            <p-dropdown-link to="/">
                                <fa-icon class="icon" icon="sort-amount-up"></fa-icon>
                                Descending
                            </p-dropdown-link>
                        </template>
                    </p-dropdown>
                </p-toolbar-group>

                <p-toolbar-group>
                    <div class="buttons">
                        <div class="buttons__group">
                            <p-button icon>
                                <fa-icon icon="bars"></fa-icon>
                                <span class="sr-only">List View</span>
                            </p-button>

                            <p-button icon disabled>
                                <fa-icon icon="th-large"></fa-icon>
                                <span class="sr-only">Grid View</span>
                            </p-button>
                        </div>
                    </div>
                </p-toolbar-group>
            </p-toolbar>
        </p-card-body>
    </p-card>
</template>

<script>
    export default {}
</script>