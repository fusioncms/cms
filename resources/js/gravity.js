/**
 * First we will load all of FusionCMS' JavaScript dependencies which
 * includes Vue and other libraries.
 */

import Fusion from '@/Fusion'

/**
 * Next, we load in our global Vue components and helpers.
 */
import '@/components'
import '@/fieldtypes'
import '@/helpers'
import '@/plugins'

/**
 * Finally, we create a fresh Fusion instance.
 */

window.Fusion = new Fusion(window.config)

window.addEventListener('DOMContentLoaded', function () {
    window.Fusion.boot()
})

if (window.environment === 'production') {
    console.log('/*')
    console.log(' * FusionCMS')
    console.log(' *')
    console.log(' * Author:    efelle creative')
    console.log(' * Website:   https://beta.getfusioncms.com')
    console.log(' * Copyright: 2020')
    console.log(' */')
}