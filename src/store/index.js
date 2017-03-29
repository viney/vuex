import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import account from './modules/account'

Vue.use(Vuex)
console.log(account)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    account
  }
})
