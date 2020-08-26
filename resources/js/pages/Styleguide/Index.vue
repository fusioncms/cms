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

        <sg-tables></sg-tables> 

        <sg-modals></sg-modals>

        <sg-treeview></sg-treeview>
    </div>
</template>

<script>
    import Accordions from './Accordions'
    import Alerts from './Alerts'
    import Buttons from './Buttons'
    import ColorPallet from './ColorPallet'
    import Dropdowns from './Dropdowns'
    import Fields from './Fields'
    import Modals from './Modals'
    import Tables from './Tables'
    import Toolbars from './Toolbars'
    import Treeview from './Treeview'
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
            'sg-modals': Modals,
            'sg-tables': Tables,
            'sg-toolbars': Toolbars,
            'sg-treeview': Treeview,
            'sg-typography': Typography
        }
    }
</script>