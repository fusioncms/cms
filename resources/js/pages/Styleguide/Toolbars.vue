<template>
    <ui-card class="sg-toolbars">
        <ui-card-header title="Toolbars"></ui-card-header>

        <ui-card-body>
            <ui-toolbar>
                <ui-toolbar-group grow>
                    <ui-label fieldId="toolbar_search_input" hideLabel>Search</ui-label>
                    <div class="input-group">
                        <ui-button icon>
                            <fa-icon icon="search"></fa-icon>
                            <span class="sr-only">Search</span>
                        </ui-button>
                        <ui-input
                            id="toolbar_search_input"
                            name="search"
                            type="search"
                            placeholder="Search...">
                        </ui-input>
                    </div>
                </ui-toolbar-group>

                <ui-toolbar-group>
                    <ui-dropdown no-arrow id="toolbar_menu_text">
                        <fa-icon icon="sort-amount-down"></fa-icon>
                        <span class="sr-only-mobile">Sort</span>

                        <template v-slot:menu>
                            <ui-dropdown-link to="/">
                                <fa-icon class="icon" icon="font"></fa-icon>
                                Name
                            </ui-dropdown-link>

                            <ui-dropdown-link to="/">
                                <fa-icon class="icon" icon="file-alt"></fa-icon>
                                Type
                            </ui-dropdown-link>

                            <ui-dropdown-link to="/">
                                <fa-icon class="icon" icon="calendar-alt"></fa-icon>
                                Date
                            </ui-dropdown-link>

                            <ui-dropdown-divider></ui-dropdown-divider>

                            <ui-dropdown-link to="/">
                                <fa-icon class="icon" icon="sort-amount-down"></fa-icon>
                                Ascending
                            </ui-dropdown-link>

                            <ui-dropdown-link to="/">
                                <fa-icon class="icon" icon="sort-amount-up"></fa-icon>
                                Descending
                            </ui-dropdown-link>
                        </template>
                    </ui-dropdown>
                </ui-toolbar-group>

                <ui-toolbar-group>
                    <div class="buttons">
                        <div class="buttons__group">
                            <ui-button icon>
                                <fa-icon icon="bars"></fa-icon>
                                <span class="sr-only">List View</span>
                            </ui-button>

                            <ui-button icon disabled>
                                <fa-icon icon="th-large"></fa-icon>
                                <span class="sr-only">Grid View</span>
                            </ui-button>
                        </div>
                    </div>
                </ui-toolbar-group>
            </ui-toolbar>
        </ui-card-body>
    </ui-card>
</template>

<script>
    export default {}
</script>