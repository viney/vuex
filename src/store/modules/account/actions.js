import * as types from './mutation-types'

// actions
export default {
  incrementCount ({ commit }, num) {
    commit(types.INCREMENT, { num })
  }
}
