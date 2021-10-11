import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import blueprint from './blueprint'
import disks from './disks'
import fieldtypes from './fieldtypes'
import filemanager from './filemanager'
import form from './form'
import fusion from './fusion'
import inbox from './inbox'
import navigation from './navigation'
import notifications from './notifications'
import settings from './settings'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        blueprint,
        disks,
        fieldtypes,
        filemanager,
        form,
        fusion,
        inbox,
        navigation,
        notifications,
        settings,
    },
})
