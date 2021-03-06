import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as modules from './modules'
import * as getters from 'src/store/getters'

export default new Vuex.Store({
  getters,
  modules: (() => {
    let newModules = {}
    Object.keys(modules).forEach(key => {
      newModules[key] = modules[key].default
    })
    return newModules
  })()
})
