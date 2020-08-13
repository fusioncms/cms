<template>
    <div>
        <portal to="title">
            <page-title icon="swatchbook">Styleguide</page-title>
        </portal>
        
        <sg-color-pallet></sg-color-pallet>

        <sg-typography></sg-typography>

        <sg-buttons></sg-buttons>

        <sg-alerts></sg-alerts>

        <sg-accordions></sg-accordions>

        <sg-fields></sg-fields> 

        <sg-dropdowns></sg-dropdowns>

        <sg-toolbars></sg-toolbars>  

        <!-- Old code needing refactor -->
        <!-- <div class="row">
            <div class="col w-1/2">
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
    import Dropdowns from './Dropdowns'
    import Fields from './Fields'
    import Toolbars from './Toolbars'
    import Typography from './Typography'

    export default {
        head: {
            title() {
                return {
                    inner: 'Styleguide'
                }
            }
        },

        components: {
            'sg-accordions': Accordions,
            'sg-alerts': Alerts,
            'sg-buttons': Buttons,
            'sg-color-pallet': ColorPallet,
            'sg-dropdowns': Dropdowns,
            'sg-fields': Fields,
            'sg-toolbars': Toolbars,
            'sg-typography': Typography
        }
    }
</script>