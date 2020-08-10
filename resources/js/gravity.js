/**
 * First we will load all of FusionCMS' JavaScript dependencies which
 * includes Vue and other libraries.
 */

// TODO: Import plugins

import Fusion from './Fusion'

/**
 * Next, we create a fresh Fusion instance.
 */

window.Fusion = new Fusion(window.config)

window.addEventListener('DOMContentLoaded', function () {
    window.Fusion.boot()
})

if (window.environment === 'production') {
    console.log('/*')
    console.log(' * FusionCMS')
    console.log(' * Oh, hello there!')
    console.log(' *')
    console.log(' * Author:    efelle creative')
    console.log(' * Website:   https://beta.getfusioncms.com')
    console.log(' * Copyright: 2020')
    console.log(' */')
}