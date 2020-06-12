window.Vue = require('vue')

require('./apexcharts.js')
require('./axios.js')
require('./components.js')
require('./fieldtypes.js')
require('./fontawesome.js')
require('./helpers.js')
require('./nprogress.js')
require('./ui.js')
require('./vueportal.js')

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
