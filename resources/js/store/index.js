import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import form from './form'
import inbox from './inbox'
import fusion from './fusion'
import settings from './settings'
import navigation from './navigation'
import fieldtypes from './fieldtypes'
import filemanager from './filemanager'
import formmanager from './form-manager'
import usermanager from './usermanager'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        form,
        inbox,
        fusion,
        settings,
        navigation,
        fieldtypes,
        filemanager,
        formmanager,
        usermanager,
    },
})
