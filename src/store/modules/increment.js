import * as types from '../mutation-types'

// state
const state = {
  count: 0
}

// getters
const getters = {
  getCount: state => state.count
}

// actions
const actions = {
  addCount ({ commit }, num) {
    commit(types.INCREMENT, { num })
  }
}

// mutations
const mutations = {
  [types.INCREMENT] (state, { num }) {
    state.count = state.count + num
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
