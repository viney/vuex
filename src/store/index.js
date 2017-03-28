import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import increment from './modules/increment'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    increment
  }
})
